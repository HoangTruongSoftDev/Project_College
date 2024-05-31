

const { MongoClient, ObjectId, GridFSBucket } = require('mongodb');
const ConfigDB = require('./configDB.js');
const fs = require('fs');
const path = require('path');
const { app } = require('electron');
class FileDB {
    static async uploadFile(filePath) {
        try {
            const client = new MongoClient(ConfigDB.url, { useNewUrlParser: true, useUnifiedTopology: true });
            await client.connect();
            const db = client.db(ConfigDB.dbName);
            const bucket = new GridFSBucket(db);

            return new Promise((resolve, reject) => {
                const uploadStream = bucket.openUploadStream(path.basename(filePath));
                const fileStream = fs.createReadStream(filePath);

                fileStream.pipe(uploadStream)
                    .on('error', (error) => {
                        console.error('Error uploading file:', error);
                        reject(error);
                    })
                    .on('finish', () => {
                        console.log('File uploaded successfully, ID:', uploadStream.id.toHexString());
                        resolve({ fileId: uploadStream.id.toHexString() }); // Convert ObjectId to string
                    });
            });
        } catch (error) {
            console.error('Error in file upload process:', error);
            throw error;
        }
    }
    static async downloadFile(fileId) {
 
        const uri = ConfigDB.url; // replace with your MongoDB URI
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
        try {
            await client.connect();
            const database = client.db(ConfigDB.dbName); // replace with your database name
            const bucket = new GridFSBucket(database, { bucketName: 'fs' }); // use 'fs' as the bucket name for default GridFS
    
            const objectFileId = new ObjectId(fileId); // replace with the ObjectId of the file you want to retrieve
    
            // Retrieve the file metadata
            const filesCollection = database.collection('fs.files');
            const fileDocument = await filesCollection.findOne({ _id: objectFileId });
    
            if (!fileDocument) {
                throw new Error('File not found');
            }
    
            const filename = fileDocument.filename; // Assuming the filename has the correct extension
    
            // const destinationDir = path.join(__dirname, '..', 'server', 'downloads');
            const appPath = app.getAppPath();
            const destinationDir = path.join(appPath, '..','..','..','..','downloads');
            const destinationPath = path.join(destinationDir, `${filename}`);

            // Check if the destination directory exists, create it if it doesn't
            if (!fs.existsSync(destinationDir)) {
                fs.mkdirSync(destinationDir, { recursive: true });
            }

            const downloadStream = bucket.openDownloadStream(objectFileId);
            const writeStream = fs.createWriteStream(destinationPath);
    
            return new Promise((resolve, reject) => {
                downloadStream.pipe(writeStream)
                    .on('error', (error) => {
                        client.close();
                        reject(`Error while downloading the file: ${error}`);
                    })
                    .on('finish', () => {
                        client.close();
                        resolve(destinationPath);
                    });
            });
        } catch (error) {
            console.error('Error:', error);
            client.close();
        }
    }

    static async viewFile(fileId) {
 
        const uri = ConfigDB.url; // replace with your MongoDB URI
        const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
    
        try {
            await client.connect();
            const database = client.db(ConfigDB.dbName); // replace with your database name
            const bucket = new GridFSBucket(database, { bucketName: 'fs' }); // use 'fs' as the bucket name for default GridFS
    
            const objectFileId = new ObjectId(fileId); // replace with the ObjectId of the file you want to retrieve
    
            // Retrieve the file metadata
            const filesCollection = database.collection('fs.files');
            const fileDocument = await filesCollection.findOne({ _id: objectFileId });
    
            if (!fileDocument) {
                throw new Error('File not found');
            }
    
            const filename = fileDocument.filename; // Assuming the filename has the correct extension
    
            const appPath = app.getAppPath();
            const destinationDir = path.join(appPath, '..','..','..','..','observation');
            const destinationPath = path.join(destinationDir, `${filename}`);

            // Check if the destination directory exists, create it if it doesn't
            if (!fs.existsSync(destinationDir)) {
                fs.mkdirSync(destinationDir, { recursive: true });
            }

            const downloadStream = bucket.openDownloadStream(objectFileId);
            const writeStream = fs.createWriteStream(destinationPath);
    
            return new Promise((resolve, reject) => {
                downloadStream.pipe(writeStream)
                    .on('error', (error) => {
                        client.close();
                        reject(`Error while downloading the file: ${error}`);
                    })
                    .on('finish', () => {
                        client.close();
                        resolve(destinationPath);
                    });
            });
        } catch (error) {
            console.error('Error:', error);
            client.close();
        }
    }
}

module.exports = FileDB
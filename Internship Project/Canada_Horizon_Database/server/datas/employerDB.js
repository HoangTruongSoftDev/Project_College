

const { MongoClient, ObjectId } = require('mongodb');
const ConfigDB  = require('./configDB.js');

class EmployerDB {
    static async create(employer) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.employerCollection);
            await collection.insertOne(employer);
            
           return employer;
        }
        catch (err) {
             
            console.log(`Error: ${err}`);
        }
        finally {
            if (client) {
                await client.close();
            }
        }
    }
    static async delete(employerId) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.employerCollection);  
            const employer = await collection.deleteOne({ _id: new ObjectId(employerId) });
            return employer;
        }
        catch (err) {
             
            console.log(`Error: ${err}`);
        }
        finally {
            if (client) {
                await client.close();
            }
        }
    }
    static async update(employerId, employer) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.employerCollection);
            const updateFields = {
                $set: {
                    companyName: employer.companyName,
                    address: employer.address,
                    phoneNumber: employer.phoneNumber,
                    professionalActivities: employer.professionalActivities,
                    EIMT: employer.EIMT,
                    bills: employer.bills
                }
            };
            
            await collection.updateOne({ _id: new ObjectId(employerId) }, updateFields);
            return employer;
        }
        catch (err) {
             
            console.log(`Error: ${err}`);
        }
        finally {
            if (client) {
                await client.close();
            }
        }
    }
    static async findByCompanyName(keyword) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.employerCollection);
            const result = await collection.find( 
                {companyName: { $regex: keyword, $options: 'i' }}
            ).toArray();
            const modifiedResult = result.map(doc => {
                if (doc._id instanceof ObjectId) {
                  doc._id = doc._id.toString();
                } else {
                  doc._id = String(doc._id);
                }
                return doc;
              });
        
              return modifiedResult;
        }
        catch (err) {
             
        }
        finally {
            if (client) {
                await client.close();
            }
        }
    }
    static async findById(id) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.employerCollection);
            const result = await collection.findOne( 
                {_id: new ObjectId(id)}
            );
            return result;
        }
        catch (err) {
             
        }
        finally {
            if (client) {
                await client.close();
            }
        }
    }
    static async findByAddress(keyword) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.employerCollection);
            const result = await collection.find( 
                { address : { $regex: keyword, $options: 'i' } }
            ).toArray();
            const modifiedResult = result.map(doc => {
                if (doc._id instanceof ObjectId) {
                  doc._id = doc._id.toString();
                } else {
                  doc._id = String(doc._id);
                }
                return doc;
              });
        
              return modifiedResult;
        }
        catch (err) {
             
        }
        finally {
            if (client) {
                await client.close();
            }
        }
    }
    static async findByPhoneNumber(keyword) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.employerCollection);
            const result =  await collection.find({phoneNumber : { $regex: keyword, $options: 'i' }}).toArray();
            const modifiedResult = result.map(doc => {
                if (doc._id instanceof ObjectId) {
                  doc._id = doc._id.toString();
                } else {
                  doc._id = String(doc._id);
                }
                return doc;
              });
        
              return modifiedResult;
        }
        catch (err) {
             
        }
        finally {
            if (client) {
                await client.close();
            }
        }
    }
    static async findByProfessionalActivities(keyword) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.employerCollection);
            const result =  await collection.find({professionalActivities : { $regex: keyword, $options: 'i' }}).toArray();
            const modifiedResult = result.map(doc => {
                if (doc._id instanceof ObjectId) {
                  doc._id = doc._id.toString();
                } else {
                  doc._id = String(doc._id);
                }
                return doc;
              });
        
              return modifiedResult;
        }
        catch (err) {
             
        }
        finally {
            if (client) {
                await client.close();
            }
        }
    }
    static async findByEIMT(keyword) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.employerCollection);
            const result =  await collection.find({EIMT : { $regex: keyword, $options: 'i' }}).toArray();
            const modifiedResult = result.map(doc => {
                if (doc._id instanceof ObjectId) {
                  doc._id = doc._id.toString();
                } else {
                  doc._id = String(doc._id);
                }
                return doc;
              });
        
              return modifiedResult;
        }
        catch (err) {
             
        }
        finally {
            if (client) {
                await client.close();
            }
        }
    }
    static async findByCreatedDate(startDate, endDate) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = await db.collection(ConfigDB.employerCollection);
            const start = new Date(startDate);
            const end = new Date(endDate);
            const query = {
                createdDate : {
                    $gte: start, // $gte stands for greater or equal than
                    $lte: end, // $lte stands for smaller or equal than
                }
            }
            const result = await collection.find(query).toArray();
            const modifiedResult = result.map(doc => {
                if (doc._id instanceof ObjectId) {
                  doc._id = doc._id.toString();
                } else {
                  doc._id = String(doc._id);
                }
                return doc;
              });
        
              return modifiedResult;
        }
        catch (err) {
             
        }
        finally {
            if (client) {
                await client.close();
            }
        }
    }
    static async findAll() {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.employerCollection);
            const result = await collection.find().toArray();
            const modifiedResult = result.map(doc => {
                if (doc._id instanceof ObjectId) {
                  doc._id = doc._id.toString();
                } else {
                  doc._id = String(doc._id);
                }
                return doc;
              });
        
              return modifiedResult;
        }
        catch (err) {
             
        }
        finally {
            if (client) {
                await client.close();
            }
        }
    }
}
module.exports = EmployerDB
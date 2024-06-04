

const { MongoClient, ObjectId } = require('mongodb');
const ConfigDB  = require('./configDB.js');

class WorkerDB {
    static async delete(workerId) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.workerCollection);  
            const worker = await collection.deleteOne({ _id: new ObjectId(workerId) });
            return worker;
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
    static async update(workerId, worker) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.workerCollection);
            const updateFields = {
                $set: {
                    firstName: worker.firstName,
                    lastName: worker.lastName,
                    birthDate: worker.birthDate,
                    address: worker.address,
                    phoneNumber: worker.phoneNumber,
                    professionalDiplomas: worker.professionalDiplomas,
                    professions: worker.professions,
                    bills: worker.bills,
                    resume: worker.resume,
                    motivationLetter: worker.motivationLetter,
                }
            };
            
            await collection.updateOne({ _id: new ObjectId(workerId) }, updateFields);
            return worker;
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
    static async create(worker) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.workerCollection);
            await collection.insertOne(worker);
            
           return worker;
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

    static async findAll() {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.workerCollection);
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

    static async findByCreatedDate(startDate, endDate) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.workerCollection);
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
    static async findByBirthDate(startDate, endDate) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.workerCollection);
            const start = new Date(startDate);
            const end = new Date(endDate);
            const query = {
                birthDate : {
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
    static async findByFirstName(keyword) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.workerCollection);
            const result = await collection.find( 
                {firstName: { $regex: keyword, $options: 'i' }}
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
    
    static async findByLastName(keyword) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.workerCollection);
            const result = await collection.find( 
                {lastName: { $regex: keyword, $options: 'i' }}
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
    static async findByAddress(keyword) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.workerCollection);
            const result = await collection.find( 
                {address: { $regex: keyword, $options: 'i' }}
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
            const collection = db.collection(ConfigDB.workerCollection);
            const result = await collection.find( 
                {phoneNumber: { $regex: keyword, $options: 'i' }}
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
    static async findByProfessionalDiplomas(keyword) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.workerCollection);
            const result =  await collection.find({professionalDiplomas : { $regex: keyword, $options: 'i' }}).toArray();
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
    static async findByProfessions(keyword) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.workerCollection);
            const result =  await collection.find({professions : { $regex: keyword, $options: 'i' }}).toArray();
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
            const collection = db.collection(ConfigDB.workerCollection);
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
}
module.exports = WorkerDB
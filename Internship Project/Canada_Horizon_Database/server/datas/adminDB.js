// import { MongoClient } from 'mongodb';
// import { ConfigDB } from './configDB.js';

const { MongoClient, ObjectId } = require('mongodb');
const ConfigDB  = require('./configDB.js');

class AdminDB {
    static async create(admin) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.adminCollection);
            await collection.insertOne(admin);
            
           return admin;
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
    static async delete(adminId) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.adminCollection);  
            const admin = await collection.deleteOne({ _id: new ObjectId(adminId) });
            return admin;
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
    static async update(adminId, admin) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.adminCollection);
           
            const updateFields = {
                $set: {
                    firstName: admin.firstName,
                    lastName: admin.lastName,
                    email: admin.email,
                    password: admin.password
                }
            };
            
            await collection.updateOne({ _id: new ObjectId(adminId) }, updateFields);
            return admin;
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
    static async findByFName(keyword) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.adminCollection);
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
    static async findById(id) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.adminCollection);
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
    static async findByLName(keyword) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.adminCollection);
            const result = await collection.find( 
                { lastName : { $regex: keyword, $options: 'i' } }
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
    static async findByEmail(keyword) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.adminCollection);
            const result =  await collection.find({email : { $regex: keyword, $options: 'i' }}).toArray();
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
            const collection = await db.collection(ConfigDB.adminCollection);
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
            const collection = db.collection(ConfigDB.adminCollection);
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
module.exports = AdminDB
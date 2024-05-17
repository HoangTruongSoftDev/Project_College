// import { MongoClient } from 'mongodb';
// import { ConfigDB } from './configDB.js';

const { MongoClient } = require('mongodb');
const ConfigDB  = require('./configDB.js');

class AdminDB {
    static async create(admin) {
        
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.adminCollection);
            await collection.insertOne(admin);
            // alert(`User ${admin.getFullName()} is created successfully !!!`);
            console.log(`User ${admin.getFullName()} is created successfully !!!`)
        }
        catch (err) {
            // alert(`Error: ${err}`);
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
                {firstName: keyword}
            ).toArray();
            return result;
        }
        catch (err) {
            // alert("Error: ", err)
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
                { lastName : keyword }
            ).toArray();
            return result;
        }
        catch (err) {
            // alert("Error: ", err)
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
            const result =  await collection.find({email : keyword}).toArray();
            return result;
        }
        catch (err) {
            // alert("Error: ", err)
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
            // const result = await collection.find(query).toArray();
            const result = await collection.find(query).toArray();
            return result;
        }
        catch (err) {
            // alert("Error: ", err)
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
            return result;
        }
        catch (err) {
            // alert("Error: ", err)
        }
        finally {
            if (client) {
                await client.close();
            }
        }
    }
}
module.exports = AdminDB
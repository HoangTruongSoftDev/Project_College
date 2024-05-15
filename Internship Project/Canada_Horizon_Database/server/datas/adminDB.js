// import { MongoClient } from 'mongodb';
// import { ConfigDB } from './configDB.js';

const { MongoClient } = require('mongodb');
const  ConfigDB  = require('./configDB.js');

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

    static async find(type, keywordOrStartDate, endDate) {
        switch (type) {
            case "FirstName":
                this.findByFName(keywordOrStartDate);
                break;
            case "LastName":
                this.findByLName(keywordOrStartDate);
                break;
            case "Email":
                this.findByEmail(keywordOrStartDate);
                break;
            case "CreatedDate":
                this.findByCreatedDate(keywordOrStartDate, endDate);
                break;
        }
    }
    static async findByFName(keyword) {
        let client;
        try {
            client = await MongoClient.connect(ConfigDB.url);
            const db = client.db(ConfigDB.dbName);
            const collection = db.collection(ConfigDB.adminCollection);
            const result = collection.find( 
                { firstName: keyword }
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
            const result = collection.find( 
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
            const result = collection.find({email : keyword}).toArray();
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
            const collection = db.collection(ConfigDB.adminCollection);
            const query = {
                createdDate : {
                    $gte: new Date(startDate), // $gte stands for greater or equal than
                    $lte: new Date(endDate), // $lte stands for smaller or equal than
                }
            }
            const result = collection.find( 
                { createdDate : query }
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
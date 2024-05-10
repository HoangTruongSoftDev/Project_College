/*
Quiz on March 28:

Implement a javascript project which does the below tasks:
 1. create a MongoDB database and name it Account
 2. Create a collection inside of your database and name it Saving
 3. Add four attributes to it as: AccountNumber, AccountType, Balance, Status
 4. Insert multiple records into it by javascript
 5. remove all the records which their status is inactive
 6. add a new column (attribute) and name it Date and initialize it to null.
* */

const {MongoClient} = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "Account";
const collectionName = "Saving";

const listOfAccounts = [
    {AccountNumber: '1', AccountType: 'vip', Balance: '1000', Status: 'active'},
    {AccountNumber: '2', AccountType: 'non-vip', Balance: '5000', Status: 'inactive'},
    {AccountNumber: '3', AccountType: 'vip', Balance: '3000', Status: 'inactive'},
    {AccountNumber: '4', AccountType: 'non-vip', Balance: '7000', Status: 'active'},
    {AccountNumber: '5', AccountType: 'vip-vip', Balance: '8000', Status: 'active'},
    {AccountNumber: '6', AccountType: 'non-vip', Balance: '2000', Status: 'inactive'}
]

async function initializeDatabaseAndConnection(url, dbName, collectionName) {
    const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });
    try {
        await  client.connect();
        const db = client.db(dbName);
        await db.createCollection(collectionName);
    } catch (err) {
        console.error('Error occurred: ', err);
    } finally {
        await client.close();
    }
}

async function insertAccount(url, dbName, collectionName, listOfAccounts) {
    let client;
    try {
        client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.insertMany(listOfAccounts);
    }
    catch (err) {
        console.error("Error: ", err)
    }
    finally {
        if (client) {
            await client.close();
        }
    }
}
async function removeAccounts(url, dbName, collectionName) {
    let client;
    try {
        client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        const result = await collection.deleteMany({
            ['Status']: 'inactive'
        });
        if (result.deletedCount === 0) {
            console.log("No record found with the given info");
        }
    }
    catch (err) {
        console.error("Error: ", err);
    }
    finally {
        if (client) {
            await client.close();
        }
    }
}
async function addDateAttribute(url, dbName, collectionName) {
    const client = await MongoClient.connect(url);
    try {
        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Add the new attribute with $set
        await collection.updateMany({}, { $set: { Date: null } });
    } catch (err) {
        console.error("Error adding attribute:", err);
    } finally {
        await client.close();
    }
}
initializeDatabaseAndConnection(url, dbName, collectionName);
insertAccount(url, dbName, collectionName, listOfAccounts);
removeAccounts(url, dbName, collectionName)
addDateAttribute(url, dbName, collectionName);
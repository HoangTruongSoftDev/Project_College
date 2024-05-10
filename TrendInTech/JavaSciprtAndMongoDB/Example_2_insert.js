// Setting of the database and collection
const {MongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const dbName = 'db_TrendInTechClass';
const collectionName = 'Users';

// creating a data structure to insert into the collection
const userData = [
    {Name: 'Truong', Age: 21, Email: 'truong@gmail.com'},
    {Name: 'Khoa', Age: 20, Email: 'khoa@gmail.com'},
    {Name: 'Thien', Age: 19, Email: 'thien@gmail.com'}
]
// here we define an async function to insert data  into the collection

async function insertData() {
    let client;
    try {
        // connect to MongoDB server
        client = await MongoClient.connect(url);
        // get the database object
        const db = client.db(dbName);
        // get the collection object
        const collection = db.collection(collectionName);
        // now we can start inserting into the collection
        const result = await collection.insertMany(userData);
        // if you want to insert one record you should use the insertOne() method instead of insertMany()
        console.log(`${result.insertedCount} documents inserted successfully`);
    }
    catch (err) {
        console.error("Error: ", err)
    }
    finally {
        if (client) {
            // close the connection
            await client.close();
        }
    }
}

insertData();





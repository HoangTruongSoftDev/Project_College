/*
    We want to learn a new database which is fundamentally different from SQL Server,
    Oracle, and MySQL. The aforementioned databases are relational but MongoDB is not, and
    currently it is the most popular database for complicated tasks which should run in the
    real time such as chatting, video game over the cloud. AI application, etc. Since a
    decade ago many non-relational databases have been introduced such as MongoDB, GraphQL,
    Cassandra. All of these databases are 100% compatible with front-end formats such as
    xm;, webp, html, css, json.

    What makes non-relational databases great is that they do not have table, and instead
    they employ collection and data are not stored in a table format, but they form graph or tree
    data structure which are amazingly fast in real-time.

    Today, we will start writing code with Javascript and MongoDB and learn important concepts
    about this super powerful database

    Use the below command to install the driver of mongodb for javascript in terminal:
    npm install mongodb
* */

// now we write a code to create a database and a collection on mongoDB

const {MongoClient} = require('mongodb');

// now we should name a connection to database
const url = 'mongodb://localhost:27017';

// now we set a name for our database
const dbName = 'db_TrendInTechClass'; // you can change the name of the database

// after creating the database, we create a collection
const collectionName = 'Users';

// after all these, we should create a mongoClient
const client = new MongoClient(url, { useNewUrlParser: true, useUnifiedTopology: true });

// now we can use an async function to create the database because only one time we create a database and we can use it forever
async function createDatabaseAndCollection() {
    try {
        // connect to the mongodb server
        await  client.connect();

        // we select the database
        const db = client.db(dbName);

        //create a new collection with the name which we set above
        await db.createCollection(collectionName);
        console.log(`Collection '${collectionName}' created successfully in database '${dbName}'`);
    } catch (err) {
        console.error('Error occurred: ', err);
    }
    finally {
        await client.close();
        /*
        // remember that when you use a try-catch block whether you run the code inside of the try block
        // or you run into the catch block, always all the time the finally block will be executed.
        Therefore, it is better to put the closing part of your database into finally block.
        Otherwise, we have to once close it in the try block and another time in catch which is not a professional job
        * */
    }
}
// call the function above
createDatabaseAndCollection()







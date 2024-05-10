const {MongoClient, ObjectId} = require('mongodb');

// Define database connection settings
const url = 'mongodb://localhost:27017';
const dbName = 'db_TrendInTechClass';
const collectionName = 'Users';
const attributeToDelete = 'Name';
const valueToDeleteBy = 'Thien';

// here we write our own function for delete
async function deleteRecordByAttribute() {
    let client;
    try {
        client = await MongoClient.connect(url);
        const db = client.db(dbName);
        const collection = db.collection(collectionName);
        // delete the record based on the specified attribute and value

        // if we call deleteOne, it will just delete the first matched document
        // if we call deleteMany, it will delete all matched documents
        const result = await collection.deleteOne({
            [attributeToDelete]: valueToDeleteBy
        });
        // we check if the record was deleted successfully
        if (result.deletedCount === 1) {
            console.log(`Result with ${attributeToDelete} and ${valueToDeleteBy} deleted successfully`);

        }
        else {
            console.log("No record found with the given info");
        }
    }
    catch (err) {
        console.error("Error: ", err);
    }
    finally {
        if (client) {
            await client.close(); //recall that await means stay until the compiler finished the job then continue
            // meaning that if the task is no finished you have to stop and watch it ends
        }
    }
}
deleteRecordByAttribute();
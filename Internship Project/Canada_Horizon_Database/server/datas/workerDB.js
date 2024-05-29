

const { MongoClient, ObjectId } = require('mongodb');
const ConfigDB  = require('./configDB.js');

class WorkerDB {
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
}
module.exports = WorkerDB
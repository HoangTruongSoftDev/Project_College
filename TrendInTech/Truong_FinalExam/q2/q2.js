
class Transaction {
    constructor(amount, category, description) {
        this.amount = amount;
        this.category = category;
        this.description = description;
    }
}
class Income extends Transaction {
    constructor(amount, category, description) {
        super(amount, category, description);
        this.type = 'income';
    }
}
class Expense extends Transaction {
    constructor(amount, category, description) {
        super(amount, category, description);
        this.type = 'expense';
    }
}
class SavingGoal {
    constructor(name, targetAmount, category, progress) {
        this.name = name;
        this.targetAmount = targetAmount;
        this.category = category;
        this.progress = 0;
    }
}
class FinancialManager {
    generateReport(transactionList, savingGoalList) {
        this.calculateTotalSavings(transactionList);
        console.log(savingGoalList);

    }
    async addSavingGoal(dbConfig, savingGoal) {
        let client;
        try {
            client = await MongoClient.connect(dbConfig["url"]);
            const db = client.db(dbConfig["dbName"]);
            const collection = db.collection("SavingGoals");
            const result = await collection.insertOne(savingGoal);
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
    calculateTotalSavings(transactionList) {
        var result = this.calculateTotalIncome(transactionList) - this.calculateTotalExpense(transactionList);
        console.log("Total Saving: " + result);
    }
    calculateTotalIncome(transactionList) {
        var result =  transactionList
            .filter(transaction => transaction.type === "income")
            .reduce((total, income) => total + parseInt(income.amount), 0);
        console.log("Total Income: " + result);
        return result;
    }
    calculateTotalExpense(transactionList) {
        var result =  transactionList
            .filter(transaction => transaction.type === "expense")
            .reduce((total, expense) => total + parseInt(expense.amount), 0);
        console.log("Total Expense: " + result);
        return result;
    }
    async addTransaction(dbConfig, transaction) {
        let client;
        try {
            client = await MongoClient.connect(dbConfig["url"]);
            const db = client.db(dbConfig["dbName"]);
            const collection = db.collection("Transactions");
            const result = await collection.insertOne(transaction);
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
    async  editTransaction(dbConfig, transaction) {
        console.log()
        let client;
        try {
            client = await MongoClient.connect(dbConfig["url"]);
            const db = client.db(dbConfig["dbName"]);
            const collection = db.collection("Transactions");
            const result = await collection.updateOne(
                { _id: new ObjectId(transaction._id) },
                    { $set: transaction }
            );
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
    async findAllTransaction(dbConfig) {
        let client;
        try {
            client = await MongoClient.connect(dbConfig['url']);
            const db = client.db(dbConfig['dbName']);
            const collection = db.collection("Transactions");
            const result = await collection.find().toArray();
            return result;
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
    async findAllSavingGoals(dbConfig) {
        let client;
        try {
            client = await MongoClient.connect(dbConfig['url']);
            const db = client.db(dbConfig['dbName']);
            const collection = db.collection("SavingGoals");
            const result = await collection.find().toArray();
            return result;
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
    async deleteTransaction(dbConfig, transactionId) {
        let client;
        try {
            client = await MongoClient.connect(url);
            const db = client.db(dbName);
            const collection = db.collection("Transactions");
            const result = await collection.deleteOne({
                _id: transactionId
            });

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
}
const {MongoClient, ObjectId} = require('mongodb');
const url = 'mongodb://localhost:27017'; // you have to get your own url to run
const dbName = 'db_finance';


// console.log('Found transactions:', transactions[0]['_id']);

let operationList = {
    1 : "Add Transaction",
    2 : "Delete Transaction",
    3 : "Update Transaction",
    4 : "View Transaction",
    5: "Calculate Income",
    6: "Calculate Expense",
    7: "Calculate Saving",
    8: "Add Saving Goals",
    9: "Generate Report",
    10: "Exit"
}
const ps = require("prompt-sync");
const prompt = ps();
function handleOperation(savingGoals, transactionList, operationIndex, financeDB) {
    const financialManager = new FinancialManager();

    switch (operationIndex) {
        case 1:
            console.log("Adding Transaction\n");
            var amount = prompt("Enter your amount: ");
            var category = prompt("Enter your category: ");
            var description = prompt("Enter your transaction description: ");
            var type;
            while (true) {
                type = prompt("Type of transaction (income/expense): ");
                if (type === "income" || type === "expense" ) {
                    break;
                }
                else {
                    console.log("Please enter income or expense")
                }
            }
            var transaction;
            if (type === "income") {
                transaction = new Income(amount, category, description);
            }
            else if  (type === "expense"){
                transaction = new Expense(amount, category, description);
            }
            financialManager.addTransaction(financeDB, transaction)
                .then(() => {
                    console.log("A new transaction has been added");
                })
                .catch(err => console.error('Error in transactions: ', err));
            break;
        case 2:
            while (true) {
                displayTransactionList(transactionList);
                let removedIndex = parseInt(prompt("What transaction do you want to remove: ")) - 1;
                if (removedIndex > transactionList.length) {
                    console.log("Please enter the available transaction number")
                }
                else {
                    financialManager.deleteTransaction(financeDB, transactionList[removedIndex]['_id']).then(() => {
                    }).catch(err => console.error('Error in transactions: ', err));
                    break;
                }
            }
            break;
        case 3:
            while (true) {
                displayTransactionList(transactionList);
                let updatedIndex = parseInt(prompt("What transaction do you want to update: ")) - 1;
                if (updatedIndex > transactionList.length) {
                    console.log("Please enter the available transaction number")
                }
                else {
                    var transaction = transactionList[updatedIndex];
                    var newAmount = parseInt(prompt("Enter your new amount: "));
                    transaction.amount = newAmount;
                    financialManager.editTransaction(financeDB, transaction).then(() => {
                    }).catch(err => console.error('Error in transactions: ', err));
                    break;
                }
            }
            break;
        case 4:
            displayTransactionList(transactionList);
            break;

        case 5:
            financialManager.calculateTotalIncome(transactionList);
            break;
        case 6:
            financialManager.calculateTotalExpense(transactionList);
            break;
        case 7:
            financialManager.calculateTotalSavings(transactionList);
            break;
        case 8:
            console.log("Adding Saving Goal\n");
            var name = prompt("Enter your saving goal name: ");
            var targetAmount = prompt("Enter your target Amount: ");
            var catego = prompt("Enter your category: ");
            var progression = prompt("Enter your progression: ");
            var savingGoal = new SavingGoal(name, targetAmount, catego, progression);
            financialManager.addSavingGoal(financeDB, savingGoal);
            break;
        case 9:
            financialManager.generateReport(transactionList, savingGoals);
            break;
        case 10:
            console.log("Thank you for using our app");
            break;
    }
}
function displayTransactionList(transactionList) {
    console.log("List of Transaction (amount - category - description - type): ")
    transactionList.forEach((element, index) => {
        console.log((index + 1) + ". " + element['amount'] + " - " + element['category'] + " - " + element['description'] + " - " + element['type']);
    })
}
function displayOperationList() {
    Object.keys(operationList).forEach(key => {
        console.log(key + ". " + operationList[key])
    })
}
function askOperation(operationList) {
    console.log("What do you want to do?")

    while (true) {
        displayOperationList();
        var userInput = prompt("\nYour option number: ")
        if (!Object.keys(operationList).includes(userInput)) {
            console.log("Please enter the option display")
        }
        else {
            return userInput;
        }
    }
}

function runApp(transactionList, operationList, savingGoals) {
    let continueApp = true;

        var operationIndex = askOperation(operationList);
        const financeDB = {
            "url" : url,
            "dbName" : dbName,
        }

        handleOperation(savingGoals, transactionList, parseInt(operationIndex), financeDB);
}
const financialManager = new FinancialManager();
const financeDB = {
    "url" : url,
    "dbName" : dbName,
}

financialManager.findAllTransaction(financeDB).then(transactions => {
    console.log(transactions);
    financialManager.findAllSavingGoals(financeDB).then(savingGoals => {
        runApp(transactions, operationList, savingGoals);
    })


}).catch(err => console.error('Error in transactions: ', err));


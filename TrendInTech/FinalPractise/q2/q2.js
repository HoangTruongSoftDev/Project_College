let operationList = {
    1 : "Add Task",
    2 : "Delete Task",
    3 : "Update Task",
    4 : "View Task",
    5: "Exit"
}
// task [1,2,3]
let taskList = [
    ["Have Breakfast", "Completed"], // 1
    ["Go to school", "Not Completed"], //2
    ["Go Home", "Not Completed"], //3
]
const ps = require("prompt-sync");
const prompt = ps();
function handleOperation(taskList, operationIndex) {
    switch (operationIndex) {
        case 1:
                var addTask = prompt("Enter your task: ")
                taskList.push([addTask, "Not Completed"]);
                console.log("A new task " + addTask + " has been added");
            break;
        case 2:
            while (true) {
                displayTaskList(taskList);
                let removedIndex = parseInt(prompt("What task do you want to remove: ")) - 1;

                if (removedIndex > taskList.length) {
                    console.log("Please enter the available task number")
                }
                else {
                    let removedTask = taskList[removedIndex];
                    taskList.splice(removedIndex, 1);
                    console.log("The task " + removedTask[0] + " has been deleted");
                    break;
                }
            }
            break;
        case 3:
            while (true) {
                displayTaskList(taskList);
                let updatedIndex = parseInt(prompt("What task do you want to update: ")) - 1;
                if (updatedIndex > taskList.length) {
                    console.log("Please enter the available task number")
                }
                else {
                    var task = taskList[updatedIndex];
                    var taskStatus = prompt("Enter your task status: ");
                    taskList[updatedIndex] = [task[0], taskStatus];
                    console.log("The task has been updated.\n\t+ Your Task Description: " + task[0] + ".\n\t+ Your Task Status: " + taskStatus);
                    break;
                }
            }
            break;
        case 4:
            displayTaskList(taskList);
            break;
        case 5:
            console.log("Thank you for using our app");
            break;
    }
    return taskList;
}
function displayTaskList(taskList) {
    console.log("List of Task: ")
    taskList.forEach((element, index) => {
        console.log((index + 1) + ". " + element[0] + " - " + element[1])
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
function askContinue() {
    do {
        var userInput = prompt("\nDo you want to continue(y/n)?: ")
        if (userInput === "y" ) {
            return true;
        }
        else if (userInput === "n" ) {
            return false;
        }
        else {
            console.log("Please enter \"y\" or \"n\"");
        }
    } while (userInput !== "y" || userInput !== "n")
}
function runApp(taskList, operationList) {
    console.log("Welcome Task Manager App")
    let continueApp = true;
    do {
        var operationIndex = askOperation(operationList);

        handleOperation(taskList, parseInt(operationIndex));
        if (parseInt(operationIndex) === 5) {
            break;
        }
        continueApp = askContinue();
    } while (continueApp);
    displayTaskList(taskList);
}
runApp(taskList, operationList);
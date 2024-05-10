/*
    Here we will learn how to define an array in JavaScript
* */

let myArray = [12, 95, -33, 0, 17]
// for accessing each element
console.log(myArray[0])
myArray[2] = 45

// similar to stack we have push and pop, arrays in JavaScript can also have push and pop
myArray.push(9) //adding an element to the back (end) of the array
console.log(myArray) // printing the entire array

// removing elements from the end of the array is with pop
let popNumber= myArray.pop() // the return value is the removed element
console.log(popNumber)
console.log(myArray)
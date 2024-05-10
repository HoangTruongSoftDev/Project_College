/*
    In this example, we will learn more about arrays in JS since they have unlimited applications
    in modern back and front-end development

    It is impossible to define an array in JS with the same functionality as dictionary in Python.
    In other words, we can define an array consisting elements with different types. This property does not exist in Java, GoLang, C#, C/C++
* */

let myArray = [1, "two", true, {name:"Jose"}, ["Orange", "Apple"]];
console.log(myArray)

// We can modify any element of above array as below
myArray[0] = 100
// adding more elements to the array
myArray.push("Truong")
console.log(myArray)

// Remove or pop
let removedElement = myArray.pop()
console.log(myArray)
console.log(removedElement)

// for loop also exist if you want to print elements one by one
for (let i= 0; i < myArray.length; i++) {
    console.log(myArray[i])
}
console.log("========================================================")
// we also have foreach loop in JS
myArray.forEach((element) => {
    console.log(element);
})

/*
    Probably => symbol is new for you so here we explain it

    => : this is called arrow function, and it is a concise way to write function expression, especially for short anonymous function.
    Let's break it down and explain more.

    element in above code is a parameter list. In fact, the arrow function takes a single parameter and element. If there are no parameters, we can omit the ().
    If there are multiple parameters, we would use () like (para1, para2, para3)

    => is the operator for the arrow function, and it separates the parameter list from the function body

    The interpretation of above code is: for every item (element) inside of the myArray, print each element into console

    Overall, arrow function enable us to define a method without directly name a method. The alternative approach to arrow function is suing the old-school technique with defining a new methods and assign a name to it
* */
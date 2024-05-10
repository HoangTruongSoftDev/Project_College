/*
    A variable in JavaScript is a container for storing values similar to any other programming languages
    We can declare variables using the 'var', 'let', or const keyword. This there are 3 approaches for defining a variable
in JavaScript and there is no need to specify the type of the data. For example you do not need to mention a variable is string or int or double,...
See below examples:

* */

var age = 30
var age = 11 // can be redeclared,so it shows warnings not error
/*
    We use 'var' to define variables in JavaScript, however it is not recommended to use it
    Variable declared with 'var' are function-scoped or globally-scoped. SO they are available in the entire code similar to be as public. This violates the encapsulation rule.
    Variables defined by 'var' are not block-scoped meaning they do not respect block boundaries. for example if statements or loops.
* */

let GPA = 4.2
/*
    Variables declared with 'let' are block-scoped meaning that they are limited to the block statement or expression which they are declared in.
    Please note that unlike 'var', variables defined with 'let' can be reassigned (changing values) but they cannot redeclared (defining them more than one time is not allowed) within the same scope.
    And variables defined with 'let' can be reassigned (changing values), and also they can be redeclared.

    Overall, in modern JavaScript, it is highly recommended to use 'let' over 'var'
* */

const PI= 3.14
/*
    Variables declared with 'const' are block-scoped like 'let' but they are constant and their values do not change

    Note: scope is the area inside of {} such as a method which comes with {}, or class, ...
* */

console.log(age)
console.log(GPA)
console.log(PI)
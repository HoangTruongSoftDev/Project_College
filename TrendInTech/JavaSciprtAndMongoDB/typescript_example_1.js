/*
Today we are going to talk about a new technology called typescript which is an extension
for javascript. Chronologically, typescript was introduced after the huge success of javascript
among web developers. Technically, typescript is a statically typed superset of javascript
that compiles to plain javascript code. In other words, typescript is not executable on
its own and we should write our code in typescript first, then compile it with the associated compilers
and this will generate a code for us which we can run through javascript

Originally, typescript is developed and maintained by Microsoft and is widely used for
building large-scale applications. Like I said above, typescript extends javascript by adding static typing,
interfaces, classes, and other features to help developers write more maintainable codes

Here we review some key properties of typescript:
    1. Static typing: typescript introduces static typing allowing developers to specify the types of variable, function parameters,
    adn return types. This helps catch type-related errors during development and
* */
var message = "Hello TypeScript!";
console.log(message);
// how to run above code:
// Step 1: tsc <NAME OF THE TYPESCRIPT FILE>
// Step 2: node <NAME OF THE SAME FILE BUT WITH .js FORMAT>

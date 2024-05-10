/*
* Today, we are going to talk about a new technology called typescript which is an extension
* for javascript. Chronologically, typescript was introduced after the huge success of javascript
* among web developers. Technically, typescript is a statically typed superset of javascript
* that compiles to plain javascript code. In other words, typescript is not executable on its
* own and we should write our code in typescript first, then compile it with the associated
* compilers and this will generate a code for us which we can run through javascript.
*
* Originally, typescript is developed and maintained by Microsoft and is widely used for building
* large-scale applications. Like I said above, typescript extends javascript by adding static
* typing, interfaces, classes, and other features to help developers write more maintainable codes.
*
* Here we review some key properties of typescript:
*   1. Static typing: typescript introduces static typing allowing developers to specify the
*       types of variables, function parameters, and return types. This helps catch type-related
*       errors during development and provides better code documentation and editor support.
*   2. Interface: typescript supports interfaces which define the structure of objects. Interfaces
*       can be used to enforce contracts within our codebases and facilitate better communication
*       between different parts of our code.
*
*   3. classes and object-oriented programming: typescript adds support for classes, inheritance,
*       and other OOP features familiar to developers coming form languages like java or C#. This
*       makes it easier to organize and structure code especially for larger and super larger
*       projects.
*   4. Compatibility with javascript: typescript is a subset of javascript which means that any
*       valid js code is also a valid ts code. This allows developers to gradually adopt typescript
*       in existing projects and leverage typescript features while still using existing js
*       libraries and frameworks.
*
* We will write the first typescript code here and start our journey toward learning another
* interesting programming language which is very popular for the market.
*
* Here we want to develop our first typescript code. Please note that, typescript cannot be
* compiled independently. In fact, they have to be compiled with typescript compiler and
* then should be executed with javascript command.
*
* Let's install the typescript compiler first and then develop our code.
* type in terminal:
* npm install -g typescript
* */

const message = "Hello TypeScript!";
console.log(message);

// how to run above code:
// Step 1: tsc <NAME OF THE TYPESCRIPT FILE>
// Step 2: node <NAME OF THE SAME FILE BUT WITH .js FORMAT>

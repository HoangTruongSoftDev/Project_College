/*
    In this example, we want to figure out the systematic difference between 'var' amd 'let' in action

    'var': is a function-scoped, meaning it is only scoped to the function in which it is declared.
            If declared outside of any function, it becomes a global variable

    'let': is a block-scoped which means it is limited to the block, statement, or expression in which it
            is declared. This includes if statement, loops, and other block structures
* */

function example() {
    if (true) {
        var varVarable = "I am var";
        let letVariable = "I am let"
    }
    console.log(varVarable)
    varVarable = "I am still var"
    console.log(varVarable)
    console.log(letVariable) // This gives an error because letVariable cannot be accessed outside the if block
}
example()

/*
    There is a concept in programming known as Hoisting. See below
    Variables declared with 'var' are hoisted (keo') to the top of their scope during compilation phase.
    This means we can use them before it is declared in the code

    Variables declared with 'let' are also hoisted, but they are not initialized until the interpreter reaches the line where they are declared.
    Accessing the variable before the declaration result in an Error.
* */
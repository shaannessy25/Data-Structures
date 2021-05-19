/*
Factorial

Write a function factorial which accepts a number and returns the factorial of that number.
A factorial is the product of an integer and all the integers below

Example:
    4! = 24
    7! = 5040

*/


const factorial = (num) => {
    if(num <= 1){
        return 1
    }

    return num * factorial(num - 1)
}




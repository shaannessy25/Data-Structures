/* 
Write a function called recursiveRange which accepts a number and adds
up all the numbers from 0 to the number passed to the function


Example

recursiveRange(3) // 5


*/




const recursiveRange = (num) => {
    // Check to see if number is 0
    // return 1
    if(num <= 1) {
        return 1
    }

    //num + num -1
    return num + recursiveRange(num - 1)
}


console.log(recursiveRange(10))
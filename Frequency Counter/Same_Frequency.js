/* 
Same Frequency

1. Write a function called sameFrequency. Given two positive integers, find out
if the two numbers have the same frequency of digits.

2. Example:
    sameFrequency(182, 281) // true
    sameFrequency(34, 14) // false
    sameFrequency(123456, 654321) // true
    sameFrequency(22, 222) // false
 

*/


const sameFrequency = (num1, num2) => {
    //Convert numbers to string
    let strNum1 = num1.toString()
    let strNum2 = num2.toString()

    //Check to see if numbers have the same length
    if(strNum1.length !== strNum2.length){
        return false
    }

    let countNum1 = {}
    let countNum2 = {}
    

    for(let i = 0; i < strNum1.length; i++){
        firstNumber = strNum1[i]
        countNum1[firstNumber] ? countNum1[firstNumber] += 1: countNum1[firstNumber] = 1;
    }

    for(let j = 0; j < strNum1.length; j++){
        secondNumber = strNum2[j]
        countNum2[secondNumber] ? countNum2[secondNumber] += 1: countNum2[secondNumber] = 1;
    }
    

    for(let key in countNum1){
        if(countNum1[key] !== countNum2[key]){
            return false
        }
    }

    return true


}




console.log(sameFrequency(123456,654321))
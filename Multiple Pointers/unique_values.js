/* 
Count Unique Values

1. Implement a function called countUniqueValues which accepts
a sorted array, and counts the unique values in the array. There can be negative
numbers in the array, but it will always be sorted


2. Examples:
    countUniqueValues([1,1,1,1,1,2]) // 2
    countUniqueValues([1,2,3,4,5,6,6,6,7]) // 7
    countUniqueValues([]) // 0
*/


const countUniqueValues = (array) => {

    //Check to see if array is empty
    if(array.length === 0){
        return 0
    }


    //Set index and pointer and see if they are equal
    let i = 0;
    for(let j = 1; j < array.length; j++){
        //if not equal increment i and index to the list
        if(array[i] !== array[j]){
            i++;
            array[i] = array[j]
        }
    }
    //i gives us the index so add 1 to get the number of unique values
    return i + 1;
}


console.log(countUniqueValues([1,2,2,5,7,7,99]))
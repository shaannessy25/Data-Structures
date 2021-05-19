/* 
Linear Search

* This function accepts an array and a value
* Loop through the array and check if the current 
array element is equal to the value
* If it is, return the index at which the element is found
* If the value is never found return -1



*/




const lin_search = (arr, val) => {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === val){
            return i
        }
    }
    return false
}


console.log(lin_search([1,2,3], 2))
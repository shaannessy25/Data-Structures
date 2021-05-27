/* 
1. Write a recursive function called reverse which accepts a string
and returns a new string in reverse

2. Example: reverse("hello") // olleh

3. Assume all inputs are strings


4. "hello" --> "olleh"

*/


function reverse(str){
    //Check if str is undefined or null return false
    if(str === undefined || str === null || isNaN(str) === false) return false;
    //base case returns string when string length is less than or equal to 1
    if(str.length <= 1) return str;

    return reverse(str.slice(1)) + str[0];
}



console.log(reverse("ehllo"))



module.exports = reverse;
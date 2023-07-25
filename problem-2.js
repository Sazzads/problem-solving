/* Task 2 : Create a function that takes 
an array of numbers as input and returns 
the sum of all positive numbers in the array. 

Example Input: [2, -5, 10, -3, 7] 
Example Output: 19
 */


const sumPositiveArray = (array) => {
    let positiveArray = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] >= 0) {
            positiveArray = positiveArray + array[i];
        }
    }
    return positiveArray;
}
console.log(sumPositiveArray([2, -5, 10, -3, 7]));
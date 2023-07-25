/* Task 3: Write a JavaScript program to 
find the most frequent element in an array and return it. 

Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5]
 Example Output: 3
 */

const mostFrequentElement = (array) => {
    let mostFrequent = 1;
    let count = 0
    let item
    for (element1 of array) {
        for (element2 of array) {
            if (element1 == element2) {
                count++;
            }
        }
        if (mostFrequent < count) {
            mostFrequent = count;
            item = element1
        }
        count = 0

    }
    return item
}
console.log(mostFrequentElement([3, 5, 2, 5, 3, 3, 1, 4, 5]));


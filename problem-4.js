function findTwoNumbersWithTarget(array, target) {
    let left = 0;
    let right = array.length - 1;

    while (left < right) {
        const sum = array[left] + array[right];

        if (sum === target) {
            return [left, right];
        }
        else if (sum < target) {
            left++;
        }
        else {
            right--;
        }
    }

    return [];
}

const result = findTwoNumbersWithTarget([1, 3, 6, 8, 11, 15], 9);
console.log(result); 

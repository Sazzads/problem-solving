const sumPositiveArray = (array) => {
    let positiveArray = 0;
    for (let i = 0; i <= array.length - 1; i++) {
        if (array[i] >= 0) {
            positiveArray = positiveArray + array[i];
        }
    }
    return positiveArray;
}
console.log(sumPositiveArray([2, -5, 10, -3, 7]));
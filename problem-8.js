

function findSecondSmallest(arr) {
    if (arr.length < 2) {
      throw new Error("Array must contain at least two elements.");
    }
  
    let smallest = Infinity;
    let secondSmallest = Infinity;
  
    for (let num of arr) {
      if (num < smallest) {
        secondSmallest = smallest;
        smallest = num;
      } else if (num < secondSmallest && num !== smallest) {
        secondSmallest = num;
      }
    }
  
    if (secondSmallest === Infinity) {
      throw new Error("Second smallest element not found in the array.");
    }
  
    return secondSmallest;
  }
  
  // Example usage:
  const numbers = [7, 3, 9, 5, 1, 8, 2,-1,-2];
  console.log(findSecondSmallest(numbers)); // Output: 2
  
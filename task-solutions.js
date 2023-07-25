/*
Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

Example Input: "hello world" Example Output: "dlrow olleh"
*/

const string = "hello world";

const reverseString = (string) => {
  return string.split("").reduce((pre, current) => current + pre, "");
};

// console.log(reverseString(string));

/*
Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

Example Input: [2, -5, 10, -3, 7] Example Output: 19
*/

const arrayOfNumbers = [2, -5, 10, -3, 7];

const positiveSum = (array) => {
  return array.reduce((pre, current) => (current > 0 ? pre + current : pre), 0);
};

// console.log(positiveSum(arrayOfNumbers));

/*
Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3
*/
const givenArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];

const mostFrequentFinder = (array) => {
  let highestFrequency = 0;
  let mostFrequent = null;
  for (i = 0; i < array.length; i++) {
    let frequency = 0;
    for (j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        frequency++;
        if (frequency > highestFrequency) {
          highestFrequency = frequency;
          mostFrequent = array[i];
        }
      }
    }
  }

  return mostFrequent;
};

// console.log(mostFrequentFinder(givenArray));
/*
Task 4: Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

Example Input: ([1, 3, 6, 8, 11, 15], 9) Example Output: [1, 2] (numbers at indices 1 and 2: 3 + 6 = 9)
*/

const sortedArray = [1, 3, 6, 8, 11, 15];
const target = 9;

const twoNumbers = (array, target) => {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const sum = array[left] + array[right];
    if (sum === target) {
      return [left, right];
    } else if (sum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
};

console.log(twoNumbers(sortedArray, target));

/*
Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.
*/

/*
Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.
*/

/*
Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.
*/

/*
Task 8: Implement a JavaScript function to find the second smallest element in an array of numbers. The function should return the second smallest number.
*/

// 1.
// Without logging the values, list the value of `sports` and `total`
var sports = ['soccer', 'baseball'];
var total = sports.push('football', 'swimming');
// A:
// sports = ['soccer', 'baseball']
// total = ['soccer', 'baseball', 'football', 'swimming']


// 2.
// Using the `strings` array, wrte a function `longestString()`
// that accepts an array argument and returns the longest string in the array
var strings = ['this','is','a','collection','of','words'];
// A:
function longestString(str) {
 let longString = "";
 let longest = 0;
  for (i = 0; i < str.length; i++) {
    if (str[i].length > longest) {
      longest = str[i].length;
      longString = str[i];
    }
  }
  return longString;
}

longestString(strings);

console.assert(longestString(strings) === 'collection', {"message": "longestString should return 'collection'"});


// Use the `numbers` array for questions 3 - 8.
var numbers = [1,12,4,18,9,7,11,3,101,5,6];


// 3.
// Write a function `smallestNumber()` that accepts an array
// and returns the smallest number in the array.
// A:

// FIRST attempt, really long:

function smallestNumber(num){
  let firstNumber = num[0];
  for (i = 0; i < num.length-1; i++) {
    let nextNumber = num[i+1];
    if (nextNumber < firstNumber){
      firstNumber = nextNumber;
    }
  }
  return firstNumber;
}
smallestNumber(numbers);

// SECOND attempt after I learned about Math.min and this "..." spread operator. Yes to simple code!

function smallestNumber2(num){
  return Math.min(...num);
}

smallestNumber2(numbers);


console.assert(smallestNumber(numbers) === 1, {"message": "smallestNumber should return 1"});


// 4.
// Write a function `getEvens()` that accepts an array
// and returns only the even numbers in the array.
// A:

function getEvens(num){
  let evens = [];
  for (i = 0; i < num.length; i++){
    if (num[i] % 2 === 0) {
      evens.push(num[i]);
    }
  }
  return evens;
}

getEvens(numbers);

console.assert(getEvens(numbers).toString() === '12,4,18,6', {'message': 'getEvens should return "12,4,18,6"'});


// 5.
// Write a function that accepts an array argument
// and returns the array reversed
// Hint: When looping over the array, start at the last index
// and decrement the iterator to zero
// A:

function arrayReverser(num){
  let reverse = [];
  for (i = (num.length-1); i > -1; i--) {
    reverse.push(num[i]);
  }
  return reverse;
}

arrayReverser(numbers);

console.assert(arrayReverser(numbers).toString() === '6,5,101,3,11,7,9,18,4,12,1', {'message': 'arrayReverser should return "6,5,101,3,11,7,9,18,4,12,1"'});


// 6.
// Write a function that accepts an array argument
// and returns the sum of all of the numbers in the array
// A:

// Long way
function sumArrayOfNumbers(num){
  let sum = 0;
  for (i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}

sumArrayOfNumbers(numbers);

// Short way

function sumArrayOfNumbers2(num){
  return num.reduce((a, b) => a + b, 0);
}

sumArrayOfNumbers2(numbers);

console.assert(sumArrayOfNumbers(numbers) === 177, {'message': 'sumArrayOfNumbers should return 177'});


// 7.
// Write a function that accepts an array argument
// and returns an array of only the numbers greater than 10
// A:

function numbersOver10(num){
  let over10 = [];
  for (var i = 0; i < num.length; i++) {
    if (num[i] > 10) {
      over10.push(num[i]);
    }
  }
  return over10;
}

numbersOver10(numbers);

console.assert(numbersOver10(numbers).toString() === "12,18,11,101", {'message': 'numbersOver10 should return "12,18,11,101"'});


// 8.
// Write a function that accepts both an array and number argument
// and returns an array of only the numbers greater than the number passed to the function
// A:

function numbersOverX(myNumber){
  let greaterArray = [];
  for (var i = 0; i < numbers.length; i++) {
    if (numbers[i] > myNumber){
    greaterArray.push(numbers[i]);
    }
  }
  return greaterArray;
}

numbersOverX(15);

console.assert(numbersOverX(numbers, 15).toString() === "18,101", {'message': 'numbersOverX should return "18,101"'});

// 9.
// Write a function `joinArrays()` that takes an array of arrays,
// and returns a single array with the contents of the second array
// listed after the contents of the first array
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var numbersTwo = [33,56,72,2,5,66,90,21,42];
// A:

// LONG version

function joinArrays(){
  let numbersThree = [];
  for (var i = 0; i < numbers.length; i++) {
    numbersThree.push(numbers[i]);
  }
  for (var i = 0; i < numbersTwo.length; i++) {
    numbersThree.push(numbersTwo[i]);
  }
  return numbersThree;
}

joinArrays();

// SHORT version

function joinArrays2(){
    let numbersThree = numbers.concat(numbersTwo);
  return numbersThree;
}

joinArrays2();


console.assert(joinArrays([numbers, numbersTwo]).toString() === '1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42', {'message': 'joinArrays should return "1,12,4,18,9,7,11,3,101,5,6,33,56,72,2,5,66,90,21,42"'});


// 10.
// Using the `instructors` array, comment the value of each variable below
var instructors = [
    ['JD','JavaScript'],
    ['Tim','JavaScript'],
    ['Brit','Ruby'],
    ['Joe','iOS'],
    ['Dan','JavaScript'],
    ['Will','JavaScript'],
    ['Calvin','JavaScript'],
    ['James','Ruby']
];

var instructorNameDiscipline = instructors[5];
// greenvIlleInstructor = ['Will','JavaScript']

var instructorOne = instructors[4][0];
// instructorOne = 'Dan'

var instructorTwo = instructors[0][1];
// instructorTwo = 'JavaScript'

var instructorThree = instructors[2][0];
// instructorThree = 'Brit'

console.log(instructorNameDiscipline, instructorOne, instructorTwo, instructorThree);

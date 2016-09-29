//ARRAY CHALLENGES


//Highest number

//Purpose: Iterate through the array, return the element with the highest value.
//Signature: [int, int, int, int, int] -> int
//Example Arr.highestNumber(4, 4.5, 8, 2, 0) -> 8

  var numbers = [9, 8, 23, 467, 46];

function highestNumber(numbers) {
  var max = 0;

  numbers.forEach (function(element) {
    if (element > max) {
      max = element;
    };
  });
  console.log(max);
};
//End of Highest Number Challenge


//Lowest number

//Purpose: Iterate through the array, return the element with the lowest value.
//Signature: [int, int, int, int, int] -> int
//Example Arr.lowestNumber(4, 4.5, 8, 2, 0) -> 0

var numbers = [9, 8, 1.02, 7.5, 467, 1.2];

function lowestNumber(numbers) {
  var min = 500;

  numbers.forEach (function(element) {
    if (element < min) {
      min = element;
    };
  });
  console.log(min);
};
//End of Lowest Number Challenge

//Closest to Zero challenge

//Purpose: Iterrate throught array and return element closest to zero.
//Signature: [int, int, int, int, int] -> int
//Example Arr.lowestNumber(4, 4.5, 8, 2, 0) -> 0

var numbers = [-9, -8, 7.5, 467, 1.2, -1.02];
var iAmClosestToZero = 99999

function closeToZero(numbers) {
  numbers.forEach(function(element) {
    if (Math.abs(element) < Math.abs(iAmClosestToZero)) {// Math. abs = distance of element from zero. Initally we had just iAmClosestToZero variable and it was comparing the distance from zero of the inital element (which is always positive) to the value of iAmClosestToZero, which could be negative or positive. So when iAmClosestToZero was changed to -9 it was never going to change because -9 will always be less than any of our other absolute(math.abs(element) elements.
      iAmClosestToZero = element;
    };
  });
  console.log(min);
};
//End of Closest to Zero challenge


//Sum challenge

//Purpose: Iterrate throught array and return the sum of all elements.
//Signature: [int, int, int, int, int] -> sum of all int
//Example Arr.sum(4, 4.5, 8, 2, 0) -> sum = 17.5

var numbers = [1,2,3,4,5];

var sum = 0;

function total(numbers) {
  numbers.forEach(function(element) {
    sum = sum + element;
  });
  console.log("Your answer is " + sum)
};

// end of Sum challenge

// Mean challenge

//Purpose: Iterrate throught array and return the mean of all elements (sum of elements / by # of elements).
//Signature: [int, int, int] -> int
//Example Arr.mean(4, 4.5, 8.5, 2, 0) -> sum = 18/5 = 3.6

var numbers = [1,2,3,4,5];
var sum = 0;

function mean(numbers) {
  numbers.forEach(function(element) {
    sum = sum + element;
  });
  console.log(sum / numbers.length) //you can add math, strings, and perhaps arrays/functions/loops, etc. to the console.log.
};
//End of  Mean challenge


//Highest Number Index challenge

//Purpose: To find the index of the element with the highest value in an array
//Signature: [int, int, int, int] -> int
//Example: arr.highestIndex([4, 6, 1, 0, 2]) -> 1
//Example: arr.highestIndex([14, 6, 91, 100, 32]) -> 3

var numbers = [250, 65, 8, 23, 143, 2,];

function highestIndex(numbers) {
  var highestNum = -Infinity;
  numbers.forEach(function(element) {
    if (element > highestNum) {
      highestNum = element;
    };
  });
  console.log(numbers.indexOf(highestNum));
};


//End of Hishest Number Index challenge

// Arrays Strings challenges
  //Purpose: To organize strings in array in alphabetical order.
  //Signature: [string, string, string] -> string
  //Example: arr.siblings("Lucy", "Julyanna") -> "Julyanna, Lucy"
  //Example: arr.parents("Angelica", "Rogelio" -> "Angelica, Rogelio")

  //names in alphabetical order
var siblings = ["Lucy", "Julyanna", "Ivan", "Jonathan"];
    siblings.sort();


    //names in reverse alphabetical order
var parents = ["Angelica", "Rogelio", "Zapata", "Manuela"];
 parents.sort().reverse();

 //combine and sort in alphabetical order
var parents = ["Angelica", "Rogelio", "Zapata", "Manuela"];
var siblings = ["Lucy", "Julyanna", "Ivan", "Jonathan"];

var family = parents.concat(siblings);
  family.sort();
  family.sort().reverse();

  //function to check if a name is an element of the array.
  var parents = ["Angelica", "Rogelio", "Zapata", "Manuela"];
  var siblings = ["Lucy", "Julyanna", "Ivan", "Jonathan"];

  var family = parents.concat(siblings);

function nameExists(string) {
    var entry = family.indexOf(string);

    if (entry === -1) {
    return "This name does not exist in the array";
  } else {
    return "This name exists in the array at the index " + family.indexOf(string);
  };
};

// end of array strings

//Advanced functions CHALLENGES

// funciton returns even numbers
var numbers = [1, 4, 6, 9, 13, 27, 88, 65, 42];

function evenElements(n) {
 var evenNumbers = [];
  n.forEach(function(element) {
    if (element % 2 === 0) {
     evenNumbers.push(element);
    };
  });
  return evenNumbers;
};

// function returns odd numbers

var numbers = [1, 4, 6, 9, 13, 27, 88, 65, 42];

function oddElements(n) {
 var oddNumbers = [];
  n.forEach(function(element) {
    if (element % 2 != 0) {
     oddNumbers.push(element);
    };
  });
  return oddNumbers;
};

//Advanced challenge
//Purpose: Create a function that takes an array and a function and creates a new array with the result.
//Signature (funciton, array) -> array
//Example function Advanced(funciton(x), mapArray[5,6]) -> newArray [10, 13]

// function mapArray(array, fun) {
//   var returnArray = [];
//   array.forEach(function(element) {
//     fun(element);
//     returnArray.push(element);
//   });
//   return returnArray;
// };

//! Given the array below, write a function add2 that will receive the array as an argument and will return a new array with all items of the original array added by 2.
const arrEx6 = [2, 4, 6, 7, 9, 12];

const add2 = arrEx6.map(num => num + 2);
console.log(add2);

// ######################################### //

//! Given an array of numbers, write a function checkSum that returns the string 'even' if the sum of all values are even, otherwise return 'odd';
const arrEx7 = [1, 2, 3];

const checkSum = arrEx7.reduce((sum, num) => sum + num);
if (checkSum % 2 === 0) {
  console.log(`${checkSum} is even`);
} else {
  console.log(`${checkSum} is odd`);
}

// ######################################### //

//! Given an array of numbers, write a function evenNumbers that returns a new array only with the even numbers of the original array.
const arrEx8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evenNumbers = arrEx8.filter(num => num % 2 === 0);
console.log(evenNumbers);

// ######################################### //

//! Given an array of letters, write a function sortLetters that returns a new array of letters in alphabetical order.
const arrEx9 = ["a", "c", "g", "r", "w", "e", "s", "l", "z", "q", "b", "d"];

const sortLetters = arrEx9.sort();
console.log(sortLetters);
// ######################################### //

//! Make a function that takes a number and returns that number multiplied by 2.
const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const multBy2 = arrNum.map(num => num * 2);
console.log(multBy2);

// ######################################### //

//! Using any array method and the function built in the previous question, make a loop that print the elements of an array multiplied by 2.
const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

arrNum.forEach(num => console.log(num * 2));

// ######################################### //

//! Create a function that takes a number and returns true if the number is odd and false if the number is even
const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //COMO FAÇO SE EU QUISER QUE APAREÇA O NÚMERO E DPS A RESPOSTA? ex: "2 is odd"

const oddOrEven = arrNum.map(num => num % 2 === 0);
console.log(oddOrEven);

// ######################################### //

//! Using any array method and the function built in the previous question, make a loop that return only the odd numbers.
const arrNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const oddNumbers = arrNum.filter(num => num % 2 === 1);
console.log(oddNumbers);

// ######################################### //
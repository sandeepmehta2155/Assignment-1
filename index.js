const l = console.log;

// 1. Write a program to find whether a given year is a leap year or not.
// Answer :
// =>

/**
 *
 * @param {*} year
 * @returns flag that determines it is a leap year or not
 */
const isLeapYear = (year) => year % 4 === 0;

// Output :
l(isLeapYear(2004), "answer 1");

// -------------------------------------------------------------------------------------------------

// 2. Write a JavaScript program to convert temperatures to and from Celsius,
// Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius and f = temperature in
// Fahrenheit ]
// Expected Output :
// 60°C is 140 °F
// 45°F is 7.222222222222222°C
// 3. Write a program to find the factorial of a number.

// Answer :
// =>
/**
 * 
 * @param {*} c 
 * @returns degree of Celsius
 */
const f = (c) => ((c - 32) * 5) / 9;
/**
 * 
 * @param {*} f 
 * @returns degree of Fahrenheit
 */
const c = (f) => (f * 9) / 5 + 32;

// Output :
l(f(140), c(60), "answer 2 ");

// -------------------------------------------------------------------------------------------------
// 3. Write a program to find the factorial of a number.
/**
 * 
 * @param {*} num 
 * @returns factorial of num
 */
const factorialOfNum = (num) => (num !== 0 ? num * factorialOfNum(num - 1) : 1);

l(factorialOfNum(5),"answer 3");

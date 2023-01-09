/*'use strict';

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log('I can drive :D');

// Strict mode throws errors for certain words that could be used in the future
// const interface = 'Audio';
// const private = 534;
// const if = 23;

function logger() {
  console.log('My name is Jonas');
}

// calling / running / invoking function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number('23');

// Function declaration (can be called before or after function)
const age1 = calcAge1(1993);


function calcAge1(birthYear) {
    return 2023 - birthYear;
}

// Function expression (can NOT be called before function)
const calcAge2 = function (birthYear) {
    return 2023 - birthYear;
}

const age2 = calcAge2(1992);

console.log(age1, age2);
*/

// Arrow function
const calcAge3 = birthYear => 2023 - birthYear;
const age3 = calcAge3(2000);
console.log(age3);

const yearsUntilRetirement = (birthYear, firstName) => {
    const age = 2023 - birthYear;
    const retirement = 50 - age;
    // return retirement;
    return  `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1993, 'Erin'));
console.log(yearsUntilRetirement(1992, 'Jared'));

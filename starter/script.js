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

function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutFruitPieces(apples);
    const orangePieces = cutFruitPieces(oranges);

    const juice =  `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`;
    return juice;
}
console.log(fruitProcessor(2, 3));

const calcAge = function (birthYear) {
    return 2023 - birthYear;
}

const yearsUntilRetirement = function (birthYear,
    firstName) {
    const age = calcAge(birthYear);
    const retirement = 50 - age;

    if(retirement > 0) {
        console.log(`${firstName} retires in ${retirement} years`);
        return retirement;
    } else {
        return -1;
        console.log(`${firstName} has already retired!!`);
    }
}

console.log(yearsUntilRetirement(1993, 'Erin'));
console.log(yearsUntilRetirement(1992, 'Jared'));

Coding Challenge #1
Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
gymnastics discipline, which works differently.
Each team competes 3 times, and then the average of the 3 scores is calculated (so
one average score per team).
A team only wins if it has at least double the average score of the other team.
Otherwise, no team wins!
Your tasks:
1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
2. Use the function to calculate the average for both teams
3. Create a function 'checkWinner' that takes the average score of each team
as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
to the console, together with the victory points, according to the rule above.
Example: "Koalas win (30 vs. 13)"
4. Use the 'checkWinner' function to determine the winner for both Data 1 and
Data 2
5. Ignore draws this time
Test data:
?? Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
?? Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
Hints:
?? To calculate average of 3 values, add them all together and divide by 3
?? To check if number A is at least double number B, check for A >= 2 * B.
Apply this to the team's average scores ???

const calcAverage = (a, b, c) => (a + b + c) /3;
console.log(calcAverage(3,4,5));


// Test 1
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);

const checkWinner = function(avgDolhins, avgKoalas) {
    if (avgDolhins >= 2 * avgKoalas) {
        console.log(`Dolphins win!! (${avgDolhins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolhins) {
        console.log(`Dolphins win!! (${avgKoalas} vs. ${avgDolhins})`);
    } else {
        console.log('No winner....');
    }
}
checkWinner(scoreDolphins, scoreKoalas);

// Test 2
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);

const friend1 = 'Jordan';
const friend2 = 'Dakota';
const friend3 = 'Birdy';

const friends = ['Jordan', 'Dakota', 'Birdy'];
console.log(friends); 

const y = new Array(1992, 1993, 2018, 2019);

console.log(friends[0]);
console.log(friends[2]);

console.log(friends.length);
console.log(friends[friends.length - 1]);

friends[2] = 'Jenny';
console.log(friends);

const firstName = 'Jordan';
const jordan = [firstName, 'Balcourt', 2023 - 1995, 'Trader', friends];
console.log(jordan);
console.log(jordan,length);

// Exercise
const calcAge = function (birthYear) {
    return 2023 - birthYear;
}
const years = [1992, 1993, 1995, 2018, 2019];

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3);

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages);

const friends = ['Jordan', 'Dakota', 'Birdy'];

// Add Elements to Array
const newLength = friends.push('Rob');
console.log(friends);
console.log(newLength);

// Add Element to Beginning of Array
friends.unshift('Sarah');
console.log(friends);

// Remove Elements from Array
friends.pop(); // Last
console.log(friends);

// Remove 1st Element from Array
friends.shift(); // First
console.log(friends);

console.log(friends.indexOf('Jordan'));
console.log(friends.indexOf('David'));

friends.push(23);
console.log(friends.includes('Jordan'));
console.log(friends.includes('David'));
console.log(friends.includes(23));

if (friends.includes('Jordan')) {
    console.log('You have a friend named Jordan');
}

Coding Challenge #2
Steven is still building his tip calculator, using the same rules as before: Tip 15% of
the bill if the bill value is between 50 and 300, and if the value is different, the tip is
20%.
Your tasks:
1. Write a function 'calcTip' that takes any bill value as an input and returns
the corresponding tip, calculated based on the rules above (you can check out
the code from first tip calculator challenge if you need to). Use the function
type you like the most. Test the function using a bill value of 100
2. And now let's use arrays! So create an array 'bills' containing the test data
below
3. Create an array 'tips' containing the tip value for each bill, calculated from
the function you created before
4. Bonus: Create an array 'total' containing the total values, so the bill + tip
Test data: 125, 555 and 44
Hint: Remember that an array needs a value in each position, and that value can
actually be the returned value of a function! So you can just call a function as array
values (so don't store the tip values in separate variables first, but right in the new
array) ???

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}

const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

console.log(bills, tips, totals);

const jaredArray = [
    'Jared', 
    'Young', 
    2023 - 1992, 
    'developer', 
    ['Jordan', 'Dakota', 'Birdy']
];

const jared = {
    firstName: 'Jared', 
    lastName: 'Young',
    age: 2023 - 1992, 
    job: 'developer', 
    friends: ['Jordan', 'Dakota', 'Birdy']
};

const jared = {
    firstName: 'Jared', 
    lastName: 'Young',
    age: 2023 - 1992, 
    job: 'developer', 
    friends: ['Jordan', 'Dakota', 'Birdy']
};
console.log(jared);

console.log(jared.lastName);
console.log(jared['lastName']);

const nameKey = 'Name';
console.log(jared['first' + nameKey]); 
console.log(jared['last' + nameKey]); 

// console.log(jared.'last' + namekey) (Uncaught SyntaxError: Unexpected string)

const interestedIn = prompt('What do you want to know about Jared? Choose between firstName, lastName, age, job, and friends');

if(jared[interestedIn]) {
    console.log(jared[interestedIn]);
} else {
    console.log('Wrong request!Choose between firstName, lastName, age, job, and friends');
}

jared.location = 'United States';
jared['twitter'] = '@Xanohm710';
console.log(jared);

// Challenge
// "Jared has 3 friends, and his best friend is called Balcourt"

console.log(`${jared.firstName} has ${jared.friends.length} friends, and his best friend is ${jared.friends[0]}`);

// Objects Method

const jared = {
    firstName: 'Jared', 
    lastName: 'Young',
    birthYear: 1992, 
    job: 'developer', 
    friends: ['Jordan', 'Dakota', 'Birdy'],
    hasDriversLicense: true, 

   // calcAge: function(birthYear) {
   // return 2023 - birthYear;
   // }

   //calcAge: function () {
   //console.log(this);
   // return 2023 - this.birthYear;
   //}

   calcAge: function () {
    this.age = 2023 - this.birthYear;
    return this.age;
   },
   
   getSummary: function() {
    return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license.`
   }
};

console.log(jared.calcAge());  // 31 (Dot Method)

console.log(jared.age); 
console.log(jared.age);  
console.log(jared.age);  

// console.log(jared['calcAge'](1992));  //31 (Bracket Method)

// Challenge
// "Jared is a 46-year old teacher, and has a driver's license"

console.log(jared.getSummary());

//Coding Challenge #3

Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
implement the calculations! Remember: BMI = mass / height ** 2 = mass
/ (height * height) (mass in kg and height in meter)
Your tasks:
1. For each of them, create an object with properties for their full name, mass, and
height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the
respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
tall.

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
   }
};

const john = {
    fullName: 'John Smith',
    mass: 92, 
    height: 1.95,
    calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
   }, 
};

mark.calcBMI();
john.calcBMI();

console.log(mark.bmi, john.bmi);

if(mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI ${mark.bmi} is higher than ${john.fullName}'s BMI ${john.bmi}!`)
} else if(john.bmi > mark.bmi) {
    console.log(`${john.fullName}'s BMI ${john.bmi} is higher than ${mark.fullName}'s BMI ${mark.bmi}!`)
}

// Iteration: The for Loop

// console.log('Lifting weights repetition 1');
// console.log('Lifting weights repetition 2');
// console.log('Lifting weights repetition 3');
// console.log('Lifting weights repetition 4');
// console.log('Lifting weights repetition 5');
// console.log('Lifting weights repetition 6');
// console.log('Lifting weights repetition 7');
// console.log('Lifting weights repetition 8');
// console.log('Lifting weights repetition 9');
// console.log('Lifting weights repetition 10');

// for loop keeps running while condition is TRUE
// rep = rep + 1 is the same as rep++
for(let rep = 1; rep <= 10; rep++) {
    console.log(`Lifting weights repetition ${rep}`);
}

//Looping Arrays, Breaking and continuing

const jared = [
    'Jared', 
    'Young', 
    2023 - 1992, 
    'developer', 
    ['Jordan', 'Dakota', 'Birdy'],
    true
];
const types = [];

// console.log(jared[0])
// console.log(jared[1])
// ...
// console.log(jared[4])
// jonas[5] does NOT exist


for(let i = 0; i < jared.length; i++) {
    // Reading from jonas array
    console.log(jared[i], typeof jared[i]);

    // Filling types array
    // types[i] = typeof jared[i];
    types.push(typeof jared[i]);
}

console.log(types);

const years = [1992, 1993, 2018, 2019];
const ages = [];

for (let i = 0; i < years.length; i++) {
    ages.push(2023 - years[i]);
}
console.log(ages);

// continue and break

// Ex: continue
console.log('--- ONLY STRINGS ---')
for(let i = 0; i < jared.length; i++) {
    if(typeof jared[i] !== 'string') continue;

    console.log(jared[i], typeof jared[i]);
}

// Ex: break
console.log('--- BREAK WITH NUMBER ---')
for(let i = 0; i < jared.length; i++) {
    if(typeof jared[i] === 'number') break;

    console.log(jared[i], typeof jared[i]);
}

// Looping Backwards and Loops in Loops

const jared = [
    'Jared', 
    'Young', 
    2023 - 1992, 
    'developer', 
    ['Jordan', 'Dakota', 'Birdy'],
];

// 0, 1, ..., 4
// 4, 3, ..., 0

for(let i = jared.length - 1; i >= 0; i-- ) {
    console.log(i, jared[i]);
}

for (let exercise = 1; exercise < 4; exercise++) {
    console.log(`-------- Starting exercise ${exercise}`);

    for (let rep = 1; rep < 6; rep++) {
        console.log(`Exercise ${exercise}: Lifting weight repetition ${rep}`);
    }
}

// The while Loop

// for(let rep = 1; rep <= 10; rep++) {
//     console.log(`Lifting weights repetition ${rep}`);
// }

let rep = 1;
while (rep <= 10) {
    //console.log(`WHILE: Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) + 1;
console.log(dice);

while (dice !== 6) {
    console.log(`You rolled a ${dice}`);
    dice = Math.trunc(Math.random() * 6) + 1;
    if (dice === 6) console.log('Loop is ending...');
}

Coding Challenge #4
Let's improve Steven's tip calculator even more, this time using loops!
Your tasks:
1. Create an array 'bills' containing all 10 test bill values
2. Create empty arrays for the tips and the totals ('tips' and 'totals')
3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
tips and total values (bill + tip) for every bill value in the bills array. Use a for
loop to perform the 10 calculations!
Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
Hints: Call ???calcTip ???in the loop and use the push method to add values to the
tips and totals arrays ???
Bonus:
4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
an argument. This function calculates the average of all numbers in the given
array. This is a difficult challenge (we haven't done this before)! Here is how to
solve it:
4.1. First, you will need to add up all values in the array. To do the addition,
start by creating a variable 'sum' that starts at 0. Then loop over the
array using a for loop. In each iteration, add the current value to the
'sum' variable. This way, by the end of the loop, you have all values
added together
4.2. To calculate the average, divide the sum you calculated before by the
length of the array (because that's the number of elements)
4.3. Call the function with the 'totals' array
*/

const calcTip = function(bill) {
    return bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;
}
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}
console.log(bills, tips, totals);

const calcAverage = function(arr) {
    let sum = 0;
    for(let i = 0; i< arr.length; i++) {
        // sum = sum + arr[i];
        sum += arr[i];
    }
    return sum / arr.length;
}
console.log(calcAverage([2,3,7]));
console.log(calcAverage(totals));
console.log(calcAverage(tips));
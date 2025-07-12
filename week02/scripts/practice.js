// Exercise
// Given the following variable declarations:
// const DAYS = 6;
// const LIMIT = 30;
// let studentReport = [11, 42, 33, 64, 29, 37, 44];
// 1) Write a for loop that will iterate through the studentReport array and print to the console the current array value if it is below 30.
// 2) Repeat the previous programming snippet by using a while loop.
// 3) Repeat the previous programming snippet by using a forEach loop.
// 4) Repeat the previous programming snippet by using a for...in loop.
// 5) Use any type of repetition (looping) statement to dynamically produce the day names (Monday, Tuesday, Wednesday, etc.) of the next number of DAYS from today's date.


// 6) Write a for loop that will iterate through the studentReport array and print to the console the current array value if it is below 30.

// Definition of loop structure
for (initialization; condition; afterthought)
    statement
// initizlization: ex: let i = 1; initializes one or more loop counters
// condition: ex: i <= 5; evaluated before each iteration, if true, the loop continues; if none, defaults to "true"
// statement: ex: console.log(i); executed if the condition is true
// *afterthought: ex: i++; executed *after* each iteration, used to update the loop counter
// EXAMPLE
// for (let i = 1; i <= 5; i++) 
// console.log(i);

// Another For Loop example,
for (let i = 0; i < 19; i++) {
    // statement
}

// Activity 1) for loop
const DAYS = 6;
const LIMIT = 30;
let i = 0;
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let i = 0; i < DAYS; i++) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
} //I think this is wrong, I think this will print days, not score at the index point.


// Definition of while loop structure
// a while loop doesn’t have initialization or afterthought built into its parentheses.
initialization // done outside the loop
while (condition) {
    statement
    afterthought // done manually inside the loop
}

// Example of while loop structure for a countdown
let count = 5;
while (count > 0) {
    console.log("Countdown:", count);
    count--; // decrement
}

// Activity 2) while Loop
let DAYS = 6;
let LIMIT = 30;
let i = 0;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
while (DAYS > 0) {
    if (studentReport[i] < LIMIT) {
        console.log(studentReport[i]);
    }
    DAYS--;
    i++; // best practice: each line does one thing
}


// ForEach Loop
let listVariable = [array, elements];
listVariable.forEach(function (element) { // element here is the index item in the list
});

// Definition of forEach loop structure
initialization // automatically starts at index 0
condition // automatically runs once for each element of the array
afterthought // automatically moves to the next array element
    * statement // executed for each element of the array

// Example of forEach loop
let names = ["Alice", "Bob", "Charlie", "Dana"];
names.forEach(function (first) {
    console.log("Hello, " + first + "!"); // this is the statement
});

// Activity 3) forEach Loop
const LIMIT = 30;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
studentReport.forEach(function (score) {
    if (score < LIMIT) {
        console.log(score);
    }
})

// For...in Loop
// Structure
let detailedArrayList = {
    name: "Sophia",
    age: 28,
    city: "New York"
};
for (let element in detailed.array.list) {
    console.log(element + ": " + detailedArrayList[key]);
}

// Definition of For...in loop structure
initialization // declares a variable that will hold each property name
condition // Continue while there are more keys(details) for the element in the list
// for...in loops over the indexes (keys) of the array, not the values.
afterthought // automatically moves to the key in the array
statement // executed for each element of the list
// For..in is not recommended for array lists, it is better for lists with index keys 
// (Or details (keys) of an element stored at the same index point)

// Example of a for/in loop
let person = {
    name: "Sophia",
    age: 28,
    city: "New York"
};

for (let info in person) {
    console.log(info + ": " + person[key]);
}

// Activity 4) For...in Loop
let studentReport = [11, 42, 33, 64, 29, 37, 44];

for (let score in studentReport) {
    if (studentReport[score] < 30) {
        console.log(studentReport[score]);
    }
}

// Activity #5) Choose your own loop 
// CYO options: (Where is forEach?)
// do...while statement:
let i = 0;
do {
    i += 1;
    console.log(i);
} while (i < 5);

// labeled statement (used with break and continue):
label:
statement

// break statement
break;
break label;

// detailed example: 
let x = 0;
let z = 0;
labelCancelLoops: while (true) {
    console.log("Outer loops:", x);
    x += 1;
    z = 1;
    while (true) {
        console.log("Inner loops:", z);
        z += 1;
        if (z === 10 && x === 10) {
            break labelCancelLoops;
        } else if (z === 10) {
            break;
        }
    }
}
// Prints 99 times; 9 inner loops (1-9) per 1 outer loop,
// 10 outer loops 0-9.

// continue statement
//  restart a while, do-while, for, or label statement
continue;
continue label;

// Example of continue statement:
let i = 0;
let j = 10;
checkIandJ: while (i < 4) {
    console.log(i);
    i += 1;
    checkJ: while (j > 4) {
        console.log(j);
        j -= 1;
        if (j % 2 === 0) {
            continue;
        }
        console.log(j, "is odd.");
    }
    console.log("i =", i);
    console.log("j =", j);
}

// Once J hits 4 it stops printing odd #s.
// 7
// 7 is odd.
// 6
// 5
// 5 is odd.
// i = 1
// j = 4

// for...of statement
// creates a loop Iterating over iterable objects
// (including Array, Map, Set, arguments)

// Structure of for...of loop
for (variable of iterable)
    statement

// Activity #5) Choose your own loop     *****RESTART HERE*****
// CYO options:
// do...while statement:

// Definition:
initialization // (before do) set up variables like counter (doesn't loop automatically)
condition // (comes after while) checks if loop should repeat
afterthought // (inside curly brackets{}) updates counter
statement // (inside curly brackets{} [before afterthought?]) Code that runs (action like console.log) inside the loop

//structure of a do...while loop
initialization;
do {
    statement;
    afterthought; // updates the counter
} while (condition);

let i = 0;
do {
    i += 1;
    console.log(i);
} while (i < 5);


// Activity #6) Choose your own loop
// because the counter belongs in the statement, but after the main condition
// the do...while loop requires double curly braces
let i = 0;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
do {
    let score = studentReport[i];
    if (score < 30) {
        console.log(score);
    }
    i += 1;
} while (i < studentReport.length);

// Also could be:
// If there’s only one statement after a control structure
// if, do, while, etc.), curly braces are optional.
let i = 0;
let studentReport = [11, 42, 33, 64, 29, 37, 44];
do {
    let score = studentReport[i];
    if (score < 30) console.log(score);
    i += 1;
} while (i < studentReport.length);

// 5) Use any type of repetition (looping) statement to
// dynamically produce the day names (Monday, Tuesday, Wednesday, etc.) of the next number of DAYS from today's date.
//MISS: make it simple

// Example of forEach loop
let names = ["Alice", "Bob", "Charlie", "Dana"];
names.forEach(function (first) {
    console.log("Hello, " + first + "!"); // this is the statement
});

let daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
daysOfWeek.forEach(function (day) {
    console.log("Is today " + day + "?");
});
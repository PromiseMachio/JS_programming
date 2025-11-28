// Review of all practical questions on operators

/*Create a variable for your name, another one for your age, and another one
  for whether you can code JavaScript or not.*/

// code

let name = "Machio "
let age = 20
let canCode = true

const aboutMe= "Hello there I am "+ name + ", I am " + age + " I can code," + canCode + ".";
console.log(aboutMe)




// Decrement and increment operators
// NOTE: x++ = x + 1 same to x-- = x-1

//CODE

let x=1
let y=1
// Redeclare the values with increments and decrements to see results
x++
y--
console.log(x)
console.log(y)



// There's something called prefix N postfix on the same.
//Example on POSTFIX 
let x=2
console.log(x++)// If commented second this will return 2 
console.log(x)// Now it will be updated to 3

// Example on PREFIX
let y=2
console.log(++y)// Will update to 3



// PRACTICAL QUESTION
//Get hypothenues of a right angle triangle. Prompt user to add desired values.
// Getting values of base and height
let b = prompt("Enter the base;")
let h = prompt("Enter the height;")

console.log(`You have entered ${b} as base and ${h} as height.`)


// CODE

const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
let base;
let height;

rl.question("Enter base", function(n){
    base=n;

    rl.question("Enter height", function(a){
	height=a;

	console.log(`You entered base:${base} and height:${height}`)

	


	// Hypotenuse calculation
	let newBase = base ** 2;
	let newHeight = height ** 2;

	let result = newBase + newHeight
	console.log("The result of summation of squared base and height:",result)

	let finalResult = Math.sqrt(result)
	console.log("The hypotheneus is:",finalResult)

	rl.close();

    });
});

*/




// Assignment operation PRACRICAL QUESTION

// assiging three variables values
let a = 12
let b = 4
let c = 8

// Add b to a

b += a;

// Divide a by c

a /= c;

// Replace the value of c with the modulus of c and b

c = c % b;

// Print all three numbers to the console
console.log(a, b, c)




// PROJECTS ON WHAT WE HAVE COVERED

// 1. Miles-to-kilometers converter.

//Create a variable that contains a value in miles, convert it to kilometers, and
//log the value in kilometers in the following format:

/*
So let us make this fun by user inputting the miles then it is converted to kilometers 
remember 1 mile = 1.60934 kilometers.
*/

// User input
const readline = require("readline")
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
//Variable assignment
let mile;

// Function
rl.question("Enter miles to be converted:", function(n){
    mile=n;// An empty variable to be stored in a value
    console.log(`You have entered: ${mile}mile(s)`);
    console.log("So when converting to km you will have:")

    // Calculation
    let km = 1.60934
    let result = mile * km;
    console.log(`${result}km`)
    rl.close();
    
});


// BMI calculator
// User input
const readline = require("readline")
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

// Variable assignment
let pound;
let inch;

// Input fuction with fuction of calculatio
rl.question("Enter inches to convert to cm:",function(a){
    inch=a // store the user value
    rl.question("Enter pound(s) to be converted to kilo(s):",function(n){
	pound=n
	console.log(`You have entered inches:${inch} and pound(s):${pound} `)
	console.log("-----------------------------------------------")
	// Convertion to kilos and centimeters
	console.log(` For BMI calculation\n ${inch} inch(es) will be:${inch * 100/2.54} meter(s)\n ${pound} pound(s) will be: ${pound * 2.2046} kilo(s)`)
	console.log(`BMI CALCULATION WILL OUTPUT`)
	
	console.log("***********************************************")
	console.log(`${pound * 2.2046 / (inch * 100/2.54)*2}`);
	console.log('***********************************************')
	rl.close();
    })
})



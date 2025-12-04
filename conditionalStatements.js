/*
let age = 10;
let cost = 0;
let message;
if (age < 3) {
 cost = 0;
 message = "Access is free under three.";
} else if (age >= 3 && age < 12) {
 cost = 5;
 message ="With the child discount, the fee is 5 dollars";
} else if (age >= 12 && age < 65) {
 cost = 10;
 message ="A regular ticket costs 10 dollars.";
} else {
 cost = 7;
 message ="A ticket is 7 dollars.";
}
console.log(message);
console.log("Your Total cost "+cost);

console.log("------------------------------------------")

if(age < 3){
 console.log("Access is free under three.");
} else if(age < 12) {
 console.log("With the child discount, the fee is 5 dollars");
} else if(age < 65) {
 console.log("A regular ticket costs 10 dollars.");
} else if(age >= 65) {
 console.log("A ticket is 7 dollars.");
}
*/
/*
// Practice exercise
// Create a prompt to ask the user's age
const readline = require("readline");
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
    
})
//convert a number for an input
let age  

rl.question("Enter your age:",function(n){
    age = n
    if(n=>18){
	console.log("You are eligible to take alcohol.")
    }else{
	console.log("You are to young to drink.")
    };
    rl.close()

});
*/

// Ternary operator
/*
In this is a special type of conditional operation that is short but a little bit tricky.
operand1 ? operand2 : operand3;
what are the meanings ? means => then, and  : means => else
*/

/*
//let access age<18 ? "Denied": "Allowed";
//practical question
let id = false;
let allowed = id ? "Allowed": "Denied";
console.log(allowed)
*/

/*
let fortune1 = "Your cat will look very cuddly today."
let fortune2 = "The weather will be nice tomorrow."
let fortune3 = "Be cautious of your new neighbors."
let fortune4 = "You will find a new hobby soon."
let fortune5 = "It would be wise to avoid the color red today."

// Random Number variable
let randomNumber = Math.floor(Math.random()* 5) + 1

let selectedFortune = randomNumber
if (randomNumber == 1){
  console.log(fortune1)
}else if(randomNumber == 2) {
  console.log(fortune2)
}else if (randomNumber == 3){
  console.log(fortune2)
}else if (randomNumber == 3){
  console.log(fortune3)
}else if(randomNumber ==4){
  console.log(fortune4)

}else if(randomNumber ==5){
  console.log(fortune5)

}

console.log(selectedFortune)
*/

/*
let fortune1 = "Your cat will look very cuddly today."
let fortune2 = "The weather will be nice tomorrow."
let fortune3 = "Be cautious of your new neighbors."
let fortune4 = "You will find a new hobby soon."
let fortune5 = "It would be wise to avoid the color red today."

// Random Number variable
let randomNumber = Math.floor(Math.random()* 5) + 1

let selectedFortune = ""
if(randomNumber == 1){
  selectedFortune = fortune1;
}else if(randomNumber == 2) {
  selectedFortune = fortune2;
}else if(randomNumber == 3){
  selectedFortune = fortune3;
}else if(randomNumber == 4){
  selectedFortune = fortune4;
}else if(randomNumber == 5){
  selectedFortune = fortune5;

}

console.log(selectedFortune)

*/

/*
// Switch statement
let dayOfWeek = 3; 

switch (dayOfWeek) {
    case 1:
        console.log("It's Monday! Time to start the week strong.");
        break;
    case 2:
        console.log("It's Tuesday! Keep the momentum going.");
        break;
    case 3:
        console.log("It's Wednesday! We're halfway there.");
        break;
    case 4:
        console.log("It's Thursday! Almost the weekend.");
        break;
    case 5:
        console.log("It's Friday! The weekend is near.");
        break;
    case 6:
        console.log("It's Saturday! Enjoy your weekend.");
        break;
    case 7:
        console.log("It's Sunday! Rest and recharge.");
        break;
    default:
        console.log("Invalid day! Please enter a number between 1 and 7.");
}
*/

/*
let creditScore = 720; 
let annualIncome = 60000; 
let loanAmount = 200000; 

let eligibilityStatus;

if (creditScore >= 750 && annualIncome >= 80000) {
    eligibilityStatus = "Eligible for premium loan rates.";
} else if (creditScore >= 700 && annualIncome >= 50000) {
    eligibilityStatus = "Eligible for standard loan rates.";
} else if (creditScore >= 650 && annualIncome >= 40000) {
    eligibilityStatus = "Eligible for subprime loan rates.";
} else if (creditScore < 650) {
    eligibilityStatus = "Not eligible due to low credit score.";
} else {
    eligibilityStatus = "Not eligible due to insufficient income.";
}

console.log(eligibilityStatus);
*/


/*
// An else if statement to determine a control flow
// User input the age
const readline = require('readline')
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})

// Variable (Empty)
let age;
let cost;
let message;

// Call the user input and functions at the same time.
rl.question("Enter age:", function(n){
    age = n;
    if (n < 3){
	cost = 0;
	message = "Allowed with free access"
    }else if (n >= 3  && n < 12 ){
	cost = 5;
	message = "Allowed with 5 dollars charge fee"
    }else if (n >= 12 && n < 20){
	cost = 15;
	message="Allowed in with 15 dollars charge fee"
	
    }else if (n >= 20 && n < 35){
	cost = 50;
	message = "ALlowed in with 50 dollars charge fee"
    }else{
	message="You are not eligible for this fun drive maybe becauses of age bracket (40 n above)"
    }
    console.log(message)
    console.log("Total cost:", cost)
    rl.close()
 })
*/
/*
// Ternary operators
// A practical question
const readline = require("readline")
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})
// Create an empty variable
let earns;
let loans
rl.question("Enter amount you earn:", function(e){
    earns = e;
    loans = 10000;
    loan = 500
    e >= 4000 ? console.log(`You eligible for a startup loan of ${loans} shilling`) : console.log(`You are not eligible try applying for ${loan} shillings`);
    rl.close()
})
*/


// Switch statements
// We are going to create cases
const readline = require("readline")
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

rl.question("Enter time (24HRS) to check task: ", function(t) {

    t = Number(t);  // convert input to a number

    switch(true){

        case (t >= 500 && t < 630):
            console.log("Waking up");
            break;

        case (t >= 630 && t < 700):
            console.log("Personal grooming");
            break;

        case (t >= 700 && t < 720):
            console.log("Taking breakfast");
            break;

        case (t >= 720 && t < 820):
            console.log("Driving to work");
            break;

        case (t >= 820 && t < 1200):
            console.log("Office time");
            break;

        case (t >= 1200 && t < 1300):
            console.log("Lunch break");
            break;

        case (t >= 1300 && t < 1610):
            console.log("Drive home");
            break;

        case (t >= 1610 && t < 1715):
            console.log("Resting");
            break;

        case (t >= 1715 && t < 1830):
            console.log("Supper");
            break;

        case (t >= 1830 && t < 2000):
            console.log("Praying and evening devotion");
            break;

        case (t >= 2000 && t < 2130):
            console.log("Sec office time");
            break;

        case (t >= 2130 && t<=2400 || t >= 100 && t <= 500):
            console.log("Sleeping");
            break;

        default:
            console.log("I cannot determine the current time");
    }

    rl.close();
})

/*
=======================================================

** Week 3 - Project 1 **
*** Function Exercises ***

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem and the result can be displayed in the HTML page.

BASIC TRACK: 1-10
ADVANCED TRACK: 11-15
=======================================================
*/
document.getElementById("q0").innerHTML = "JS Page Connected Properly!";
document.getElementById("q0").classList.add("status-good");



// 1. Create a function that simply returns a string that says something funny
//    when it is called and then displayed into the HTML page.

function funny() {
  document.getElementById("q1").innerHTML = "Stressed is just desserts spelled backwards.";
};

funny();

// 2. Define a function called "divideByTwo".
//    It should accept one parameter within a text field called "number" and
//    submitted when a button is clicked.
//    The function should divide the number by two and
//    then displayed into the HTML page.

function divideByTwo (number) {
    var halve = (number / 2);
    document.getElementById("q2").innerHTML = halve;
}
document.getElementById("DivByTwo").addEventListener("click",function() {
    var usernumber = document.getElementById("NumToDiv");
    divideByTwo(usernumber.value);
  });




// 3. Define a function called "greeting".
//    It should accept two parameters within input fields, which will both be first names.
//    The function should display to the HTML page a greeting to both people.

function greeting (firstname1, firstname2) {
  document.getElementById("q3").innerHTML = "Hi there, " + firstname1 + " and " + firstname2 + ".";
}
greeting ("Alison", "Spot");

// 4. Create a function that finds the average of 6 numbers passed in when called
//    and returns the value and is then displayed in the HTML page.
// var ques4nums = [-7, 10, 3, 24, -10, -34]
// var sum = 0;
// function average (){
// for (i = 0; i < ques4nums.length; i++ ){
    // sum += ques4nums[i];
    // return sum/ques4nums.length;
// }
// var avg = average(ques4nums);

// document.getElementById("q4").innerHTML = "The average of all the elements is: " + avg;

// 5. You use Amazon Subscribe & Save to have six cans of cashews automatically sent to you each month.
//    Write a function that takes the price per unit and calculates the total for you each month.
//    Since the price of the cashews can change anytime, pass that amount into the function to get your total price.
var cashewprice = 8.99;
function totalprice (cashewprice){
return cashewprice*6;
}
var result = totalprice(cashewprice);
document.getElementById("q5").innerHTML = "The total price of your cashews is: " + result;


// 6. Define functions called "area" and "perimeter". They should both accept two parameters and calculate the area and perimeter of a rectangle.

function area (length, width) {
  return length*width;
}
function perimeter (length, width) {
  return 2*(length+width);
}
var resultarea = area(4,5);
var resultperimeter = perimeter(4,5);

document.getElementById("q6").innerHTML = "The area is: " + resultarea + ". The perimeter is: " + resultperimeter + ".";



// 7. Define a function called "quarter". It accepts one parameter called "number".
//    The function will return a value which is one quarter of the number provided.
function quarter (number){
  return number/4;
}
var answer = quarter(100);
document.getElementById("q7").innerHTML = "One fourth of the number is: " + answer + ".";




// 8. Write a function called "sleepings", it should accept one parameter, an integer called "hours".
//    Write a conditional statement inside of the function. If the number of hours is more than 8, display a statement to the HTML page about getting enough rest.
//    If the number of hours is less than 8, print a statement recommending the user get more shut eye.

function sleepings (hours){
  if (hours > 8) {
    document.getElementById("q8").innerHTML = "Way to get enough sleep!";
  }
  else {
    document.getElementById("q8").innerHTML = "Try to get over 8 hours of sleep!";
  };
};
sleepings(10);


// 9. Develop a function that determines a person's age by asking them for their birth year.

function age (birthyear){
  return 2016-birthyear;
}

document.getElementById("q9").innerHTML = age(1980);


// 10. Write a function that accepts the following array and separates the people into two teams. Display each team within the HTML page.
//    No names next to each other in the array should be on the same team.

teammates = ["Harold", "Bob", "Sue", "Grady", "Notorious B.I.G.", "JavaCrypt", "Weird guy in the back", "Gary", "Carol", "Hipster Tim", "Janet"]

var newarray1 = [];
var newarray2 = [];

for (i=0; i<teammates.length; i+=2) {
  newarray1.unshift(teammates[i])
};
for (i=1; i<teammates.length; i+=2) {
  newarray2.unshift(teammates[i])
};

document.getElementById("q10a").innerHTML = newarray1;
document.getElementById("q10b").innerHTML = newarray2;


// 11. Allow a user to enter a three digit number.
//     Write a function that adds the numbers together.
//     Hint #1: You need to turn a string into an integer.
//     Hint #2: Strings can be treated as arrays too.

function sumdig(number){
  var string1 = number;
  var innumform = parseInt(string1);
  document.getElementById("q11").innerHTML =innumform[0]+innumform[1]+innumform[2];
};

document.getElementById("addDigits").addEventListener("click", function() {
  var usernum = document.getElementById("3dignum");
  sumdig(usernum);
});


// 12. You've finally gotten around to counting the change in your piggy bank.
//     Write a function that accepts four parameters from a user (quarters, dimes, nickels, and pennies).
//     The function should take each number of coins and multiply it times each coin's value.
//     Finally, it should return the total amount of change you have in the following format: "$32.77"
//     HINT: Understanding the toFixed method will help you with the format.

function piggybank (quarters, dimes, nickels, pennies){
  document.getElementById("q12").innerHTML = "$"+(quarters.value*0.25 + dimes.value*0.10 + nickels.value*0.05 + pennies.value+0.01);
};

document.getElementById("addvalues").addEventListener("click", function() {
piggybank(quarters1,dimes1,nickels1,pennies1)
});

// ADVANCED TRACK

// A. Develop a function that cleans up a phone number entered by a user.
//     The rules are as follows:
//        If the phone number is less than 10 digits or more than 11 digits, assume that it is bad number
//        If the phone number is 10 digits assume that it is good
//        If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits
//        If the phone number is 11 digits and the first number is not 1, then it is a bad number.
//        HINT: You may need to use the charAt method.

function lookpurdy(NumIn){
  if((NumIn.length < 10)||(NumIn.length > 11)){
    document.getElementById("qA").innerHTML = "Please re-enter your 10- or 11-digit phone number";
  } else if(NumIn.length === 10){
    document.getElementById("qA").innerHTML = "("+NumIn.charAt(0)+NumIn.charAt(1)+NumIn.charAt(2)+") "+NumIn.charAt(3)+NumIn.charAt(4)+NumIn.charAt(5)+" - "+NumIn.charAt(6)+NumIn.charAt(7)+NumIn.charAt(8)+NumIn.charAt(9);
  }
}


document.getElementById("freshen").addEventListener("click", function() {
lookpurdy(userphone);
});

// B. Create a function that determines whether a parameter is a number or not.
//     Iterate over the elements in the following array to determine if each is a number.
//     HINT: You may need to use the isNaN method.

arrayOfAllTheThings = ["one", 23, {thingsWhalesLove: "beaches"}, "six hundred", 33, 6834, "5,435"]
answerarray = [];
for (i = 0; i < arrayOfAllTheThings.length; i++){
  if((isNaN(arrayOfAllTheThings[i]))===true){
    answerarray.push("Not a number.")
  }
  else{
    answerarray.push("Is a number.")
  }
}
document.getElementById("qB1").innerHTML = "Given array = " + arrayOfAllTheThings;
document.getElementById("qB2").innerHTML = "New array = " + answerarray;

// C. Create a die rolling function that accepts no parameters.
//     It rolls two six-sided-dice, adds the two numbers together, and returns a roll value.
//     Display the result in the HTML page.
//     To get the random number rolled by each die, use Math.random and Math.floor.

var die1 = Math.floor((Math.random*6)+1)
var die2 = Math.floor((Math.random*6)+1)
var sum = die1.value+die2.value
document.getElementById("qC").innerHTML = sum.value;


// D. Using your die roll function above, figure out how many times it would take a user
//     to get around a Monopoly board once. A monopoly board has 40 spaces total.




// E. Write a function that takes a year from a user
//    and reports whether or not it is a leap year.
//    Display the result in the HTML page.
//    Remember, a leap year occurs:
//        On every year that is evenly divisible by 4
//        Except every year that is evenly divisible by 100
//        Unless the year is also evenly divisible by 400
//        For example, 1997 is not a leap year, but 1996 is. 1900 is not a leapyear, but 2000 is.

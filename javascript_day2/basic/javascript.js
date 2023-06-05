
/* Here is the code for the first exercise_1 */
/* ex 1 | Temperature v1.0
Create a program that according to the temperature will provide you with the information, whether the weather is 
cold or moderate. This program should generate a different random number every time, which should be between -5c and 25c.
If the temperature is between -5c and 10c print "The weather is cold" otherwise print "The weather is moderate". 

Hint: 
Math.random() will give you a random number between 0 and 1, but it will not reach number 0 or 1, so any value 
between these two numbers (for example 0,315 , 0,91239 0,1) so if you try to multiply it with 10, you can have a random
number between 0 and 10 :).
*/

/* function generateRandomTemperature() {
    // Generate a random number between 0 and 1 (excluding 1)
    var random = Math.random();

    // Multiply the random number by the range (25 - (-5) = 30) and shift it by the minimum value (-5)
    var temperature = random * 30 - 5;

    // Round the temperature to 2 decimal places
    temperature = temperature.toFixed(2);

    return temperature;
}

function determineWeather() {
    var temperature = generateRandomTemperature();

    if (temperature >= -5 && temperature <= 10) {
        console.log("The weather is cold. Temperature: " + temperature + "°C");
    } else {
        console.log("The weather is moderate. Temperature: " + temperature + "°C");
    }
}

// Call the function to determine the weather
determineWeather();
 */

/*
   ex 2 | Random Food Create an array named favoriteFoods which contains the food items like "pizza", “hamburger”,
   "ice cream", “chocolate”. Write a function named randomFood. The function should be able to choose and return 
   randomly a favorite food in your favoriteFoods array. */

/* 
let favoriteFoods = ["pizza", "hamburger", "ice cream", "chocolate"];

function randomFood() {
    let var1 = Math.floor(Math.random() * favoriteFoods.length);
    return favoriteFoods[var1];

}

console.log(randomFood());
 */

/* Here is the code for exercise_3 */
/* 
function crystalGazer(numberOfChildren, partnerName, location, jobTitle) {
    let message =
        "You will be a " +
        jobTitle +
        " in " +
        location +
        " and married to " +
        partnerName +
        " with " +
        numberOfChildren +
        " children.";

    return message;
}


let ausgabe = crystalGazer(7, "Sara", "Vienna", "Software Engineer");
console.log(ausgabe);
document.write(ausgabe);
 */


/* Here is the exercise_4 and exercise_5  */

/* 
let date = new Date();
const year = date.getFullYear();

function ageCalculator(birthYear, currentYear) {
    let age = currentYear - birthYear;
    let age_2 = age - 1;
    let array = [age, age_2]
    return array;

}
let array2 = ageCalculator(1994, year);

alert("your age is " + array2[0] + " or " + array2[1] + " old");

console.log(`Your age is either ` + age + ` or ` + age_2);
    document.write(`Your age is either ` + age + ` or ` + age_2);

*/

/* Here is the code for exercise_6 */

/* 
function converter() {
    let dagree = 90;
    let gradian = dagree * (Math.PI / 180);
    return gradian;
}

document.write('The gradian ist = ' + converter());

 */

/* Here is the code for exercise_7 */
/* 
function formuler(a, b, c) {
    let area = a * b;
    let volume = a * b * c;
    return [area, volume];

}

let formuler_new = formuler(2, 7, 5)
let result_area = formuler_new[0];
let result_volume = formuler_new[1];

document.write('The area is ' + result_area + ' and the volume is ' + result_volume); 
*/


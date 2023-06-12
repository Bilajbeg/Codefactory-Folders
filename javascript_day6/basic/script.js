
let sandwiches = `{ "sandwich": "Hamburger",
                     "calories": "260" }`;
let fries = `{ "fries_size": "Large French Fries", 
                "calories": "570" }`;

// Create object1

let newSandwiches = JSON.parse(sandwiches);
let newFries = JSON.parse(fries);

document.write(`My favorite sandwich is a ${newSandwiches.sandwich} which has approximately ${newSandwiches.calories} calories, along with it I enjoy eating ${newFries.fries_size} which have about ${newFries.calories} calories.`)


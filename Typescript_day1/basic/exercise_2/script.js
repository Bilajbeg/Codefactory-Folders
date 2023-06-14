"use strict";
let fullNameObj = [{
        fName: "Emelin",
        lName: "Bilajbegovic"
    }, {
        fName: "Emelin",
        lName: "Bilajbegovic"
    }, {
        fName: "Emelin",
        lName: "Bilajbegovic"
    }, {
        fName: "Emelin",
        lName: "Bilajbegovic"
    }, {
        fName: "Emelin",
        lName: "Bilajbegovic"
    }, {
        fName: "Emelin",
        lName: "Bilajbegovic"
    }, {
        fName: "Emelin",
        lName: "Bilajbegovic"
    }, {
        fName: "Emelin",
        lName: "Bilajbegovic"
    }, {
        fName: "Emelin",
        lName: "Bilajbegovic"
    }, {
        fName: "Emelin",
        lName: "Bilajbegovic"
    }
];
// 1.) First task
// let fullName = fullNameObj.fName + " " + fullNameObj.lName;
// document.write(fullName);
// 2.) Second Task
// const fullNameArray = Array(10).fill(fullNameObj); // This method fills each slot of the array with the provided value
//  fullNameArray.forEach((fullNameObj) => {
//  const fullName = fullNameObj.fName + " " + fullNameObj.lName;
//  document.write(fullName + "<br>");
// });
// 3.) Third Task
function printLastName() {
    fullNameObj.forEach(test => {
        document.write(test.lName + "<br>");
    });
}
// Sets the time when it should apply on the screen 
setTimeout(() => {
    printLastName();
}, 5000);

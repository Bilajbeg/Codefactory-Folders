"use strict";
/* const names: string[] = ["Markus", "Martin", "Tarik", "David"]; */
// Print only the index of the elements
/* document.write("<h3>Printing index of elements:</h3>");
for (let i = 0; i < names.length; i++) {
    document.write(`Index : `, i + "<br>")
};
document.write("<br>");
 */
let names = ["Alice", "Bob", "Charlie", "David"];
// Print only the index of the elements
document.write("<h3>Printing index of elements:</h3>");
names.forEach((_, index) => {
    document.write(index + "<br>");
});
document.write("<br>");
// Print only the values
document.write("<h3>Printing values:</h3>");
names.forEach((name) => {
    document.write(name + "<br>");
});
document.write("<br>");
// Print both index and values
document.write("<h3>Printing index and values:</h3>");
names.forEach((name, index) => {
    document.write(`Index: ${index}, Value: ${name}<br>`);
});

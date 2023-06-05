function findHighestValue(arr) {
    let highestValue=0;

    for(let i=0; i < arr.length; i++) {

        if (arr[i] > highestValue) {
            highestValue = arr[i];
        }
    }

    return highestValue;

}

// Using some values for testing the javascript code :

let values = [1, 7, -3, 9];
let highestValue = findHighestValue(values);
console.log("Highest value: " + highestValue);
document.write("Highest value: " + highestValue);
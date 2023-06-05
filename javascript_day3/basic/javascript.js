function generateRandomTemperature() {
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

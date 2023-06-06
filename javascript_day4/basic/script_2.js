document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Extract values from input fields
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const profession = document.getElementById("profession").value;
  
    // Create a new div to display the form information
    const outputDiv = document.createElement("div");
    outputDiv.innerHTML = `First Name: ${firstName}<br>
                           Last Name: ${lastName}<br>
                           Age: ${age}<br>
                           Profession: ${profession}`;
    
    // Change text color based on name length
    if (firstName.length > 5 || lastName.length > 5) {
      outputDiv.style.color = "green";
    } else {
      outputDiv.style.color = "red";
    }
  
    // Change background color based on profession
    switch (profession) {
      case "IT":
        outputDiv.style.backgroundColor = "aqua";
        break;
      case "Hospitality":
        outputDiv.style.backgroundColor = "yellow";
        break;
      case "Education":
        outputDiv.style.backgroundColor = "lightblue";
        break;
      case "Finance":
        outputDiv.style.backgroundColor = "lightgreen";
        break;
      default:
        outputDiv.style.backgroundColor = "white";
    }
  
    // Clear previous output
    const outputContainer = document.getElementById("outputContainer");
    outputContainer.innerHTML = "";
  
    // Append the new output div to the container
    outputContainer.appendChild(outputDiv);
  });
  
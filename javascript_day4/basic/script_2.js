document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Extract values from input fields
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
    const profession = document.getElementById("profession").value;
  
    // Display values in separate div
    const outputDiv = document.getElementById("output");
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
        outputDiv.style.backgroundColor = "purple";
        break;
      case "Hospitality":
        outputDiv.style.backgroundColor = "yellow";
        break;
      case "Education":
        outputDiv.style.backgroundColor = "blue";
        break;
      case "Finance":
        outputDiv.style.backgroundColor = "green";
        break;
      default:
        outputDiv.style.backgroundColor = "white";
    }
  });
  
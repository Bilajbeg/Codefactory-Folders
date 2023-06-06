document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Extract values from input fields
    const firstName = document.getElementById("firstName").value;
    const lastName  = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;
  
    // Display values in separate div
    const outputDiv = document.getElementById("output");
    outputDiv.innerHTML = `First Name: ${firstName}<br>
                           Last Name: ${lastName}<br>
                           Age: ${age}`;
  
    // Change text color based on name length
    if (firstName.length > 5 || lastName.length > 5) {
      outputDiv.style.color = "green";
    } else {
      outputDiv.style.color = "red";
    }
  });
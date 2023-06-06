 // JavaScript code to center the circle element
 var circle = document.getElementById("circle");
    
 
circle.addEventListener("mouseenter", function(){
    document.getElementById("result").innerHTML = "You are in the circle";
})

circle.addEventListener("mouseout", function(){
    document.getElementById("result").innerHTML = "You are outsite the circle";
})

// Function to handle the click and double-click events on the circle
function handleCircleEvents() {
    const circle = document.getElementById("circle");
  
    circle.addEventListener("click", function() {
      document.body.style.backgroundColor = "gray";
    });
  
    circle.addEventListener("dblclick", function() {
      document.body.style.backgroundColor = "blue";
    });
  }
  
  // Call the handleCircleEvents function when the DOM content is loaded
  document.addEventListener("DOMContentLoaded", handleCircleEvents);
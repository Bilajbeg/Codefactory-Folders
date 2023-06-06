 // JavaScript code to center the circle element
 
 window.addEventListener("DOMContentLoaded", function() {
    var circle = document.getElementById("circle");
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;
    var circleSize = 200;

    var centerX = (windowWidth - circleSize) / 2;
    var centerY = (windowHeight - circleSize) / 2;

    circle.style.left = centerX + "px";
    circle.style.top = centerY + "px";
  });
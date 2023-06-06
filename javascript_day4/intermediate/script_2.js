// Function to generate random RGB color
function getRandomColor() {
    const r = Math.floor(Math.random() * 256); // Random value between 0 and 255 for red
    const g = Math.floor(Math.random() * 256); // Random value between 0 and 255 for green
    const b = Math.floor(Math.random() * 256); // Random value between 0 and 255 for blue
  
    return `rgb(${r}, ${g}, ${b})`;
  }
  
  // Click event listener for the button
  const colorButton = document.getElementById("colorButton");
  colorButton.addEventListener("click", function() {
    const randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
  });
  
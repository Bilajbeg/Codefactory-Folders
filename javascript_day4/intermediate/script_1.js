// Array of Santa Claus image URLs
const santaUrls = [
  "https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png",
  "https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png",
  "https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png",
  "https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png",
  "https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png",
  "https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png",
  "https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png",
  "https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png",
  "https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png"
];

// Create the 3x3 grid
const matrixDiv = document.getElementById("matrix");

for (let i = 0; i < santaUrls.length; i++) {
  const santaImg = document.createElement("img");
  santaImg.src = santaUrls[i];
  santaImg.alt = "Santa Claus";
  santaImg.classList.add("santa-claus");

  santaImg.addEventListener("click", function() {
    this.style.visibility = "hidden";
  });

  matrixDiv.appendChild(santaImg);
}

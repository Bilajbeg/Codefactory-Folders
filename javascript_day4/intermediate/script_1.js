// Array of Santa Claus image URLs
const santaUrls = [
  "https://cdn.shopify.com/s/files/1/1369/2605/articles/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.png?v=1511752878",
  "https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png",
  "https://cdn.shopify.com/s/files/1/1369/2605/articles/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.png?v=1511752878",
  "https://cdn.shopify.com/s/files/1/1369/2605/articles/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.png?v=1511752878",
  "https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png",
  "https://cdn.shopify.com/s/files/1/1369/2605/articles/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.png?v=1511752878",
  "https://juststickers.in/wp-content/uploads/2016/11/santa-claus.png",
  "https://cdn.shopify.com/s/files/1/1369/2605/articles/White_Gift_Box_with_Red_Bow_PNG_Image_2048x.png?v=1511752878",
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

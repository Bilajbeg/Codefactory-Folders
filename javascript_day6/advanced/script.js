
let books = `[{
    "Title": "The Lord of the Ring",
    "Author": "John R. R. Tolkien",
    "Read": "true",
    "image": "./img/reading_bed_book.jpg"
} , {
    "Title": "1984 ",
    "Author": "George Orwell",
    "Read": "true",
    "image": "./img/meeting.jpg"
} , {
    "Title": "Animal Farm",
    "Author": "George Orwell",
    "Read": "true",
    "image": "./img/breakfast.jpg"
} , {
    "Title": "The Great Gatsby",
    "Author": "F. Scott Fitzgerald",
    "Read": "true",
    "image": "./img/firness.jpg"
} , {
    "Title": "The Intelligent Investor",
    "Author": "Benjamin Graham",
    "Read": "true",
    "image": "./img/dinner.jpg"
} , {
    "Title": "A Brief History of Time",
    "Author": "Stephen Hawking",
    "Read": "true",
    "image": "./img/shopping.jpg"
} , {
    "Title": "Long Walk to Freedom",
    "Author": "Nelson Mandela",
    "Read": "true",
    "image": "./img/going_work.jpg"
} 
]`;



let newArr = JSON.parse(books)

console.log(newArr);


for (let i = 0; i < newArr.length; i++) {
    document.getElementById("result").innerHTML += ` 
    <div>
        <p>${newArr[i].Title}</p>
        <p>${newArr[i].Author}</p>
        <p>Read</p>
        <img src="${newArr[i].image}" alt="" width="200" height="200">
    </div>
    `;
}


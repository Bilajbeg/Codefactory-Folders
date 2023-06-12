
let books = `[{
    "Title": "The Lord of the Ring",
    "Author": "John R. R. Tolkien",
    "Read": "true"
    
} , {
    "Title": "1984 ",
    "Author": "George Orwell",
    "Read": "true"
    
} , {
    "Title": "Animal Farm",
    "Author": "George Orwell",
    "Read": "true"
} , {
    "Title": "The Great Gatsby",
    "Author": "F. Scott Fitzgerald",
    "Read": "true"
} , {
    "Title": "The Intelligent Investor",
    "Author": "Benjamin Graham",
    "Read": "true"
} , {
    "Title": "A Brief History of Time",
    "Author": "Stephen Hawking",
    "Read": "true"
} , {
    "Title": "Long Walk to Freedom",
    "Author": "Nelson Mandela",
    "Read": "true"
} 
]`;



let newArr = JSON.parse(books)

console.log(newArr);


for (const x of newArr) {
    document.getElementById("result").innerHTML += `
    <img src="img_girl.jpg" alt="The Lord of the Ring" width="200" height="200"> 
    <div>
        <p>${x.Title}</p>
        <p>${x.Author}</p>
        <p>Read</p>
    </div>
    `;
}


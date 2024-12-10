
const addButton = document.querySelector("#add-button");
const dialogBox = document.querySelector("#dialog");
const removeBook = document.querySelector("#remove");
const addToLibrary = document.querySelector("#submit");
const bookWrapper  = document.querySelector(".book-wrapper");




const myLibrary = [];

addButton.addEventListener("click", () => {
    dialogBox.showModal();
    })


addToLibrary.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
    
   
    })
    
   
    

function Book(title, author, pages, genre, status) {
    this.title = title; 
    this.author = author; 
    this.pages = pages;
    this.genre = genre;
}






function addBookToLibrary() {
    
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let genre = document.querySelector("#genre").value;
    const newbook = new Book(title, author, pages, genre);
    myLibrary.push(newbook);

   
    showBook();
   
}

function showBook() {
    bookWrapper.innerHTML = "";
    myLibrary.forEach((Book) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card")
    bookWrapper.appendChild(bookCard)
    
    /* title style */
    const titleElement = document.createElement("h3"); 
    titleElement.textContent = Book.title;
    bookCard.appendChild(titleElement);
   
    /* p styles */
    const authorElement = document.createElement("p"); 
    authorElement.textContent = `Author: ${Book.author}`;
    bookCard.appendChild(authorElement);

    const pagesElement = document.createElement("p"); 
    pagesElement.textContent = ` Pages: ${Book.pages}`;
    bookCard.appendChild(pagesElement);

    const genreElement = document.createElement("p"); 
    genreElement.textContent = `Genre: ${Book.genre}`;
    bookCard.appendChild(genreElement);
    
    })
}



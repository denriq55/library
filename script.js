
const addButton = document.querySelector("#add-button");
const dialogBox = document.querySelector("dialog");
const addToLibrary = document.querySelector("#submit");
const bookWrapper  = document.querySelector(".book-wrapper");
const formInputs = document.querySelector("dialog form");
const closeDialog = document.querySelector("#close");
const form = document.querySelector("form")




addButton.addEventListener("click", () => {
    dialogBox.showModal();
    })

addToLibrary.addEventListener("click", (e) => {
    e.preventDefault();
    grabValues();
    })

closeDialog.addEventListener("click", (e) => {
dialogBox.close();
    })
   

class Book {

    constructor(title, author, pages, genre, state) {
    this.title = title; 
    this.author = author; 
    this.pages = pages;
    this.genre = genre;
    this.state = state; 
    }

   
}



class Library {
    constructor() {
        this.books = []
        
    }

    addToLibrary(book) {
        this.books.push(book)
    }

    removeBook(e) {
        const index = e.target.getAttribute("data-index")
        this.books.splice(index, 1);
    }


}

const myLibrary = new Library();

function grabValues() {
    
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let genre = document.querySelector("#genre").value;
    let state = document.querySelector('input[name="status"]:checked').value;

    const newbook = new Book(title, author, pages, genre, state);
    myLibrary.addToLibrary(newbook)

    showBook();

    formInputs.reset();
   
}

function showBook() {
    bookWrapper.innerHTML = "";
    myLibrary.books.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookWrapper.appendChild(bookCard);
    
    /* title style */
    const titleElement = document.createElement("h3"); 
    titleElement.textContent = book.title;
    bookCard.appendChild(titleElement);
   
    /* p styles */
    const authorElement = document.createElement("p"); 
    authorElement.textContent = `Author: ${book.author}`;
    bookCard.appendChild(authorElement);

    const pagesElement = document.createElement("p"); 
    pagesElement.textContent = ` Pages: ${book.pages}`;
    bookCard.appendChild(pagesElement);

    const genreElement = document.createElement("p"); 
    genreElement.textContent = `Genre: ${book.genre}`;
    bookCard.appendChild(genreElement);

    const statusElement = document.createElement("p");
    statusElement.textContent = `Status: ${book.state}`;
    bookCard.appendChild(statusElement);

    /* remove book */
        
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    const svg = document.createElement("img");
    svg.src = "icons/trash-can-regular.svg";

    removeButton.setAttribute("data-index", index);
    removeButton.appendChild(svg);
    bookCard.appendChild(removeButton);

    
    removeButton.addEventListener("click", (e) => {
        bookCard.remove();
        myLibrary.removeBook(e)});
    })
}




const addButton = document.querySelector("#add-button");
const dialogBox = document.querySelector("#dialog");
const addToLibrary = document.querySelector("#submit");
const bookWrapper  = document.querySelector(".book-wrapper");
const closeDialog = document.querySelector("#close");
const formInputs = document.querySelector("dialog form");





const myLibrary = [];

addButton.addEventListener("click", () => {
    dialogBox.showModal();
    })


addToLibrary.addEventListener("click", (e) => {
    e.preventDefault();
    addBookToLibrary();
     })

closeDialog.addEventListener("click", () => {
    dialogBox.close();
    })
   

function Book(title, author, pages, genre, status) {
    this.title = title; 
    this.author = author; 
    this.pages = pages;
    this.genre = genre;
    this.status = status;
}



function addBookToLibrary() {
    
    let title = document.querySelector("#title").value;
    let author = document.querySelector("#author").value;
    let pages = document.querySelector("#pages").value;
    let genre = document.querySelector("#genre").value;
    let status = document.querySelector('input[name="status"]:checked').value;
    const newbook = new Book(title, author, pages, genre, status);
    myLibrary.push(newbook);

   
    showBook();

    formInputs.reset();
   
}

function showBook() {
    bookWrapper.innerHTML = "";
    myLibrary.forEach((Book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookWrapper.appendChild(bookCard);
    
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

    const statusElement = document.createElement("p");
    statusElement.textContent = `Status: ${Book.status}`;
    bookCard.appendChild(statusElement);

    /* remove */
        
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove-button");
    removeButton.innerHTML = "Remove Book"
    bookCard.appendChild(removeButton);

    removeButton.addEventListener("click", () => {
        removeBook(index);
       
    })

    })
    function removeBook(index) {
        const targetBook = myLibrary[index]; 
        if (targetBook) {
            myLibrary.splice(index,1);
            targetCard.innerHTML = "";
        }
    
       
    }
    

} 
    





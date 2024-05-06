"use strict"

const myLibrary = [];

// Book function
function Book(title,author,pages,read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
    this.info = function(){
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
    };
}

function addBookToLibrary(title,author,pages,read){
    myLibrary.push(new Book(title,author,pages,read));
}

// Initial books
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read yet');
const littlePrince = new Book('The Little Prince', 'Antoine De Saint', '96', 'read');
const harryPotter1 = new Book('Harry Potter and the Chamber of Secrets','J.K. Rowling','340','read');
const aliceWonderland = new Book(`Alice's Adventures in Wonderland`, 'Lewis Carroll','380','not read yet')

myLibrary.push(theHobbit);
myLibrary.push(littlePrince);
myLibrary.push(harryPotter1);
myLibrary.push(aliceWonderland);

// Show adding form

const showPopup = document.querySelector(".popup");
const addBookBtn = document.querySelector("#add_books");

addBookBtn.addEventListener('click', () =>
showPopup.classList.toggle('active')
);

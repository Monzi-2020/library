"use strict"

const myLibrary = [];

// Book function
function Book(title,author,pages,read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
    return this;
}

function addBookToLibrary(title,author,pages,read){
    myLibrary.push(new Book(title,author,pages,read));
}

function displayBook(arr){
    for (const obj of arr){
        const book = document.createElement('div');
        book.classList.add('book');
        bookContainer.appendChild(book);
        console.log(this)

        const title = document.createElement('div');
        title.classList.add('book_title');
        title.textContent = `${obj.title}`;
        book.appendChild(title);

        const author = document.createElement('div');
        author.classList.add('book_author');
        author.textContent = `${obj.author}`;
        book.append(author);
    }
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



// Number of books
const numBooks = document.querySelector('.num_books');
numBooks.textContent = myLibrary.length;

// Show adding form

const showPopup = document.querySelector(".popup");
const addBookBtn = document.querySelector("#add_books");

addBookBtn.addEventListener('click', () =>
showPopup.classList.toggle('active')
);

// Close adding form
const closeBtn = document.querySelector('.close_btn');

closeBtn.addEventListener('click', () => 
showPopup.classList.toggle('active'));

// Book container

const bookContainer= document.querySelector('.book_container');




displayBook(myLibrary);
console.log(myLibrary)


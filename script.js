"use strict"

const myLibrary = [];

// Book function
function Book(title,author,pages,read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = Boolean(read);
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

        const title = document.createElement('div');
        title.classList.add('book_title');
        title.textContent = `${obj.title}`;
        book.appendChild(title);

        const author = document.createElement('div');
        author.classList.add('book_author');
        author.textContent = `by ${obj.author}`;
        book.append(author);

        const pages = document.createElement('div');
        pages.classList.add('pages');
        pages.textContent = `${obj.pages} pages`;
        book.appendChild(pages);

        const readTxt = document.createElement('div');
        const toggleBox = document.createElement('label');
        const checkbox = document.createElement('input');
        const circle = document.createElement('div');
        
        readTxt.classList.add('read');
        toggleBox.classList.add('toggle_box');
        checkbox.setAttribute('type', 'checkbox');
        circle.classList.add('circle');
        readTxt.textContent = "Read"
        toggleBox.appendChild(checkbox);
        toggleBox.append(circle);
        book.appendChild(readTxt);
        book.appendChild(toggleBox);

        toggleBox.addEventListener('click', () => {
               if(checkbox.checked){
                circle.classList.toggle('toggled');
                readTxt.classList.toggle('toggled');
                readTxt.textContent = "Have not read yet"
               }
               else{
                readTxt.textContent = "Read"
                // I figure out how to check the checkbox with the input from form
               }
        });        
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



// -----Header and form-----

// Number of books
const numBooks = document.querySelector('.num_books');
numBooks.textContent = myLibrary.length;


// Dialog form

const showPopup = document.querySelector("dialog");
const addBookBtn = document.querySelector("#add_books");

addBookBtn.addEventListener("click", () => {
    showPopup.showModal();
    document.querySelector('form').reset();
})

const submitBtn = document.querySelector('.form_btn');

submitBtn.addEventListener('click', preventBtn, false) 

submitBtn.addEventListener('click', () =>{
    const title = document.querySelector('#title');
    const author = document.querySelector('#author');
    const pages = document.querySelector('#pages');
    const read = document.querySelector('#read');
    addBookToLibrary(title.value,author.value,pages.value,read.value);
    numBooks.textContent = myLibrary.length;
    resetLibrary(bookContainer);
    displayBook(myLibrary);
    showPopup.close();
})

function preventBtn(event){
    event.preventDefault();
}

function resetLibrary(container){
    container.replaceChildren();
}


// Close dialog
const closeBtn = document.querySelector('.close_btn');

closeBtn.addEventListener('click', () => {
    showPopup.close();
})


// -----Book container-----

const bookContainer= document.querySelector('.book_container');


// -----Book elements-----


displayBook(myLibrary);


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


// Initial books
const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'false');
const littlePrince = new Book('The Little Prince', 'Antoine De Saint', '96', 'true');
const harryPotter1 = new Book('Harry Potter and the Chamber of Secrets','J.K. Rowling','340','true');
const aliceWonderland = new Book(`Alice's Adventures in Wonderland`, 'Lewis Carroll','380','false')

myLibrary.push(theHobbit);
myLibrary.push(littlePrince);
myLibrary.push(harryPotter1);
myLibrary.push(aliceWonderland);


// -----Header and form-----

// Number of books
const numBooks = document.querySelector('.num_books');
numBooks.textContent = myLibrary.length;


// -----Dialog form-----

const showPopup = document.querySelector("dialog");
const addBookBtn = document.querySelector("#add_books");

addBookBtn.addEventListener("click", () => {
    showPopup.showModal();
    document.querySelector('form').reset();
})

const submitBtn = document.querySelector('.form_btn');

// To prevent passing form input to the server

submitBtn.addEventListener('click', preventBtn, false) 

// Add Book

submitBtn.addEventListener('click', () =>{
    const title = document.querySelector('#title').value;
    const author = document.querySelector('#author').value;
    const pages = document.querySelector('#pages').value;
    const read = document.querySelector('#read').value;
    addBookToLibrary(title,author,pages,read);
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
displayBook(myLibrary);


// -----Book elements-----

function displayBook(arr){
    for (const obj of arr){
        // Book figure
        const book = document.createElement('div');
        book.classList.add('book');
        bookContainer.appendChild(book);

        // Added index to target certain object in array
        const index = arr.indexOf(obj);

        // Delete button for the book elements
        const delBookBtn = document.createElement('button');
        delBookBtn.classList.add('del_book_btn');
        delBookBtn.textContent = "X"
        delBookBtn.addEventListener('click', () => {
            spliceObj(myLibrary,myLibrary[index]);
            // Reset the library and build again according to updated condition
            resetLibrary(bookContainer);
            displayBook(myLibrary);
            numBooks.textContent = myLibrary.length;
        })
        book.appendChild(delBookBtn);

        // Adding infos on book elements

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

        // Toggle button

        const readTxt = document.createElement('div');
        const toggleBox = document.createElement('label');
        const checkbox = document.createElement('input');
        const circle = document.createElement('div');
        
        readTxt.classList.add('read');
        toggleBox.classList.add('toggle_box');
        circle.classList.add('circle');
        readTxt.textContent = ""
        toggleBox.append(circle);
        book.appendChild(readTxt);
        book.appendChild(toggleBox);

        // Toggle function

        let read = obj.read;
        
        if(read === "false" ){
            circle.classList.toggle('toggled');
            readTxt.classList.toggle('toggled');
            readTxt.textContent = "Have not read yet";
        }
        else if(read === "true"){
            readTxt.textContent = "Read";
        }

        // Toggle eventlistener

        toggleBox.addEventListener('click', () => {
            if(read === "false"){  
            circle.classList.toggle('toggled');
            readTxt.classList.toggle('toggled');
            readTxt.textContent = "Read";
            read = "true";
            
            }
            else if(read === "true"){
                circle.classList.toggle('toggled');
                readTxt.classList.toggle('toggled');
                readTxt.textContent = "Have not read yet";
                read = "false";
            }    

        });
    }
};        
    

function spliceObj(arr,value){
    for(let i=0; i < arr.length; i++){
    const index = arr.indexOf(value)
    if(index > -1) {
        myLibrary.splice(index,1)
    };
    }}





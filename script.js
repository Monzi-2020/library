"use strict"

function Book(title,author,pages,read){
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
    this.info = function(){
        console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
    };
}

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', '295', 'not read yet');

function Player(name,marker){
    this.name = name;
    this.marker = marker;
    this.sayName = function() {
        console.log(this.name)
    };
}

const player1 = new Player('steve', 'X');
const player2 = new Player('also steve', 'O');

// console.log(Object.getPrototypeOf(Player.prototype) === Object.prototype)
console.log(player2.valueOf())
console.log(theHobbit.valueOf())
console.log(player1.hasOwnProperty('valueOf'))
console.log(Object.getPrototypeOf(Object.prototype))

Player.prototype.sayHello = function(){
    console.log("Hello, I'm a player");
};

// player1.sayHello();
// player2.sayHello();
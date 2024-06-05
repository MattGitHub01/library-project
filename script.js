const library = [];

function Book(name, author, pages, id) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.id = id;
};

const testBookOne = {
    name: 'Test',
    author: 'Dave Dave',
    pages: 100,
    id: 1
};

function addNewBook() {
    library.push(testBookOne);
};

addNewBook()

const container = document.querySelector('.container');


/*
const card = document.createElement('div');
card.classList = 'card';
container.appendChild(card);

const title = document.createElement('p');
title.textContent = `Name: ${library[0].name}\n`;
card.appendChild(title);

const author = document.createElement('p');
author.textContent = `Author: ${library[0].author}\n`;
card.appendChild(author);

const pages = document.createElement('p');
pages.textContent = `Pages: ${library[0].pages}`;
card.appendChild(pages);

const button = document.createElement('button');
button.classList = 'new-book';
button.textContent = 'New Book';
button.addEventListener('click', () => {
    const newBookForm = document.querySelector('.add-book-form');
    newBookForm.showModal();
});
container.appendChild(button);

*/
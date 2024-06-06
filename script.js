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

*/

const newBookBtn = document.querySelector('.add-btn');
newBookBtn.addEventListener('click', () => {
    const newBookForm = document.querySelector('.add-book-form');
    newBookForm.showModal();
});

const formSubmitBtn = document.querySelector('.form-submit');
formSubmitBtn.addEventListener('click', () => {
    if ((document.getElementById('add-title').value !== '' || document.getElementById('add-author').value !== '') || document.getElementById('add-pages').value !== '') {
        const tableBody = document.querySelector('.table-body');

        const formRow = document.createElement('tr');

        const bookTitle = document.createElement('td');
        bookTitle.textContent = document.getElementById('add-title').value;
        formRow.appendChild(bookTitle);

        const bookAuthor = document.createElement('td');
        bookAuthor.textContent = document.getElementById('add-author').value;
        formRow.appendChild(bookAuthor);

        const bookPages = document.createElement('td');
        bookPages.textContent = document.getElementById('add-pages').value;
        formRow.appendChild(bookPages);

        const bookRead = document.createElement('td');
        let readText = document.querySelectorAll('input[name=add-read]').forEach((e) => {
            if (e.checked==true) {
                bookRead.textContent = 'Yes'
            } else {
                bookRead.textContent = 'No';
            };
        })
        
        formRow.appendChild(bookRead);

        tableBody.appendChild(formRow);
    }
});

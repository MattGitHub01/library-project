const library = [];

function Book(title, author, pages, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
    this.check = function () {
        console.table()
    }
};

const container = document.querySelector('.container');

const newBookBtn = document.querySelector('.add-btn');
newBookBtn.addEventListener('click', () => {
    const newBookForm = document.querySelector('.add-book-form');
    newBookForm.showModal();
});

let bookId = 0;

const formSubmitBtn = document.querySelector('.form-submit');
formSubmitBtn.addEventListener('click', () => {
    if ((document.getElementById('add-title').value !== '' && document.getElementById('add-author').value !== '') && document.getElementById('add-pages').value !== '') {
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

        const addRead = document.createElement('input');
        addRead.setAttribute('type', 'checkbox');
        addRead.setAttribute('name', 'read-table');
        bookRead.appendChild(addRead);
        formRow.appendChild(bookRead);

        const delRow = document.createElement('button');
        delRow.classList = 'del-row';
        delRow.textContent = '»Delete«';
        delRow.addEventListener('click', () => {
            tableBody.removeChild(formRow);
            delete library[newBook.id];
        });
        formRow.appendChild(delRow);

        tableBody.appendChild(formRow);
        //Add Book To Library
        const newBook = new Book(document.getElementById('add-title').value, document.getElementById('add-author').value, document.getElementById('add-pages').value, bookId);
        bookId =+ 1;
        library.push(newBook);
    };
});

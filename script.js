let library = [];
let readValue = false;
let bookId = 0;

function Book(title, author, pages, read, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = readValue;
    this.id = id;
    this.check = function () {
        console.table(this.title, this.author, this.pages, this.read);
    }
};

const container = document.querySelector('.container');

const newBookBtn = document.querySelector('.add-btn');
newBookBtn.addEventListener('click', () => {
    const newBookForm = document.querySelector('.add-book-form');
    newBookForm.showModal();
});

const cancelBtn = document.querySelector('.reset-btn');
cancelBtn.addEventListener('click', () => {
    library = [];
})

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
        addRead.addEventListener('change', function() {
            if (this.checked) {
                newBook.read = true;
            } else if (!this.checked) {
                newBook.read = false;
            }
        });
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

        cancelBtn.addEventListener('click', () => {
            tableBody.removeChild(formRow);
            delete library[newBook.id];
        });

        tableBody.appendChild(formRow);

        //Add Book To Library
        const newBook = new Book(document.getElementById('add-title').value, document.getElementById('add-author').value, document.getElementById('add-pages').value, bookId);
        bookId =+ 1;
        library.push(newBook);
        newBook.check()
    };
});

const sampleBtn = document.querySelector('.sample-btn');
sampleBtn.addEventListener('click', () => {
    const tableBody = document.querySelector('.table-body');
    const formRow = document.createElement('tr');

    const bookTitle = document.createElement('td');
    bookTitle.textContent = 'Pet Semetary';
    formRow.appendChild(bookTitle);

    const bookAuthor = document.createElement('td');
    bookAuthor.textContent = 'Stephen King';
    formRow.appendChild(bookAuthor);

    const bookPages = document.createElement('td');
    bookPages.textContent = 395;
    formRow.appendChild(bookPages);

    const bookRead = document.createElement('td');

    const addRead = document.createElement('input');
    addRead.setAttribute('type', 'checkbox');
    addRead.setAttribute('name', 'read-table');
    addRead.addEventListener('change', function() {
        if (this.checked) {
            newBook.read = true;
        } else if (!this.checked) {
            newBook.read = false;
        }
    });
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

    cancelBtn.addEventListener('click', () => {
        tableBody.removeChild(formRow);
        delete library[newBook.id];
    });

    tableBody.appendChild(formRow);

    //Add Book To Library
    const newBook = new Book('Pet Semetary', 'Stephen King', 395, bookId);
    bookId =+ 1;
    library.push(newBook);
    newBook.check()
});

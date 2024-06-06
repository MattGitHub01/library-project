let library = [];
// Library is a memory array for all entered books 
let readValue = false;
// readValue allows the checkbox to update each stored book object's .read property (true/false)
let bookId = 0;
// bookId is a property that more easily allows me to track and delete specific book instances without array index causing issues.

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
// Object constructor for user inputted book entries

const container = document.querySelector('.container');

const newBookBtn = document.querySelector('.add-btn');
newBookBtn.addEventListener('click', () => {
    const newBookForm = document.querySelector('.add-book-form');
    newBookForm.showModal();
});
// Brings up the modal form

const cancelBtn = document.querySelector('.reset-btn');
cancelBtn.addEventListener('click', () => {
    library = [];
});
// A second cancelBtn event listener that deletes the entire library array. Saves memory by adding less code to repeated instances of event listeners in added book objects.


const exitBtn = document.querySelector('.exit-btn');
exitBtn.addEventListener('click', () => {
    // Clears form input areas for next input
    document.getElementById('add-title').value = '';
    document.getElementById('add-author').value = '';
    document.getElementById('add-pages').value = '';
});
// Closes form and resets input data without submit button and bypasses required form input tags

const formSubmitBtn = document.querySelector('.form-submit');
// Below code handles user inputted books and changes book object values stored in library array
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
        // Creates an input field within the previous table data element
        const addRead = document.createElement('input');
        addRead.setAttribute('type', 'checkbox');
        addRead.setAttribute('name', 'read-table');
        // Changes the read attribute of each book object in the library array
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

        // Add Book To Library
        const newBook = new Book(document.getElementById('add-title').value, document.getElementById('add-author').value, document.getElementById('add-pages').value, bookId);
        bookId =+ 1;
        library.push(newBook);
        newBook.check()
    }
    // Clears form input areas for next input before form closes
    document.getElementById('add-title').value = '';
    document.getElementById('add-author').value = '';
    document.getElementById('add-pages').value = '';
});

const sampleBtn = document.querySelector('.sample-btn');
// Below creates sample data that mimics the user inputted data above 
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
    // Creates an input field within the previous table data element
    const addRead = document.createElement('input');
    addRead.setAttribute('type', 'checkbox');
    addRead.setAttribute('name', 'read-table');
    // Changes the read attribute of each book object in the library array
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

    // Add Book To Library
    const newBook = new Book('Pet Semetary', 'Stephen King', 395, bookId);
    bookId =+ 1;
    library.push(newBook);
    newBook.check()
});

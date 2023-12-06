const myLibrary = new Array();

class book {
    constructor (title, author, page, read) {
        this.title = title,
        this.author = author,
        this.page = page,
        this.read = read;
    }

}



const userEnterBook = document.querySelector('.userEnterBooks');

const book1 = new book('donaG', 'herzel', 256, 'no');
const book2 = new book('javascript', 'wimey', 256, 'yes');

myLibrary.push(book1, book2);

myLibrary.forEach(function(book) {
    addBookToLibrary(book);
});


function addBookToLibrary(book) {
        const tr = document.createElement('tr');

        const tdAuthor = document.createElement('td');
        const tdTitle = document.createElement('td');
        const tdPage = document.createElement('td');
        const tdRead = document.createElement('td');

        tdAuthor.textContent = book.author; 
        tdTitle.textContent = book.title;
        tdPage.textContent = book.page;
        tdRead.textContent = book.read;

        tr.appendChild(tdAuthor);
        tr.appendChild(tdTitle);
        tr.appendChild(tdPage);
        tr.appendChild(tdRead);

        userEnterBook.appendChild(tr);
    }

const addBookModalBtn = document.querySelector('.openModalDialog');
const addBookDialog = document.querySelector('.addBookDialog');
const addBookFromFormBtn = document.querySelector('dialog form button');

addBookModalBtn.addEventListener('click', ()=>{
    addBookDialog.showModal();
})

addBookFromFormBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const author = document.querySelector('#author');
    const title = document.querySelector('#title');
    const pages = document.querySelector('#pages');
    const read = document.querySelector('#read');

    const newBook = new book (author.value, title.value, pages.value, read.value);
    myLibrary.push(newBook);

    addBookToLibrary(newBook);
    
    addBookDialog.close();
 })

    
    






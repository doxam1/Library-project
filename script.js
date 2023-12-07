const myLibrary = new Array();

class book {
    constructor (title, author, page, read) {
        this.title = title,
        this.author = author,
        this.page = page,
        this.read = read;
    }

    readToggle() {
        this.read == 'no' ? this.read = 'yes' : this.read = 'no';
    }


}


const userEnterBook = document.querySelector('.userEnterBooks');

const book1 = new book('The Woman in Me', 'Britney Spears', 288, 'no');
const book2 = new book('The Art Of War', 'Sun Tzu', 68, 'yes');

myLibrary.push(book1, book2);

myLibrary.forEach(function(book) {
    addBookToLibrary(book);
});




function addBookToLibrary(book) {
        const tr = document.createElement('tr');

        const tdBtns = document.createElement('div');
        const delBtn = document.createElement('button');
        delBtn.classList.add('delBtn');
        delBtn.textContent = 'X';
        const editBtn = document.createElement('button');
        editBtn.classList.add('editBtn');
        editBtn.textContent = `${book.read == 'yes' ? "didn't read" : "did read"}`;
        
        tdBtns.append(delBtn, editBtn);

        const tdAuthor = document.createElement('td');
        const tdTitle = document.createElement('td');
        const tdPage = document.createElement('td');
        const tdRead = document.createElement('td');

        tdAuthor.textContent = book.author; 
        tdTitle.textContent = book.title;
        tdPage.textContent = book.page;
        tdRead.textContent = book.read;

        tr.appendChild(tdBtns);
        tr.appendChild(tdAuthor);
        tr.appendChild(tdTitle);
        tr.appendChild(tdPage);
        tr.appendChild(tdRead);
        userEnterBook.appendChild(tr);

        delBtn.addEventListener('click', ()=>{
            myLibrary.splice(myLibrary.findIndex(item => item.title == tdTitle.textContent), 1);
            tr.remove();
        })

        editBtn.addEventListener('click', ()=> {
            if (tdRead.textContent == 'no') {
                editBtn.textContent = "didn't read"
                myLibrary[(myLibrary.findIndex(item => item.title == tdTitle.textContent, 1))].readToggle();
                tdRead.textContent = 'yes';
            } else {
                editBtn.textContent = 'did read'
                tdRead.textContent = 'no';
                myLibrary[(myLibrary.findIndex(item => item.title == tdTitle.textContent, 1))].readToggle();
            }
        })
    }

const addBookModalBtn = document.querySelector('.openModalDialog');
const addBookDialog = document.querySelector('.addBookDialog');
const addBookFromFormBtn = document.querySelector('dialog form button');

addBookModalBtn.addEventListener('click', ()=>{
    addBookDialog.showModal();
})


const author = document.querySelector('#author');
const title = document.querySelector('#title');
const pages = document.querySelector('#pages');
const read = document.querySelector("input[name='read']:checked");

addBookFromFormBtn.addEventListener('click', (e) => {
    e.preventDefault()
    const read = document.querySelector("input[name='read']:checked");
   
    const newBook = new book (title.value, author.value, pages.value, read.value);
    myLibrary.push(newBook);

    addBookToLibrary(newBook);

    author.value = '';
    title.value = '';
    pages.value = '';
    
    addBookDialog.close();
 })

 const closeAddBookModal = document.querySelector('.closeAddBookModal');
 closeAddBookModal.onclick = (e) => {
    e.preventDefault();
    addBookDialog.close();
 }






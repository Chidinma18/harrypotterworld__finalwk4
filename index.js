// https://potterhead-api.vercel.app/api/books
// https://potterhead-api.vercel.app/api/houses
// https://potterhead-api.vercel.app/api/characters

const bookListEl = document.querySelector(".book-list");

async function main() {
    const books = await fetch("https://potterhead-api.vercel.app/api/books");
    const booksData = await books.json();
    bookListEl.innerHTML = booksData.map((book) => bookHTML(book)).join("");
}

main();

function showBookPlot(serial) {
    console.log(serial);
}

function bookHTML(book) {
    return `<div class="book-card" onclick="showBookPlot(${book.serial})">
    <div class="book-card__container">
      <h3>${book.title}</h3>
      <h5><b>Summary: </b> ${book.summary} </h5>
      <h5><b>Release Date: </b>${book.release_date}</h5>
      <h5><b>Pages: </b> ${book.pages} </h5>
      <h5><b>Wiki: </b> <a href="${book.wiki}" target="_blank">
      ${book.wiki} 
      </a></h5>
    </div>
</div>`;
};
// https://potterhead-api.vercel.app/api/books


async function main() {
    const books = await fetch("https://potterhead-api.vercel.app/api/books");
    const booksData = await books.json();
    const bookListEl = document.querySelector(".book-list");
    console.log(booksData);

    bookListEl.innerHTML = booksData
        .map(
            (book) => `<div class="book-card">
        <div class="book-card__container">
            <h3> ${book.title} </h3>
            <p><b>Cover</b> <img src="${book.cover} alt=""></a> </p>
            <h5><b>Summary: </b> ${book.summary} </h5>
            <h5><b>Release Date: </b>" ${book.release_date} "</h5>
            <h5><b>Pages: </b> ${book.pages} </h5>
            <h5><b>Wiki: </b> <a href=" ${book.wiki} " target="_blank"> ${book.wiki} </a></h5>
        </div>
    </div>`
    )
    .join("");
}


console.log(main());
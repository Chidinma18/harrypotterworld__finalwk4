// https://potterhead-api.vercel.app/api/books


async function main() {
    const books = await fetch("https://potterhead-api.vercel.app/api/books");
    const booksData = await books.json();

    const userListEl = document.querySelector(".book-list");
    userListEl.innerHTML = booksData
        .map(
            (books) => `<div class="book-card">
        <div class="book-card__container">
            <h3>Title</h3>
            <p><b>Cover</b><img src="https://website.website" alt=""></a></p>
            <h5><b>Summary: </b>" "</h5>
            <h5><b>Release Date: </b>" "</h5>
            <h5><b>Pages: </b>0-000</h5>
            <h5><b>Wiki: </b> <a href="https://website.website" target="_blank"></a>website</h5>
        </div>
    </div>`
    ).join("");
}


console.log(main());
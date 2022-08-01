function genBook(book) {
  const art = document.createElement("article");
  console.log(art);
  art.innerHTML = `
    <h1> Title: ${book.volumeInfo.title}</h1>
    <h2> Author: ${book.volumeInfo.authors}</h2>
    <section>
    <img src="${book.volumeInfo.imageLinks.thumbnail}"></img>
    <p>${book.volumeInfo.description.slice(0,300)}
    </p>
    </section>
    `;
  return art;
}

async function init(searchText) {
  try {
    const resultsElem = document.getElementById("results");
    const booksResp = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        searchText
      )}&maxResults=15`
    );
    const books = await booksResp.json();
    resultsElem.innerHTML='';
    books.items.forEach((element) => {
      resultsElem.appendChild(genBook(element));
    });
    console.log(books);
  } catch (err) {
    console.log("Error", err);
  } finally {
    console.log("Demo finished");
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const searchValue = document.getElementById("search").value;
  init(searchValue);
}

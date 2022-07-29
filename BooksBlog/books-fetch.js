function genBook(book) {
    const resultsElem = document.getElementById("results");
    const art = document.createElement("article");
    console.log(art);
    art.innerHTML =
    `
    <h1> Title: ${book.volumeInfo.title}</h1>
    <h2> Author: ${book.volumeInfo.authors}</h2>
    <section>
    <img src="${book.volumeInfo.imageLinks.thumbnail}"></img>
    <p>${book.volumeInfo.description.slice(0,500)}
    </p>
    </section>
    `
return art;
  }

  async function init() {
    try {
    const resultsElem = document.getElementById("results");
    const booksResp = await fetch("books-data.json")
    const books = await booksResp.json()
    books.items.forEach(element => {
        resultsElem.appendChild(genBook(element));
    });
    console.log(books);
  } catch(err) {
    console.log('Error', err);
  } finally{
    console.log('Demo finished')
  }
  }

  init();
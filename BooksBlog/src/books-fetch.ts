import { API_BASE_URL, BooksControler } from "./favourites-api-client.js";
import { Book } from "./google-books-api-types.js";

 export function genBook(book: Book) {
  const art = document.createElement("article");
  console.log(art);
  art.innerHTML = `
    <h1> Title: ${book.volumeInfo.title}</h1>
    <h2> Author: ${book.volumeInfo.authors}</h2>
    <section>
    <img src="${book.volumeInfo.imageLinks.thumbnail}"></img>
    <p>${book.volumeInfo.description.slice(0,300)}
    </p>
    <button id="favourites-button"> <i class="material-icons" style="font-size:36px">favorite</i></button>
    </section>
    `;
    
    
    const favouritesButton = art.querySelector("#favourites-button") as HTMLElement;
    favouritesButton.addEventListener("click", async () => {
       await BooksControler.addToFavourites(book);
    });
    
  return art;
}

export async function init(searchText: string) {
  try {
    const resultsElem = document.getElementById("results") as HTMLElement;
    const booksResp = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(
        searchText
      )}&maxResults=14`
    );
    const books = await booksResp.json();
    resultsElem.innerHTML='';
    books.items.forEach((element: Book) => {
      resultsElem.appendChild(genBook(element));
    });
    console.log(books);
  } catch (err) {
    console.log("Error", err);
  } finally {
    console.log("Demo finished");
  }
}

export function handleSubmit(event: SubmitEvent) {
  event.preventDefault();
  const searchValue = (document.getElementById("search")as HTMLInputElement)!.value;
  init(searchValue);
}

export async function initFavourites(searchText: string) {
  try {
    const resultsElem = document.getElementById("results") as HTMLElement;
    const booksResp = await fetch(
      API_BASE_URL
    );
    const books = await booksResp.json();
    resultsElem.innerHTML='';
    books.items.forEach((element: Book) => {
      resultsElem.appendChild(genBook(element));
    });
    console.log(books);
  } catch (err) {
    console.log("Error", err);
  } finally {
    console.log("Demo finished");
  }
}

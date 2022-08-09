import { genBook } from "./books-fetch.js";
import { API_BASE_URL } from "./favourites-api-client.js";
import { Book } from "./google-books-api-types.js";

export async function init() {
    try {
      const resultsElem = document.getElementById("results") as HTMLElement;
      const booksResp = await fetch(API_BASE_URL);
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

  init()
import { handleSubmit } from "./books-fetch.js";
import { BooksControler } from "./favourites-api-client.js";
import { Book } from "./google-books-api-types.js";

const favoriteBook:Book = BooksControler.addToFavourites;

const formSubmit = document.getElementById("searchForm") as HTMLFormElement;
formSubmit.addEventListener("submit", handleSubmit);

const favouritesButton = document.getElementById("favourites-button") as HTMLElement;
favouritesButton.addEventListener("click", favoriteBook);


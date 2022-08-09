import { handleSubmit } from "./books-fetch.js";

const formSubmit = document.getElementById("searchForm") as HTMLFormElement;
formSubmit.addEventListener("submit", handleSubmit);






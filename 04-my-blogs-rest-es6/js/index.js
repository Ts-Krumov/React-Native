import { getAllPosts } from "./blogs-api-client.js";

const postsSection = document.getElementById("posts");
const errorsDiv = document.getElementById("errors");


async function init() {
    try {
        const allPosts = await getAllPosts();
        showPosts(allPosts);
    } catch(err){
        showError(err);
    }
   
}

export function showError(err){
    errorsDiv.innerHTML = `<div>${err}</div>`;
}

export function showPosts(posts) {
    posts.forEach(post => addPost(post));
}

export function addPost(post){
    const postsElem = document.createElement('article');
    postsElem.className = "col s12 m6 l4";
    postsElem.innerHTML = `
    <div class="card">
    <div class="card-image waves-effect waves-block waves-light">
      <img class="activator" src="${post.imageUrl}">
    </div>
    <div class="card-content">
      <span class="card-title activator grey-text text-darken-4">${post.title}<i class="material-icons right">more_vert</i></span>
      <p>Author: ${post.author}, Tags:${post.tags ? post.tags.join(', ') : 'no tags'}</p>
    </div>
    <div class="card-reveal">
      <span class="card-title grey-text text-darken-4">${post.title}<i class="material-icons right">close</i></span>
      <p>${post.content}</p>
    </div>
    </div>
    `;
    postsSection.insertAdjacentElement("beforeend", postsElem);
}

init()
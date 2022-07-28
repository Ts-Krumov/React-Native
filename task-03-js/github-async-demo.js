async function init() {
  try {
  const resultsElem = document.getElementById("results");
  const usersResp = await fetch("users.json")
  const users = await usersResp.json()
  console.log(users);
      gitUsers = Promise.all(
        users.map(async user => {
           const gitUserResp = await fetch(`https://api.github.com/users/${user.username}`);
          return gitUserResp.json();
        })
      );
      console.log(gitUsers);
      const images = gitUsers.map((gitUser) => {
        const img = new Image();
        img.src = gitUser.avatar_url;
        resultsElem.insertAdjacentElement("beforeend", img);
        return img;
      });
      await new Promise((resolve, reject) => {
        setTimeout(resolve, 5000, images);
      });
      images.forEach((img) => resultsElem.removeChild(img));
  } catch(err) {
    console.log('Error:', err);
  } finally {
    console.log("Demo finished");
  }
}
init()
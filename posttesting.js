const listElement = document.querySelector(".posts");
const postTemplate = document.getElementById("single-post");
const form = document.querySelector("#new-post form");
const fetchButton = document.querySelector("#available-posts button");
const postList = document.querySelector("ul");

async function fetchPosts() {
  try {
    const response = await axios.get(
      "https://qiencheetopuff.github.io/posts.json"
    );

    console.log(response);
    const listOfPosts = response.data;
    for (const post of listOfPosts) {
      const postEl = document.importNode(postTemplate.content, true);
      postEl.querySelector("li").id = post.id;
      postEl.querySelector("h2").textContent = post.title.toUpperCase();
      postEl.querySelector("p").textContent = post.body;
      listElement.append(postEl);
    }
  } catch (error) {
    alert(error.message);
  }
}

fetchButton.addEventListener("click", fetchPosts);

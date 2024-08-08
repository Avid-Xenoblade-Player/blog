document.addEventListener("DOMContentLoaded", function () {
  const contentDiv = document.getElementById("content");

  // Function to load a blog post
  function loadBlogPost(filename) {
    fetch(`blog-posts/${filename}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Error fetching ${filename}: ${response.statusText}`);
        }
        return response.text();
      })
      .then((data) => {
        const postElement = document.createElement("div");
        postElement.className = "post";
        postElement.innerHTML = data; // Use innerHTML to render HTML tags
        contentDiv.appendChild(postElement);
      })
      .catch((error) => console.error("Error loading blog post:", error));
  }

  // Fetch the list of blog posts from the server
  fetch("/api/posts")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error fetching posts list: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Fetched posts:", data.posts); // Debug log
      data.posts.forEach(loadBlogPost);
    })
    .catch((error) => console.error("Error loading posts list:", error));
});

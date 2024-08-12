const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;
const BLOG_POSTS_DIR = path.join(__dirname, "blog-posts");

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, "public")));

const allowedFileExtensions = ['.txt', '.md', '.html']; // Ta-da! This defines the allowed file types. It lets me display .txt, .html, and .md. I wanted to add .jpeg and .png but it took too long to decode so nah. 
// I also put in .md, just in case.

// Endpoint to get the list of blog posts
app.get("/api/posts", (req, res) => {
  fs.readdir(BLOG_POSTS_DIR, (err, files) => {
    if (err) {
      res.status(500).json({ error: "Failed to read blog posts directory" });
      return;
    }
    const filteredFiles = files
      .filter((file) => allowedFileExtensions.includes(path.extname(file)))
      .sort();
    res.json({ posts: filteredFiles });
    console.log(filteredFiles);
  });
});

// Serve the blog posts
app.get("/blog-posts/:filename", (req, res) => {
  const filePath = path.join(BLOG_POSTS_DIR, req.params.filename);
  const extname = path.extname(filePath);

  // Sets appropriate content-type header based on file extension
  const contentTypeMap = {
    '.txt': 'text/plain',
    '.md': 'text/markdown',
    '.html': 'text/html'
    // If I need more types, I add it here.
  };

  res.set('Content-Type', contentTypeMap[extname] || 'application/octet-stream'); // Default to octet-stream

  res.sendFile(filePath, (err) => {
    if (err) {
      res.status(404).send("File not found");
    }
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

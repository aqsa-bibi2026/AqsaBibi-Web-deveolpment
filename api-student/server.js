const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("Home Page");
});

// Books Data
const books = [
    { id: 1, title: "JavaScript", author: "Ali" },
    { id: 2, title: "Node.js", author: "Ahmed" }
];

app.get("/books", (req, res) => {
    res.json(books);
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
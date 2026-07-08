const express = require("express");

const logger = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const notFound = require("./middleware/notFound");

const app = express();

app.use(express.json());
app.use(logger);

app.get("/", (req, res) => {
    res.send("Welcome to Middleware Project");
});

app.get("/user", (req, res) => {
    res.json({
        name: "Aqsa",
        semester: "4th"
    });
});

app.get("/error", (req, res, next) => {
    next(new Error("Something Went Wrong"));
});

app.use(notFound);
app.use(errorHandler);

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
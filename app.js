const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const postControllers = require("./controllers/postControllers");
const pageControllers = require("./controllers/pageControllers");

const app = express();
mongoose
  .connect(
    'mongodb+srv://onurkoc:KODV0sr95W8z8r33@cluster0.d6cuxty.mongodb.net/?retryWrites=true&w=majority'
  )
  .then(() => {
    console.log("Database connected.");
  })
  .catch((err) => {
    console.log(err);
  });
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride("_method", {
    methods: ["POST", "GET"],
  })
);

// ROUTES

app.get("/", postControllers.getPosts);
app.get("/about", pageControllers.getAbout);
app.get("/add_post", pageControllers.addPost);
app.get("/post/:id", postControllers.getPostPage);
app.get("/post/edit/:id", postControllers.getUpdatePage);
app.post("/blogs", postControllers.createPost);
app.delete("/post/:id", postControllers.deletePost);
app.put("/post/:id", postControllers.updatePost);

// PORT

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Sunucu ${port} ile başlatıldı.`);
});

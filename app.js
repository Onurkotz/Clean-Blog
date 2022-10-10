const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");
const methodOverride = require("method-override");

const postControllers = require("./controllers/postControllers");
const pageControllers = require("./controllers/pageControllers");

const app = express();
mongoose.connect("mongodb://localhost/blog-data-test");
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
app.get("/add_post", postControllers.addPost);
app.post("/blogs", postControllers.createPost);
app.get("/post/:id", postControllers.getPostPage);
app.delete("/post/:id", postControllers.deletePost);
app.get("/post/edit/:id", postControllers.getUpdatePage);
app.put("/post/:id", postControllers.updatePost);

// PORT

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} ile başlatıldı.`);
});

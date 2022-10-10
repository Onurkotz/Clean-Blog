const express = require("express");
const bodyParser = require('body-parser');
const ejs = require("ejs");
const mongoose = require('mongoose');

const postControllers = require("./controllers/postControllers");
const pageControllers = require("./controllers/pageControllers");

const app = express();
mongoose.connect("mongodb://localhost/blog-data-test");
app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES

app.get('/', postControllers.getPosts);
app.get('/about', pageControllers.getAbout);
app.get('/add_post', postControllers.addPost);
app.post('/blogs', postControllers.createPost);

// PORT

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} ile başlatıldı.`);
});

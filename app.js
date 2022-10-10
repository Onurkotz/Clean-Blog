const express = require("express");
const ejs = require("ejs");
const mongoose = require('mongoose');

const postControllers = require("./controllers/postControllers");
const pageControllers = require("./controllers/pageControllers");

const app = express();

app.set("view engine", "ejs");

// MIDDLEWARES
app.use(express.static("public"));

// ROUTES

app.get('/', postControllers.getPosts);
app.get('/about', pageControllers.getAbout);
app.get('/add_post', postControllers.addPost);

// PORT

const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} ile başlatıldı.`);
});

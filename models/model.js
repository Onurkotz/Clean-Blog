const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/blog-data-test");

const BlogSchema = new Schema({
  title: String,
  message: String,
});

const Blog = mongoose.model('blog', BlogSchema);


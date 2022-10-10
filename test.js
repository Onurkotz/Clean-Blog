const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/blog-data-test");

const BlogSchema = new Schema({
  title: String,
  message: String,
});

const Blog = mongoose.model("Blog", BlogSchema);

Blog.create(
  {
    title: "Onur",
    message: "Koç",
  },
  () => {
    console.log("Data created.");
  }
);

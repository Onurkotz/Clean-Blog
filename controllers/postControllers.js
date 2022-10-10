const Blog = require("../models/Blog");

exports.getPosts = async (req, res) => {
  const blogs = await Blog.find({}).sort("-dateCreated");
  res.render("index", {
    blogs,
  });
};

exports.addPost = async (req, res) => {
  await res.render("add_post");
};

exports.createPost = async (req, res) => {
  await Blog.create(req.body);
  res.redirect("/");
};

exports.getPostPage = async (req, res) => {
  const postID = await Blog.findById(req.params.id);
  res.render("post", {
    blog: postID,
  });
};

exports.deletePost = async (req, res) => {
  await Blog.findByIdAndRemove(req.params.id);
  res.redirect("/");
};

const Blog = require("../models/Blog");

exports.getPosts = async (req, res) => {
  const blogs = await Blog.find({}).sort("-dateCreated");
  res.render("index", {
    blogs,
  });
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

exports.getUpdatePage = async (req, res) => {
  const postID = await Blog.findOne({ _id: req.params.id });
  res.render("edit", {
    post: postID,
  });
};

exports.updatePost = async (req, res) => {
  const postUp = await Blog.findOne({ _id: req.params.id });
  postUp.title = req.body.title;
  postUp.message = req.body.message;
  postUp.save();
  res.redirect(`/`);
};

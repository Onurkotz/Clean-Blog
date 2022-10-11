exports.getAbout = (req, res) => {
  res.render("about");
};

exports.addPost = async (req, res) => {
  await res.render("add_post");
};

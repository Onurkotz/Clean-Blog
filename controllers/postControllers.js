exports.getPosts = async (req, res) => {
  await res.render("index");
};

exports.addPost = async (req, res) => {
  await res.render("add_post");
};

const { Post } = require('../../models');

const getPosts = async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
};

module.exports = {
  getPosts,
};

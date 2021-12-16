const { Post, User } = require('../../models');

const getPosts = async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
};

const createPost = async (req, res) => {
  const {
    title,
    content,
    category,
  } = req.body;

  try {
    // 테스트를 위해 유저 데이터를 임시로 특정
    const user = await User.findOne({ nickname: 'CH' });
    const post = await Post.create({
      title,
      content,
      author: user,
      category,
    });
    res.status(201).json(post);
  } catch (error) {
    res.status(500).send(error);
  }
};

const deletePost = async (req, res) => {
  const { id } = req.params;

  const post = await Post.deleteOne({ _id: id });

  if (!post) res.status(404).end();

  res.send(204);
};

module.exports = {
  getPosts,
  createPost,
  deletePost,
};

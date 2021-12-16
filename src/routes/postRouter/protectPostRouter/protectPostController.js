const { Post, User } = require("../../../models");

const getPosts = async (req, res) => {
  const posts = await Post.find({});
  res.json(posts);
};

const getPostDetail = async (req, res) => {
  const { id } = req.params;

  const post = await Post.findOne({ _id: id });

  if (!post) res.status(404).end();

  res.json(post);
};

const createPost = async (req, res) => {
  const { title, content, category } = req.body;

  try {
    // 테스트를 위해 유저 데이터를 임시로 특정
    const user = await User.findOne({ nickname: "CH" });
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

  // 추후에 요청자와 post 작성자가 일치하는지 검증하는 로직 추가해야 함

  const post = await Post.deleteOne({ _id: id });

  if (!post) res.status(404).end();

  res.send(204);
};

const updatePost = async (req, res) => {
  const { id } = req.params;

  const { title, content, category } = req.body;

  if (!title || !content || !category) {
    res.status(400).end();
  }

  // 추후에 요청자와 post 작성자가 일치하는지 검증하는 로직 추가해야 함

  const post = await Post.updateOne(
    { _id: id },
    {
      title,
      content,
      category,
    }
  );

  if (!post) res.status(404).end();

  res.json(post);
};

module.exports = {
  getPosts,
  getPostDetail,
  createPost,
  deletePost,
  updatePost,
};

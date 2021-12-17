const {
  User,
  Post,
  Comment,
  ReComment,
} = require('../../models');

// 프론트에서 API 응답에 따라 html tag 속성으로 comment의 id가 포함되게 댓글을 그려주고,
// 추후 댓글 수정이나 삭제 요청 시 해당 속성으로 id값을 불러와 API 요청을 할 수 있도록
// 하는 것이 좋은 구현 방식일지...
const createComment = async (req, res) => {
  const {
    params: { id },
    body: { content },
    // user, // 실제 환경에선 req.user로 댓글을 생성
  } = req;

  try {
    const user = await User.findOne({ nickname: 'CH' });
    const post = await Post.findOne({ _id: id });

    // 댓글 생성
    const newComment = await Comment.create({
      content,
      author: user.id,
      parentPost: post.id,
    });
    // 포스트에 댓글 추가
    post.comments.push(newComment);
    post.save();

    // 테스트를 위해 우선 포스트 객체를 반환하도록 설정
    res.json(post);
  } catch (error) {
    res.status(400);
  }
};

const deleteComment = async (req, res) => {
  const {
    params: { id },
    // user, // 실제 환경에선 req.user 필요
  } = req;

  try {
    // 임시로 유저 확정
    const user = await User.findOne({ nickname: 'CH' });

    // 댓글 삭제
    const comment = await Comment.findOne({ _id: id })
      .populate('author')
      .populate('parentPost');

    const { author, parentPost } = comment;

    if (user.id !== author.id) return res.status(401).end();

    await Comment.deleteOne({ _id: id });
    // 포스트에 포함된 댓글 삭제
    const post = await Post.findOne({ _id: parentPost.id })
      .populate('comments');

    const newComments = post.comments.filter((item) => item.id !== id);

    post.comments = newComments;
    post.save();

    res.status(204).end();
  } catch (error) {
    res.status(400).end();
  }
};

const updateComment = async (req, res) => {
  const {
    params: { id },
    body: {
      content,
    },
    // user, // 실제 환경에선 req.user 필요
  } = req;

  try {
    // 임시로 유저 확정
    const user = await User.findOne({ nickname: 'CH' });

    // 댓글 수정
    const comment = await Comment.findOne({ _id: id })
      .populate('author')
      .populate('parentPost');

    const { author, parentPost } = comment;

    if (user.id !== author.id) return res.status(401).end();

    await Comment.updateOne({ _id: id }, { content });

    // 포스트에 포함된 댓글 수정
    const post = await Post.findOne({ _id: parentPost.id })
      .populate('comments');

    const updatedComment = post.comments.find((item) => item.id === id);

    updatedComment.content = content;

    post.save();

    res.status(201).end();
  } catch (error) {
    res.status(400).end();
  }
};

const createReComment = async (req, res) => {
  const {
    params: { id },
    body: { content },
    // user, // 실제 환경에선 req.user로 댓글을 생성
  } = req;

  try {
    const user = await User.findOne({ nickname: 'CH' });
    const comment = await Comment.findOne({ _id: id })
      .populate('parentPost');

    // 대댓글 생성
    const newReComment = await ReComment.create({
      content,
      author: user.id,
      parentComment: comment.id,
    });

    // 댓글에 대댓글 추가
    comment.reComments.push(newReComment);
    comment.save();

    const { parentPost } = comment;

    // 포스트에 대댓글 추가
    const post = await Post.findOne({ _id: parentPost.id })
      .populate('comments');
    const updatedComment = post.comments
      .find((item) => item.id === comment.id);

    updatedComment.reComments.push(newReComment);
    post.save();

    // 테스트를 위해 우선 포스트 객체를 반환하도록 설정
    res.json(post);
  } catch (error) {
    res.status(400);
  }
};

const deleteReComment = async (req, res) => {
  const {
    params: { id },
    // user, // 실제 환경에선 req.user 필요
  } = req;

  try {
    // 임시로 유저 확정
    const user = await User.findOne({ nickname: 'CH' });

    // 대댓글 삭제
    const reComment = await ReComment.findOne({ _id: id })
      .populate('author')
      .populate('parentComment');

    const { author, parentComment } = reComment;

    if (user.id !== author.id) return res.status(401).end();

    await ReComment.deleteOne({ _id: id });

    // 댓글에 포함된 대댓글 삭제
    const comment = await Comment.findOne({ _id: parentComment.id })
      .populate('reComments')
      .populate('parentPost');

    const newReComments = comment.reComments.filter((item) => item.id !== id);

    comment.reComments = newReComments;
    comment.save();

    const { parentPost } = comment;

    // 포스트에서 대댓글 삭제
    const post = await Post.findOne({ _id: parentPost.id })
      .populate('comments');

    const updatedComment = post.comments
      .find((item) => item.id === comment.id);

    updatedComment.reComments = newReComments;
    post.save();

    res.status(204).end();
  } catch (error) {
    res.status(400).end();
  }
};

const updateReComment = async (req, res) => {
  const {
    params: { id },
    body: {
      content,
    },
    // user, // 실제 환경에선 req.user 필요
  } = req;

  try {
    // 임시로 유저 확정
    const user = await User.findOne({ nickname: 'CH' });

    // 대댓글 수정
    const reComment = await ReComment.findOne({ _id: id })
      .populate('author')
      .populate('parentComment');

    const { author, parentComment } = reComment;

    if (user.id !== author.id) return res.status(401).end();

    await ReComment.updateOne({ _id: id }, { content });

    // 댓글에 포함된 대댓글 수정
    const comment = await Comment.findOne({ _id: parentComment.id })
      .populate('reComments')
      .populate('parentPost');

    const updatedReComment = comment.reComments.find((item) => item.id === id);

    updatedReComment.content = content;

    comment.save();

    const { parentPost } = comment;

    // 포스트에 포함된 대댓글 수정
    const post = await Post.findOne({ _id: parentPost.id })
      .populate('comments');

    const updatedComment = post.comments
      .find((item) => item.id === comment.id);

    const updatedPostReComment = updatedComment.reComments
      .find((item) => item.id === id);

    updatedPostReComment.content = content;

    post.save();

    res.status(201).end();
  } catch (error) {
    res.status(400).end();
  }
};

module.exports = {
  createComment,
  deleteComment,
  updateComment,
  createReComment,
  deleteReComment,
  updateReComment,
};

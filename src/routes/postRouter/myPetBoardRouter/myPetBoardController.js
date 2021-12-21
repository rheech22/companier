const { Post } = require('../../../models');

// 근황 게시판 페이지
const getPosts = async (req, res) => {
  try {
    const page = Number(req.query.page || 1); // url 쿼리에서 page 받기, 기본값 1
    const perPage = Number(req.query.perPage || 12); // url 쿼리에서 peRage 받기, 기본값 12

    const [total, posts] = await Promise.all([
      Post.countDocuments({}),
      Post.find({})
        .sort({ createdAt: -1 })
        .skip(perPage * (page - 1))
        .limit(perPage)
        .populate('author'),
    ]);

    const totalPage = Math.ceil(total / perPage);

    res.render('myPetBoard.html', {
      isLogined: req.isLoggedIn,
      posts,
      page,
      perPage,
      totalPage,
    });
  } catch (error) {
    res.status(500).redirect('/');
  }
};

// 게시물(상세) 페이지
const getPostDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findOne({ _id: id }).populate('author');

    if (!post) res.status(404).end();

    res.render('myPetBoardDetail.html', {
      isLogined: req.isLoggedIn,
      data: post,
    });
  } catch (error) {
    res.status(500).redirect('/');
  }
};

module.exports = {
  getPosts,
  getPostDetail,
};

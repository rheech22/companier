const { Post } = require("../../../models");

// 근황 게시판 페이지
const getPosts = async (req, res) => {
  try {
    const { query } = req;

    const page = Number(query.page || 1); // url 쿼리에서 page 받기, 기본값 1
    const perPage = Number(query.perPage || 15); // url 쿼리에서 peRage 받기, 기본값 15
    const title = query.title || "";
    const content = query.content || "";

    const titleSearch = {
      title: {
        $regex: query.title || /^(?![\s\S])/,
        $options: "i",
      },
    };

    const contentSearch = {
      content: {
        $regex: query.content || /^(?![\s\S])/,
        $options: "i",
      },
    };

    const searchConditions = {
      $or: [titleSearch, contentSearch],
    };

    if (!query.title && !query.content) searchConditions.$or = [{}];

    const [total, posts] = await Promise.all([
      Post.countDocuments(searchConditions),
      Post.find(searchConditions)
        .sort({ createdAt: -1 })
        .skip(perPage * (page - 1))
        .limit(perPage)
        .populate("author"),
    ]);

    const totalPage = Math.ceil(total / perPage);

    return res.render("myPetBoard.html", {
      isLogined: req.isLoggedIn,
      posts,
      page,
      perPage,
      totalPage,
      title,
      content,
    });
  } catch (error) {
    res.status(500).redirect("/");
  }
};

// 게시물(상세) 페이지
const getPostDetail = async (req, res) => {
  try {
    const { id } = req.params;

    const post = await Post.findOne({ _id: id }).populate("author");

    if (!post) res.status(404).end();

    post.views += 1;

    post.save();

    return res.render("myPetBoardDetail.html", {
      isLogined: req.isLoggedIn,
      data: post,
    });
  } catch (error) {
    return res.status(500).redirect("/");
  }
};

const getWritePage = (req, res) => {
  try {
    return res.render("editorPage.html");
  } catch (error) {
    console.log(error);
    return res.status(500).redirect("/");
  }
};

module.exports = {
  getPosts,
  getPostDetail,
  getWritePage,
};

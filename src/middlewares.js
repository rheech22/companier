const isLoggedIn = (req, res, next) => {
  const { session } = req;

  if (!session.kakao) {
    res.status(401).redirect("/login");
  }

  next();
};

const setLoggedInStatus = (req, res, next) => {
  const { session } = req;

  if (!session.kakao) {
    req.isLoggedIn = false;
  } else {
    req.isLoggedIn = true;
  }

  next();
};

module.exports = {
  isLoggedIn,
  setLoggedInStatus,
};

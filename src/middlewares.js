const path = require('path');

const multer = require('multer');

const isLoggedIn = (req, res, next) => {
  const { session } = req;

  if (!session.kakao) {
    res.status(401).redirect('/login');
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

const uploadImages = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      cb(null, 'src/uploads/imgs');
    },
    filename(req, file, cb) {
      const ext = path.extname(file.originalname);
      // console.log('file.originalname', file.originalname);
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
});

module.exports = {
  isLoggedIn,
  setLoggedInStatus,
  uploadImages,
};

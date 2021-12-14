const { Router } = require('express');

const router = Router();

// 템플릿 engine 저장 안한 경로: C:\Users\(사용자명)\Desktop\teamProject\project-template\routes
router.get('/', (req, res) => {
  res.render('index.html'); // views/index.html 파일을 렌더링
});

module.exports = router;

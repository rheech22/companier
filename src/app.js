const express = require('express');

const morgan = require('morgan');
const bodyParser = require('body-parser');

// 라우터 목록
const indexRouter = require('./routes/indexRouter');

const app = express();
// view 경로 설정
app.set('views', `${__dirname}/views`);

// 화면 구성 엔진을 ejs로 설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// 라우터 추가하기
app.use('/', indexRouter);

module.exports = app;

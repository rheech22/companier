const mongoose = require('mongoose');

// URL은 임시로 설정
const MONGO_URL = 'mongodb://localhost:27017';

mongoose.connect(MONGO_URL);

const db = mongoose.connection;

const handleConnectionOpen = () => console.log('Connected to DB');

const handleConnectionError = (error) => {
  console.log(`Error on DB Connections:${error}`);
};

db.once('open', handleConnectionOpen);
db.on('error', handleConnectionError);

module.exports = db;

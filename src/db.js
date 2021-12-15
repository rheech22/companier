const mongoose = require('mongoose');

const MONGO_URL = 'mongodb+srv://elice:1234@cluster0.09ff0.mongodb.net/elice?retryWrites=true&w=majority';

mongoose.connect(MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

const handleConnectionOpen = () => {
  console.log('Connected to DB');
  console.log(db);
};

const handleConnectionError = (error) => {
  console.log(`Error on DB Connections:${error}`);
};

db.once('open', handleConnectionOpen);
db.on('error', handleConnectionError);

module.exports = db;

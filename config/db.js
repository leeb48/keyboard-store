const mongoose = require('mongoose');
const config = require('config');

const connectDB = async () => {
  try {
    await mongoose.connect(config.get('DB.URI'), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });

    console.log('DB Connected');
  } catch (err) {
    console.log(err);
  }
};

module.exports = connectDB;

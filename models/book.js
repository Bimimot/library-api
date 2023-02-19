const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  author: {
    type: String,
    required: false,
    minlength: 2,
    maxlength: 256,
  },
  title: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1024,
  },
  image: {
      type: String, // гендер — это строка
      require: false,
  },
}); 

module.exports = mongoose.model("book", bookSchema); 
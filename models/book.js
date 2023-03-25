const mongoose = require("mongoose");

// const ageSchema = new mongoose.Schema(enum: '0-3', '2-6', '5-10', '8-14', '12-16');
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
  description: {
    type: String,
    required: true,
    minlength: 1,
    maxlength: 1024,
  },
  image: {
    type: String,
    require: false,
  },
  tags: {
    type: [String],
    requred: false,
  },
  ages: {
    type: [String],
    required: false,
  },
}); 

module.exports = mongoose.model("book", bookSchema); 
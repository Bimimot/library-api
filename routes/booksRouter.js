const router = require("express").Router();
const { celebrate, Joi } = require("celebrate");
const { getBooks, postBook } = require("../controllers/books");

router.get("/", getBooks);

router.post(
  "/",
  celebrate({
    body: Joi.object().keys({
      author: Joi.string().min(2).max(256),
      title: Joi.string().required().min(1).max(256),
      description: Joi.string().required().min(1).max(1024),
      image: Joi.string(),
    }),
  }),
  postCard
); // вызываем метод добавлени карточки

module.exports = router;

//   author: {
//     type: String,
//     required: false,
//     minlength: 2,
//     maxlength: 256,
//   },
//   title: {
//     type: String,
//     required: true,
//     minlength: 1,
//     maxlength: 1024,
//   },
//   description: {
//     type: String,
//     required: true,
//     minlength: 1,
//     maxlength: 1024,
//   },
//   image: {
//     type: String,
//     require: false,
//   },
//   tags: {
//     type: [String],
//     requred: false,
//   },
//   ages: {
//     type: [String],
//     required: false,
//   }

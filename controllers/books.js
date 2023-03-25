const Book = require("../models/book");

module.exports.getBooks = (req, res) => {
  Book.find({})
    .then((books) => res.send({ books }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};

module.exports.postBook = (req, res, next) => {
  // const owner = req.user; // берем id, полученный из милдверы авторизации
  Card.create(req.body)
    .then((book) => res.send({ message: 'Добавлена книга', data: book }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
    // .catch(next);
};

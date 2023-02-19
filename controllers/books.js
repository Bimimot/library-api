const Book = require("../models/book");

module.exports.getBooks = (req, res) => {
  Book.find({})
    .then((books) => res.send({ books }))
    .catch((err) => res.status(500).send({ message: "Произошла ошибка" }));
};

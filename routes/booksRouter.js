const router = require("express").Router();
const { getBooks } = require("../controllers/books");

router.get("/", getBooks);

module.exports = router;

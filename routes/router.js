const router = require("express").Router(); 
const { books } = require("../data/db.js"); 

router.get("/books", (req, res) => {

  res.send(JSON.stringify(books));
});

module.exports = router;

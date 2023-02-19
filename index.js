const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { PORT = 3010 } = process.env;

const app = express();
mongoose.connect("mongodb://localhost:27017/blizko");

const booksRouter = require("./routes/booksRouter");

const whitelist = [
  "http://localhost:3000",
]; // cors list

const corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};



app.use(cors(corsOptions)); 
app.use('/books', booksRouter);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
}); 
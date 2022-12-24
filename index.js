const express = require("express");
const cors = require("cors");
const router = require("./routes/router.js");
const { PORT = 3010 } = process.env;

const app = express();

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
app.use('/', router);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
}); 
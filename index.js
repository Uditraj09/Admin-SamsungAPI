const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.json());
const path = require("path");
const env = require("dotenv");
const md5 = require("md5");
const db = require("./models")
env.config();
app.use(express.json());
const imgUpload = db.images;
const dotenv = require("dotenv");
dotenv.config();
app.use(express.static("images"));
app.use(cors());
app.use(bodyParser.json());
const port = 5000;
const multer = require("multer");

app.get("/", (req, res) => {
    res.send({ message: "server is running!" });
  });
  
// const formidable = require("express-formidable");
// app.use(formidable());
db.mongoose
  .connect(db.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to Database!");
  })
  .catch((err) => {
    console.log("Can't Connect to Databse!", err);
    process.exit();
  });

require("./routes.js/uploadimg.routes")(app);



app.listen(port, () => {
  console.log(`Server is Listening on ${port}`);
});
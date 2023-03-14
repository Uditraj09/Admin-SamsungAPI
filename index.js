const express = require("express");
// const admin = require("firebase-admin");
const config = require("./config/db.config");
// const bodyParser = require("body-parser"); / deprecated /
const cors = require("cors");
const bodyParser = require("body-parser");

const dotenv = require("dotenv");
dotenv.config();

const app = express();
const server = require("http").createServer(app);

var corsOptions = {
  origin: "*",
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept']
};

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json()); / bodyParser.json() is deprecated /

app.use(express.static("public"));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(
  express.urlencoded({ extended: true })
); / bodyParser.urlencoded() is deprecated /

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send({ message: "server is running!" });
  });
  
// const formidable = require("express-formidable");
// app.use(formidable());
const db = require("./models");
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

const port = 5000;

app.listen(port, () => {
  console.log(`Server is Listening on ${port}`);
});
require("dotenv").config();
const express = require("express");
// body-parser module required to read data from forms
const bodyParser = require("body-parser");
const router = express.Router();
const cors = require("cors");
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

app.use("/public", express.static(`${process.cwd()}/public`));

// Route to capture input from the form
app.post(
  "/search",
  bodyParser.urlencoded({ extended: false }),
  (req, res, next) => {
    console.log(req.body);
    // res.send(req.body);
    // res.json(req.body);
    res.json({ original_url: req.body.url });
  }
);

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

require("dotenv").config();
const express = require("express");
// body-parser module required to read data from forms
const bodyParser = require("body-parser");

// mongoose required to connect to mongodb
const mongoose = require("mongoose");
// REMOVE THIS BEFORE PUBLISHING
let mongo_uri =
  "mongodb+srv://user1:X8qC23CPS1V4wxJe@cluster0.dsq4e.mongodb.net/test?retryWrites=true&w=majority";
mongoose.connect(mongo_uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const router = express.Router();
const cors = require("cors");
const app = express();

// Basic Configuration
const port = process.env.PORT || 3000;

app.use(cors());

// mongodb schema
// (it probably makes sense to create an app.js moving forward if I have this much going on unrelated to the server running)
let urlSchema = new mongoose.Schema({
  long_url: { type: String, required: true },
  short_url: String
});

// a url is a single instance of a urlSchema; this declares the url model
let url = mongoose.model("url", urlSchema);

app.use("/public", express.static(`${process.cwd()}/public`));

// functionality
// we can have each submission generate a hash which corresponds to a mongodb _id
// then when we want to retrieve that link, use the calculated hash value

// Route to capture input from the form
app.post(
  "/api/shorturl/new",
  bodyParser.urlencoded({ extended: false }),
  (req, res, next) => {
    // retrieve data from page
    let long_url = req.body.url;

    // instantiate a url document(object)
    let website = new url({ long_url: long_url });

    // save document to database
    // .save() is deprecated; here we use .insertOne()
    // test is the name of the collection
    website.save((err, site) => {
      if (err) {
        res.status(400).send("internal server error");
      }
      else {
        res.status(200).json({
      original_url: req.body.url,
      short_url: "short url will go here"
    });
        
      }
    })
   

    // retrieve object id

    // generate short url and save to database

   
  }
);

app.get("/", function(req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});

// example of creating a url instance
// let website1 = new url({long_url: "https://google.com", short_url: })

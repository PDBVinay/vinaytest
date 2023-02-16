const dotenv = require("dotenv");
dotenv.config();

const dboperations = require("./dboperations");

var express = require("express");

var cors = require("cors");
const { response, request } = require("express");
var app = express();
var router = express.Router();

app.use(cors());
app.use("/api", router);

router.route("/getCheckUser").get((request, response) => {
  dboperations.getCheckUser().then((result) => {
    // console.log(result);
    response.json(result);
  });
});

var port = process.env.PORT || 4000;

app.listen(port);
console.log("Demand API is running at + " + port);

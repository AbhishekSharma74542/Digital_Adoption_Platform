// Imports
const express = require("express");
const cors = require("cors");
const app = express();
app.options("*", cors()); // include before other routes
app.use(cors());

const port = 3000;

// Static Files
app.use(express.static("public"));
app.use("/css", cors(), express.static(__dirname + "public/css"));
app.use("/js", cors(), express.static(__dirname + "public/js"));
app.use("/img", cors(), express.static(__dirname + "public/img"));

// Set Views
app.set("views", "./views");
app.set("view engine", "ejs");

app.get("", cors(), (req, res) => {
  res.render("index", { text: "This is EJS" });
});

app.get("/about", cors(), (req, res) => {
  res.render("about", { text: "About Page" });
});

//  Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`));

require("dotenv").config();
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const { connectDB } = require("./db/dbConnect");
const routes = require("./routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const app = express();
const path = require("path");
const { itemsService } = require("./services");

const options = {
  origin: "*",
};
app.use(cors(options));

//body
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//cookies
app.use(cookieParser());

//routes
app.use("/v1", routes);

//ejs
app.set("view engine", "ejs");

/* pages */
/* index */
app.get("/", (req, res) => {
  res.render("./index.ejs");
});

/* register */
app.get("/signup", (req, res) => {
  res.render("./signup.ejs");
});

/* login */
app.get("/login", (req, res) => {
  res.render("./login.ejs");
});

/* Add Menu */
app.get("/addmenu", (req, res) => {
  res.render("./addmenu.ejs");
});

app.get("/showenu", async (req, res) => {
    let items = await itemsService.getAllItems();
    console.log(items);  
    res.render("showenu", { items: items });
});



//DB connect
connectDB();

//server
http.createServer(app).listen(process.env.PORT, () => {
  console.log("server start");
});

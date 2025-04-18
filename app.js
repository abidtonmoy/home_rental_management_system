//declaration
var express = require("express");
var login = require("./controllers/login");
var search = require("./controllers/search");
var logout = require("./controllers/logout");
var signup = require("./controllers/signup");
var admin = require("./controllers/admin/admin");
var manager = require("./controllers/manager/manager");
var customer = require("./controllers/customer/customer");
var houseprovider = require("./controllers/houseprovider/houseprovider");
var ejs = require("ejs");
var bodyParser = require("body-parser");
var app = express();
var cookieParser = require("cookie-parser");
//configuration
app.set("view engine", "ejs");

//middleware
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(cookieParser());

//app.use(bodyParser());
app.use("/css", express.static("css"));
app.use("/fonts", express.static("fonts"));
app.use("/images", express.static("images"));
app.use("/js", express.static("js"));
app.use("/scss", express.static("scss"));
app.use("/login", login);
app.use("/signup", signup);
app.use("/admin", admin);
app.use("/manager", manager);
app.use("/customer", customer);
app.use("/houseprovider", houseprovider);
app.use("/logout", logout);
app.use("/search", search);

//routes
app.get("/", function (req, res) {
  res.render("welcome/index");
});

//server startup
app.listen(3000, function () {
  console.log("node server started at 3000!");
});

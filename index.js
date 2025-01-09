const express = require("express");
const cookieParser = require("cookie-parser");
const app = express();
const path = require("path");
const urlRoutes = require("./routes/urlRoutes");
const staticRoutes = require("./routes/staticRoutes");
const userroutes = require("./routes/userroutes");
const { connectDB } = require("./connection");
const {restrictToLoggedinOnly, checkAuth } = require("./middlewares/authMiddleware");
const URL = require("./models/urlModels");

const port = 8001;

//mongoose
connectDB("mongodb://127.0.0.1:27017/urlShortner").then(() => {
  console.log("Connected to DB");
});

//SSR
app.set('view engine', 'ejs'); // seetting the view engine as ejs
app.set("views", path.resolve('./views')); // telling that all ejs files are in ./views folder

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//Routes
app.use("/url", restrictToLoggedinOnly, urlRoutes);
app.use("/", checkAuth, staticRoutes);
app.use("/user",  userroutes);

app.listen(port, () => {
  console.log(`Server is listeningon port ${port}`);
});


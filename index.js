const express = require("express");
const app = express();
const urlRoutes = require("./routes/urlRoutes");
const { connectDB } = require("./connection");
const URL = require("./models/urlModels");

const port = 8001;

//mongoose
connectDB("mongodb://127.0.0.1:27017/urlShortner").then(() => {
  console.log("Connected to DB");
});

//middleware
app.use(express.json());


//Routes
app.use("/url", urlRoutes); 

app.listen(port, () => {
  console.log(`Server is listeningon port ${port}`);
});


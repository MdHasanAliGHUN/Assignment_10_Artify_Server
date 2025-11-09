const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();
const port = process.env.PORT || 5000;

//Middleware to parse JSON requests
app.use(express.json());
app.use(cors());

//Import artwork routes
const artRouter = require("./src/routes/artWorkRoutes")


//Use artwork routes
app.use("/api/artworks", artRouter);
async function main() {
  await mongoose.connect(process.env.MONGODB_URL);
}

main()
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

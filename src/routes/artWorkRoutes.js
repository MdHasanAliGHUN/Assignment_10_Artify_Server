const express = require("express");
const {
  addNewArtwork,
  getAllArtworks,
  getLatestArtworks,
  getPublicArtWorks,
} = require("../controllers/artWorkControllers");

const artRouter = express.Router();

// Route setup
artRouter.post("/", addNewArtwork);
artRouter.get("/", getAllArtworks);
artRouter.get("/latest", getLatestArtworks);
artRouter.get("/public", getPublicArtWorks);

module.exports = artRouter;

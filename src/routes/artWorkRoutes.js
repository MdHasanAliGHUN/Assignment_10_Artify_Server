const express = require("express");
const {
  addNewArtwork,
  getAllArtworks,
  getLatestArtworks,
  getPublicArtWorks,
  fetchArtworkDetails,
  increaseLikeCount,
} = require("../controllers/artWorkControllers");

const artRouter = express.Router();

// Route setup
artRouter.post("/", addNewArtwork);
artRouter.get("/", getAllArtworks);
artRouter.get("/latest", getLatestArtworks);
artRouter.get("/public", getPublicArtWorks);
artRouter.get("/:id", fetchArtworkDetails);
artRouter.patch("/like/:id", increaseLikeCount);

module.exports = artRouter;

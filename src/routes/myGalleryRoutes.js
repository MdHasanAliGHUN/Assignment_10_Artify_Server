const express = require("express");
const {
  getUserArtworks,
  updateUserArtwork,
  deleteUserArtwork,
} = require("../controllers/myGalleryControllers");

const galleryRouter = express.Router();

// GET user artworks
galleryRouter.get("/:email", getUserArtworks);

// PUT update artwork
galleryRouter.put("/:id", updateUserArtwork);

// DELETE artwork
galleryRouter.delete("/:id", deleteUserArtwork);

module.exports = galleryRouter;

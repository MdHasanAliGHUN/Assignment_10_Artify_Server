const express = require("express");
const {
  getUserArtworks,
  updateUserArtwork,
  deleteUserArtwork,
} = require("../controllers/myGalleryControllers");

const checkAuthentication = require("../middlewares/checkAuthentication");

const galleryRouter = express.Router();

// GET user artworks
galleryRouter.get("/:email", checkAuthentication, getUserArtworks);
// PUT update artwork
galleryRouter.put("/:id", checkAuthentication, updateUserArtwork);
// DELETE artwork
galleryRouter.delete("/:id", checkAuthentication, deleteUserArtwork);

module.exports = galleryRouter;

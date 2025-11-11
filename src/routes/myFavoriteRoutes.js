const express = require("express");
const {
  addToFavorites,
  getUserFavorites,
  removeFavorite,
} = require("../controllers/favoriteController");

const favoriteRouter = express.Router();

favoriteRouter.post("/", addToFavorites);
favoriteRouter.get("/:email", getUserFavorites);
favoriteRouter.delete("/:id", removeFavorite);

module.exports = favoriteRouter;

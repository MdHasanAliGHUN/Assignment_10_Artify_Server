const express = require("express");
const {
  addToFavorites,
  getUserFavorites,
  removeFavorite,
} = require("../controllers/favoriteController");

const checkAuthentication = require("../middlewares/checkAuthentication");

const favoriteRouter = express.Router();

favoriteRouter.post("/", checkAuthentication, addToFavorites);
favoriteRouter.get("/:email", checkAuthentication, getUserFavorites);
favoriteRouter.delete("/:id", checkAuthentication, removeFavorite);

module.exports = favoriteRouter;

const express = require("express");

const favoritesRouter = express.Router();
favoritesRouter.get("/", async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Favorites",
    });
  } catch (error) {}
});

module.exports = favoritesRouter;

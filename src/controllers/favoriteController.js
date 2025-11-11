const Favorite = require("../model/favoriteModel");

// Add to favorites
const addToFavorites = async (req, res) => {
  const { userEmail, artworkId } = req.body;
  try {
    //check if exists
    const exists = await Favorite.findOne({ userEmail, artworkId });
    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Already in favorites!",
      });
    }
    const favorite = new Favorite({ userEmail, artworkId });
    await favorite.save();

    res.status(201).json({
      success: true,
      message: "Added to favorites!",
      data: favorite,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Get all favorites of a user
const getUserFavorites = (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Remove from favorites
const removeFavorite = (req, res) => {
  try {
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
module.exports = { addToFavorites, getUserFavorites, removeFavorite };

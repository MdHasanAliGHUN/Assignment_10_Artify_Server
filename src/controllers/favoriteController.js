const Favorite = require("../model/favoriteModel");

// Add to favorites
const addToFavorites = async (req, res) => {
  const { userEmail, artwork } = req.body;
  try {
    const exists = await Favorite.findOne({
      userEmail,
      artworkId: artwork._id,
    });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Already in favorites!",
      });
    }

    //Create Favorite
    const favorite = new Favorite({
      userEmail,
      artworkId: artwork._id,
      imageUrl: artwork.imageUrl,
      title: artwork.title,
      category: artwork.category,
      medium: artwork.medium,
      description: artwork.description,
    });

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
const getUserFavorites = async (req, res) => {
  try {
    const { email } = req.params;
    const favorites = await Favorite.find({ userEmail: email }).sort({
      createdAt: -1,
    });

    res.status(200).json({
        success: true,
        message: "Favorite Data Fetched Successfully",
        data: favorites,
      });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

// Remove from favorites
const removeFavorite = async (req, res) => {
  try {
    const { id } = req.params;
    await Favorite.findByIdAndDelete(id);

    res.status(200).json({ success: true, message: "Removed from favorites" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

module.exports = { addToFavorites, getUserFavorites, removeFavorite };

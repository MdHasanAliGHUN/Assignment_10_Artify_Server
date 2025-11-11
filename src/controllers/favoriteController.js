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
    if (!id) {
      return res.status(400).json({
        success: false,
        message: "Favorite ID is required",
      });
    }
    const deletedFavorite = await Favorite.findByIdAndDelete(id);

    if (!deletedFavorite) {
      return res.status(404).json({
        success: false,
        message: "Favorite item not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Artwork removed from favorites successfully",
      data: deletedFavorite,
    });
  } catch (error) {
    console.error("Error removing favorite:", error.message);
    res.status(500).json({
      success: false,
      message: "An unexpected error occurred while removing the favorite",
    });
  }
};

module.exports = { addToFavorites, getUserFavorites, removeFavorite };

const Artwork = require("../model/artworkModel");

// Get all artworks of logged-in user
const getUserArtworks = async (req, res) => {
  const { email } = req.params;
  try {
    const artworks = await Artwork.find({ userEmail: email }).sort({
      createdAt: -1,
    });
    res.status(200).json({
      success: true,
      message: "User artworks fetched successfully",
      data: artworks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error fetching artworks",
    });
  }
};

//  Update artwork
const updateUserArtwork = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const artwork = await Artwork.findByIdAndUpdate(id, updatedData, {
      new: true,
    });
    if (!artwork) {
      return res.status(404).json({
        success: false,
        message: "Artwork not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Artwork updated successfully",
      data: artwork,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error updating artwork",
    });
  }
};

// Delete artwork
const deleteUserArtwork = async (req, res) => {
  const { id } = req.params;
  console.log("Hello")
  try {
    const artwork = await Artwork.findByIdAndDelete(id);
    
    if (!artwork) {
      return res.status(404).json({
        success: false,
        message: "Artwork not found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Artwork deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error deleting artwork",
    });
  }
};

module.exports = {
  getUserArtworks,
  updateUserArtwork,
  deleteUserArtwork,
};

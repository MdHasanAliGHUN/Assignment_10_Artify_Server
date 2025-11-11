const Artwork = require("../model/artworkModel");

// Add new artwork
const addNewArtwork = async (req, res) => {
  const artWorkData = req.body;
  try {
    const newArtwork = new Artwork(artWorkData);
    const savedArtwork = await newArtwork.save();
    res.status(201).json({
      success: true,
      message: "Artwork added successfully",
      data: savedArtwork,
    });
  } catch (error) {
    console.error("Error saving artwork:", error);
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

// Get all artworks
const getAllArtworks = async (req, res) => {
  try {
    const artWorks = await Artwork.find();
    res.status(200).json({
      success: true,
      message: "Artwork fetched successfully",
      artWorks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

//  Get latest 6 artworks
const getLatestArtworks = async (req, res) => {
  try {
    const latestArtWorks = await Artwork.find()
      .sort({ createdAt: -1 })
      .limit(6);

    res.status(200).json({
      success: true,
      message: "Latest 6 artworks fetched successfully",
      latestArtWorks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

//Get Public Art works
const getPublicArtWorks = async (req, res) => {
  const searchQuery = req.query.search || "";
  try {
    const filter = {
      visibility: "public",
      $or: [
        { title: { $regex: searchQuery, $options: "i" } },
        { userName: { $regex: searchQuery, $options: "i" } },
        { category: { $regex: searchQuery, $options: "i" } },
      ],
    };
    const publicArtworks = await Artwork.find(filter).sort({
      createdAt: -1,
    });

    res.status(200).json({
      success: true,
      message: "Public artworks fetched successfully",
      count: publicArtworks.length,
      data: publicArtworks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

//Get a sinle Art work for detailse
const fetchArtworkDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const artwork = await Artwork.findById(id);
    if (!artwork) {
      return res.status(404).json({
        success: false,
        message: "User Not Found",
      });
    }

    const artistEmail = artwork.userEmail;
    const totalArtworks = await Artwork.countDocuments({
      userEmail: artistEmail,
    });

    res.status(200).json({
      success: true,
      message: "Art work found successfully",
      data: {
        ...artwork.toObject(),
        totalArtworks,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

//Increase like
const increaseLikeCount = async (req, res) => {
  const { id } = req.params;
  try {
    const artwork = await Artwork.findByIdAndUpdate(
      id,
      { $inc: { like: 1 } },
      { new: true }
    );
    if (!artwork) {
      return res.status(404).json({
        success: false,
        message: "Artwork Not Found",
      });
    }
    res.status(200).json({
      success: true,
      message: "Like increased successfully",
      data: artwork,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

module.exports = {
  addNewArtwork,
  getAllArtworks,
  getLatestArtworks,
  getPublicArtWorks,
  fetchArtworkDetails,
  increaseLikeCount,
};

const express = require("express");
const Artwork = require("../model/artworkModel");
const artRouter = express.Router();

artRouter.post("/", async (req, res) => {
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
});

artRouter.get("/", async (req, res) => {
  try {
    const artWorks = await Artwork.find();
    res.status(200).json({
      success: true,
      message: "Artwork Fetched successfully",
      artWorks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

//Latest Artworks (Public, 6 newest)
artRouter.get("/latest", async (req, res) => {
  try {
    const latestArtWorks = await Artwork.find()
      .sort({ createdAt: -1 })
      .limit(6);

    res.status(200).json({
      success: true,
      message: "Latest 6 public artwork fetched successfully",
      latestArtWorks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
});

module.exports = artRouter;

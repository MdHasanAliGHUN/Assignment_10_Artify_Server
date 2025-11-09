const mongoose = require("mongoose");

const artworkSchema = new mongoose.Schema({
  imageUrl: {
    type: String,
    required: [true, "Image URL is required"],
  },
  title: {
    type: String,
    required: [true, "Title is required"],
  },
  category: {
    type: String,
    required: [true, "Category is required"],
  },
  medium: {
    type: String,
    required: [true, "Medium/Tools is required"],
  },
  description: {
    type: String,
    required: [true, "Description is required"],
  },
  visibility: {
    type: String,
    enum: ["public", "private"],
    default: "public",
  },
  userName: {
    type: String,
    required: true,
  },
  userEmail: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});


const Artwork = mongoose.model("Artwork", artworkSchema);
module.exports = Artwork;
const mongoose = require("mongoose");
const favoriteSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  artworkId: { type: String, required: true },
  imageUrl: { type: String, required: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  medium: { type: String, required: true },
  description: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Favorite = mongoose.model("Favorite", favoriteSchema);
module.exports = Favorite;

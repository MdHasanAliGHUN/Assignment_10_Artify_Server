const mongoose = require("mongoose");
const favoriteSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  artworkId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

const Favorite = mongoose.model("Favorite", favoriteSchema);
module.exports = Favorite;

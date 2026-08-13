const mongoose = require('mongoose');

const interiorDesignSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true }, // e.g. Residential, Commercial
  image: { type: String, required: true },
}, { timestamps: true });

module.exports = mongoose.model('InteriorDesign', interiorDesignSchema);

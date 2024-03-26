const mongoose = require('mongoose');

// Schema used for reviews
const reviewSchema = new mongoose.Schema({
  landlordName: String,
  propertyAddress: String,
  rentAmount: String,
  reliability: Number,
  recommendation: Number,
  writtenReview: String,
}, { timestamps: true });

// Create a text index on the landlordName field
reviewSchema.index({ landlordName: 'text' });

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
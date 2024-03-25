const express = require('express');
const router = express.Router();
const Review = require('../models/review');

// POST route to create a new review
router.post('/reviews', async (req, res) => {
  try {
    const newReview = new Review(req.body);
    const savedReview = await newReview.save();
    res.status(201).json(savedReview);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET route to fetch 20 reviews
router.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.find().limit(10);
    res.status(200).json(reviews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
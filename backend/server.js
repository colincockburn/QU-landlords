const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const reviewsRouter = require('./routes/reviewsRouter');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json()); // This allows us to parse JSON.
app.use('/api', reviewsRouter);

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Successfully connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define routes
app.get('/', (req, res) => {
  res.send('Hello from Backend!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

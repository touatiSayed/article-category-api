const mongoose = require('mongoose');

// Define the article schema
const articleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  images: [
    {
      type: String, // URL or path to the image
    },
  ],
});

module.exports = mongoose.model('Article', articleSchema);

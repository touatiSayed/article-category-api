const express = require('express');
const Category = require('../models/Category');
const Article = require('../models/Article');
const router = express.Router();

// Category Routes
// Create Category
router.post('/categories', async (req, res) => {
  const { name, description } = req.body;

  try {
    const newCategory = new Category({ name, description });
    await newCategory.save();
    res.status(201).json(newCategory);
  } catch (error) {
    res.status(500).json({ message: 'Error creating category', error });
  }
});

// Get all categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await Category.find();
    res.status(200).json(categories);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching categories', error });
  }
});

// Update Category
router.put('/categories/:id', async (req, res) => {
  const { name, description } = req.body;

  try {
    const updatedCategory = await Category.findByIdAndUpdate(
      req.params.id,
      { name, description },
      { new: true }
    );
    res.status(200).json(updatedCategory);
  } catch (error) {
    res.status(500).json({ message: 'Error updating category', error });
  }
});

// Delete Category
router.delete('/categories/:id', async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Category deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting category', error });
  }
});

// Article Routes
// Create Article
router.post('/articles', async (req, res) => {
  const { name, description, category, price, images } = req.body;

  try {
    const newArticle = new Article({
      name,
      description,
      category,
      price,
      images,
    });
    await newArticle.save();
    res.status(201).json(newArticle);
  } catch (error) {
    res.status(500).json({ message: 'Error creating article', error });
  }
});

// Get all articles
router.get('/articles', async (req, res) => {
  try {
    const articles = await Article.find();
    res.status(200).json(articles);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching articles', error });
  }
});

// Update Article
router.put('/articles/:id', async (req, res) => {
  const { name, description, category, price, images } = req.body;

  try {
    const updatedArticle = await Article.findByIdAndUpdate(
      req.params.id,
      { name, description, category, price, images },
      { new: true }
    );
    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(500).json({ message: 'Error updating article', error });
  }
});

// Delete Article
router.delete('/articles/:id', async (req, res) => {
  try {
    await Article.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: 'Article deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting article', error });
  }
});

module.exports = router;

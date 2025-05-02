const db = require('../config/db'); // Import the MariaDB connection

// Example controller function to get all products
const getAllProducts = (req, res) => {
  db.query('SELECT * FROM products', (err, results) => {
    if (err) {
      return res
        .status(500)
        .json({ message: 'Error retrieving products', error: err });
    }
    res.status(200).json(results);
  });
};

// You can add other functions for product creation, updates, etc.

module.exports = { getAllProducts };

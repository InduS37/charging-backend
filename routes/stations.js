const express = require('express');
const router = express.Router();
const {
  createStation,
  getStations,
  updateStation,
  deleteStation
} = require('../controllers/stationController');

const protect = require('../middleware/authMiddleware');

// Protected routes
router.post('/', protect, createStation);
router.put('/:id', protect, updateStation);
router.delete('/:id', protect, deleteStation);

// Public route
router.get('/', getStations);

module.exports = router;


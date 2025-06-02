const Station = require('../models/station');

// Add station
exports.createStation = async (req, res) => {
  try {
    console.log('Received data:', req.body); // ✅ print what frontend sends
    const station = new Station(req.body);
    await station.save();
    res.status(201).json(station);
  } catch (err) {
    console.error('Error adding station:', err.message);
    res.status(500).json({ message: 'Error creating station', error: err.message });
  }
};

// Get all stations
exports.getStations = async (req, res) => {
  try {
    const stations = await Station.find();
    res.json(stations);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching stations', error: err.message });
  }
};

// Update station
exports.updateStation = async (req, res) => {
  try {
    const station = await Station.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(station);
  } catch (err) {
    res.status(500).json({ message: 'Error updating station', error: err.message });
  }
};

// Delete station
exports.deleteStation = async (req, res) => {
  try {
    await Station.findByIdAndDelete(req.params.id);
    res.json({ message: 'Station deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting station', error: err.message });
  }
};

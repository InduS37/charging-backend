const mongoose = require('mongoose');

const stationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  location: {
    lat: Number,
    lng: Number
  },
  status: {
  type: String,
  enum: ['active', 'inactive'], // ✅ match what frontend sends
  default: 'active'
},
  powerOutput: Number,      // kW
  connectorType: String     // e.g., CCS, Type2, CHAdeMO
}, { timestamps: true });

module.exports = mongoose.model('Station', stationSchema);

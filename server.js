const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const stationRoutes = require('./routes/stations');

dotenv.config();
connectDB();

const app = express();

// ✅ Enable CORS for frontend (default: allow all)
app.use(cors());

// ✅ Enable JSON body parsing
app.use(express.json());

// ✅ API Routes
app.use('/api/auth', authRoutes);
app.use('/api/stations', stationRoutes);

// ✅ Basic home route
app.get('/', (req, res) => {
  res.send('API is working 🚀');
});

// ✅ Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

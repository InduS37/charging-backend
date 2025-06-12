const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(cors({
<<<<<<< HEAD
  origin: ['']
=======
  origin: ['https://charging-backend-6.onrender.com/', 'http://charging-frontend12.onrender.com/']
>>>>>>> a110b2072a56b8edeb62fe3a873e25c1c22da0b2
}));
app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/stations', require('./routes/stations'));

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected');
    app.listen(process.env.PORT || 5000, () => {
      console.log('✅ Server running on port', process.env.PORT || 5000);
    });
  })
  .catch((err) => {
    console.error('❌ MongoDB connection failed:', err.message);
  });

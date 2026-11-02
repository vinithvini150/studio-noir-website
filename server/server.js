
require('dotenv').config();

const dns = require('node:dns');
dns.setServers(['8.8.8.8', '8.8.4.4']);

const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const enquiryRoutes = require('./routes/enquiries');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json({ limit: '1mb' }));
app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/api/health', (_req, res) =>
  res.json({
    success: true,
    message: 'Studio Noir API is running.'
  })
);

app.use('/api/enquiries', enquiryRoutes);

app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '../public/index.html'))
);

async function start() {
  if (process.env.MONGODB_URI) {
    try {
      await mongoose.connect(process.env.MONGODB_URI);
      console.log('MongoDB connected successfully!');
    } catch (error) {
      console.error('MongoDB connection failed:', error.message);
      console.error('The website will still serve pages, but enquiry saving requires MongoDB.');
    }
  } else {
    console.warn('MONGODB_URI is missing. Add it to your .env file.');
  }

  app.listen(PORT, () => {
    console.log(`Studio website running at http://localhost:${PORT}`);
  });
}

start();

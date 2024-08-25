// backend/server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors'); // Import cors
const Contact = require('./models/contactModel'); // Import the Contact model
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json()); // To parse JSON data
app.use(express.static('public')); // Serve static files if needed
app.use(cors()); // Enable CORS for all routes

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/myportfolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Example API route for contact form submission
app.post('/api/contact', async (req, res) => {
  const contactData = req.body;
  console.log('Contact form submitted:', contactData);

  try {
    // Create a new contact entry
    const newContact = new Contact(contactData);
    await newContact.save();

    res.status(200).send('Contact form submitted successfully!');
  } catch (error) {
    console.error('Error saving contact data:', error);
    res.status(500).send('Failed to submit contact form.');
  }
});

// Catch-all route for undefined routes
app.get('*', (req, res) => {
  res.send('This is your backend server!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

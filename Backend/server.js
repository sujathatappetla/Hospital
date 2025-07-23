const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const insertAppointment = require('./insert');

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, '..', 'frontend')));

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));

// Form submission route
app.post('/insert', (req, res) => {
  insertAppointment(req.body, (err, result) => {
    if (err) {
      console.error("Insert error:", err);
      return res.status(500).send("Error inserting data.");
    }
    res.send("<h2>Appointment inserted successfully!</h2><a href='/project.html'>Back</a>");
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

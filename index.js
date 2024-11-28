'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
app.get('/math/circle/:r', (req, res) => {
//TODO1
  //cm4_1.1
  const radius = parseFloat(req.params.r);

  if (isNaN(radius) || radius <= 0) {
    return res.status(400).json({ error: "Radius must be a positive number" });
  }

  const area = Math.PI * Math.pow(radius, 2);
  const circumference = 2 * Math.PI * radius;

  res.json({
    area: area.toFixed(2),
    circumference: circumference.toFixed(2),
  });
});
//cm4_1.2
app.get('/math/rectangle/:w/:h', (req, res) => {

  const width = parseFloat(req.params.w);
  const height = parseFloat(req.params.h);

  if (isNaN(width) ||  isNaN(height) ||  width <= 0 || height <= 0) {
    return res.status(400).json({ error: "Width and height must be positive numbers" });
  }

  const area = width * height;
  const perimeter = 2 * (width + height);

  res.json({
    area: area.toFixed(2),
    perimeter: perimeter.toFixed(2),
  });
});
//cm4_1.3
app.get('/math/power/:base/:exponent', (req, res) => {
  const base = parseFloat(req.params.base);
  const exponent = parseFloat(req.params.exponent);
  const rootQuery = req.query.root === 'true'; 

  // Validate input
  if (isNaN(base) || isNaN(exponent)) {
    return res.status(400).json({ error: 'Invalid input' });
  }

  const result = Math.pow(base, exponent);

  const response = { result: result.toFixed(2) }

  if (rootQuery && base >= 0) {
    response.root = Math.sqrt(base).toFixed(2);
  }

  res.json(response);
});
//TODO2


//TODO3


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
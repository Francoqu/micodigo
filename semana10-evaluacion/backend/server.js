// server.js
const express = require('express');
const app = express();
const port = 5000;

const autoRoutes = require('./routes/autoRoutes'); 

app.use(express.json()); 
app.use('/api/autos', autoRoutes); 

app.listen(port, () => {
  console.log(`Servidor backend corriendo en http://localhost:${port}`);
});

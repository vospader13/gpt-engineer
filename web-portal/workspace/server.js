const express = require('express');
const userRoutes = require('./routes/userRoutes');
const database = require('./config/database');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use('/api/users', userRoutes);

database.connect();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

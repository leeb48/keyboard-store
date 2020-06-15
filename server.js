const express = require('express');
const connectDB = require('./config/db');

const app = express();
const PORT = process.env.PORT || 5000;

// CONFIG APP
app.use(express.json());

// CONNECT TO DB
connectDB();

// ROUTES
app.use('/api/auth', require('./routes/auth'));
app.use('/api/store', require('./routes/store'));
app.use('/api/user', require('./routes/user'));

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`);
});

const mongoose = require('mongoose');
mongoose.connect(process.env.db_url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.error('Database connection error:', err));

module.exports = mongoose;

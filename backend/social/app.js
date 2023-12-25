const express = require('express');
const sequelize = require('./config/database');
const userRoutes = require('./routes/userRoutes');
const tenantRoutes = require('./routes/tenantRoutes');
const errorHandler = require('./middlewares/errorHandler');
const { initProducer } = require('./utilities/producer');
const HttpException = require('./utilities/HttpException.utils');

const app = express();
const router = express.Router();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes with '/api' prefix
app.use('/api', router);

// Sub-routes with common prefix '/users'
router.use('/users', userRoutes);

// Sub-routes with common prefix '/tenants'
router.use('/tenants', tenantRoutes);

// Error Handling
app.all('*', (req, res, next) => {
  const err = new HttpException(404, 'Endpoint Not Found');
  next(err);
});
app.use(errorHandler);

// Default Route
app.use('/', async (req, res) => {
  res.status(200).json({ message: `App is running on port ${process.env.PORT || 4000}` });
});

// Database Synchronization
sequelize
  .sync()
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => {
    console.error('Error syncing database:', err);
  });

// Start Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, async () => {
  console.log(`App started at port ${PORT}`);
  await initProducer();
});

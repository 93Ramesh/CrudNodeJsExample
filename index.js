import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/database.js'; // Adjust this path if necessary
import gymRoutes from './routes/gymRoute.js'; // Adjust this path if necessary

dotenv.config();

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', gymRoutes);

// Connect to MongoDB
connectDB().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
  process.exit(1); // Exit process on connection failure
});

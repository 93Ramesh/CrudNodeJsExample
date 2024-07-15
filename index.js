import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import connectDB from './config/database.js'; 
import gymRoutes from './routes/gymRoute.js'; 

dotenv.config();

const app = express();

app.use(bodyParser.json());

app.use('/api', gymRoutes);

// Connect to MongoDB
connectDB().then(() => {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}).catch(err => {
  console.error('Error connecting to MongoDB:', err);
  process.exit(1);
});

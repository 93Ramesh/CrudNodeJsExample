import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const dbURI = process.env.MONGODB_URI;
    if (!dbURI) {
      throw new Error('MongoDB URI is not defined in environment variables');
    }

    await mongoose.connect(dbURI);

    console.log('MongoDB connected...');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    throw err; // Throw error to handle in the calling function
  }
};

export default connectDB;

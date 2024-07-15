// models/Gym.js
import mongoose from 'mongoose';

const GymSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  userId: { type: String, required: true },
  gymName: { type: String, required: true },
  gymOpeningTime: { type: Date, required: true },
  gymClosingTime: { type: Date, required: true },
  gymEquipments: { type: String, required: true },
  gymMobileNumber: { type: String, required: true },
  gymLandlineNumber: { type: String, required: true },
  gymAddress: { type: String, required: true },
});

const Gym = mongoose.model('Gym', GymSchema);

export default Gym;

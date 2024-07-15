// controllers/gymController.js
import Gym from '../models/gym.js';

// Create a new gym
export const createGym = async (req, res) => {
  try {
    const newGym = new Gym(req.body);
    const gym = await newGym.save();
    res.status(201).json(gym);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Get all gyms
export const getGyms = async (req, res) => {
  try {
    const gyms = await Gym.find();
    res.status(200).json(gyms);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a single gym by ID
export const getGymById = async (req, res) => {
  try {
    const gym = await Gym.findById(req.params.id);
    if (!gym) {
      return res.status(404).json({ error: 'Gym not found' });
    }
    res.status(200).json(gym);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a gym by ID
export const updateGym = async (req, res) => {
  try {
    const gym = await Gym.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!gym) {
      return res.status(404).json({ error: 'Gym not found' });
    }
    res.status(200).json(gym);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete a gym by ID
export const deleteGym = async (req, res) => {
  try {
    const gym = await Gym.findByIdAndDelete(req.params.id);
    if (!gym) {
      return res.status(404).json({ error: 'Gym not found' });
    }
    res.status(200).json({ message: 'Gym deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

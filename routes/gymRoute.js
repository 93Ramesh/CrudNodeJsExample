// routes/gymRoutes.js
import express from 'express';
import {
  createGym,
  getGyms,
  getGymById,
  updateGym,
  deleteGym,
} from '../controllers/gymController.js';

const router = express.Router();

router.post('/gyms', createGym);
router.get('/gyms', getGyms);
router.get('/gyms/:id', getGymById);
router.put('/gyms/:id', updateGym);
router.delete('/gyms/:id', deleteGym);

export default router;

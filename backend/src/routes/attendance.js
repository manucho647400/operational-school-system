import express from 'express';
import { getAttendance } from '../services/schoolService.js';

const router = express.Router();

router.get('/attendance', (req, res) => {
  res.json(getAttendance());
});

export default router;

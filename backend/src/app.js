import express from 'express';
import { getTimetable } from '../services/schoolService.js';

const router = express.Router();

router.get('/timetable', (req, res) => {
  res.json(getTimetable());
});

export default router;

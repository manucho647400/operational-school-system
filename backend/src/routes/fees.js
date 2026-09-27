import express from 'express';
import { getAttendance, addAttendanceEntry } from '../services/schoolService.js';

const router = express.Router();

router.get('/attendance', (req, res) => {
  res.json(getAttendance());
});

router.post('/attendance', (req, res) => {
  const entry = addAttendanceEntry(req.body);
  res.status(201).json(entry);
});

export default router;

import express from 'express';
import { getDashboardSummary, getTimetable } from '../services/schoolService.js';

const router = express.Router();

router.get('/dashboard', (req, res) => {
  res.json(getDashboardSummary());
});

router.get('/overview', (req, res) => {
  res.json({
    school: 'Joy Valley Academy',
    summary: getDashboardSummary()
  });
});

router.get('/timetable', (req, res) => {
  res.json(getTimetable());
});

export default router;

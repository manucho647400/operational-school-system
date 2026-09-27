import express from 'express';
import { getDashboardSummary, getStudents, getTeachers, getAttendance, getFees, getClasses } from '../services/schoolService.js';

const router = express.Router();

router.get('/dashboard', (req, res) => {
  res.json(getDashboardSummary());
});

router.get('/students', (req, res) => {
  res.json(getStudents());
});

router.get('/teachers', (req, res) => {
  res.json(getTeachers());
});

router.get('/attendance', (req, res) => {
  res.json(getAttendance());
});

router.get('/fees', (req, res) => {
  res.json(getFees());
});

router.get('/classes', (req, res) => {
  res.json(getClasses());
});

export default router;

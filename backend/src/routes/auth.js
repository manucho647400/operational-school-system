import express from 'express';
import { getExamResults, getReportCards, addExamResult } from '../services/schoolService.js';

const router = express.Router();

router.get('/exams', (req, res) => {
  res.json(getExamResults());
});

router.get('/reports', (req, res) => {
  res.json(getReportCards());
});

router.post('/exams', (req, res) => {
  const result = addExamResult(req.body);
  res.status(201).json(result);
});

export default router;

import express from 'express';
import { getTeachers } from '../services/schoolService.js';

const router = express.Router();

router.get('/teachers', (req, res) => {
  res.json(getTeachers());
});

export default router;

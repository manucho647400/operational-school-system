import express from 'express';
import { getStudents } from '../services/schoolService.js';

const router = express.Router();

router.get('/students', (req, res) => {
  res.json(getStudents());
});

export default router;

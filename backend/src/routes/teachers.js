import express from 'express';
import { getStudents, addStudent } from '../services/schoolService.js';

const router = express.Router();

router.get('/students', (req, res) => {
  res.json(getStudents());
});

router.post('/students', (req, res) => {
  const student = addStudent(req.body);
  res.status(201).json(student);
});

export default router;

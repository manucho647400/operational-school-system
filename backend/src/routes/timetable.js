import express from 'express';
import { getFees, addFeeRecord } from '../services/schoolService.js';

const router = express.Router();

router.get('/fees', (req, res) => {
  res.json(getFees());
});

router.post('/fees', (req, res) => {
  const fee = addFeeRecord(req.body);
  res.status(201).json(fee);
});

export default router;

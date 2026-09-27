import express from 'express';
import { getFees } from '../services/schoolService.js';

const router = express.Router();

router.get('/fees', (req, res) => {
  res.json(getFees());
});

export default router;

import express from 'express';
import { loginUser } from '../services/schoolService.js';

const router = express.Router();

router.post('/login', (req, res) => {
  const result = loginUser(req.body);

  if (!result.ok) {
    return res.status(401).json({ message: result.message });
  }

  return res.json(result.user);
});

export default router;

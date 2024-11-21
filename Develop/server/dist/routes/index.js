import { Router } from 'express';
import authRoutes from './auth-routes.js';
import apiRoutes from './api/index.js';
const router = Router();
router.use('/auth', authRoutes);
// TODONE: Add authentication to the API routes
// Authentication added to specific routes in user-routes. This way the user can create an account without requiring a token.
router.use('/api', apiRoutes);
export default router;

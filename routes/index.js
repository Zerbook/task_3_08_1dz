import express from 'express';
import authRoutes from './auth.js';
import postRoutes from './post.js';
import userRoutes from './user.js';

const router = express.Router({ mergeParams: true });

router.use('/', authRoutes);
router.use('/posts', postRoutes);
router.use('/users', userRoutes);

export default router;

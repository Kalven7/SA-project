import express from 'express';
import user from './user.router.js';
import cantina from './cantina.router.js';
import aluno from './aluno.router.js';
import login from './login.router.js';

const router = express.Router();

router.use('/user', user);
router.use('/cantina', cantina);
router.use('/aluno', aluno);
router.use('/login', login);

export default router;
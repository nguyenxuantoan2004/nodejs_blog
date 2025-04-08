import express from 'express';
import newsController from '../app/controllers/NewsController.js';

// Importing the express module and the NewsController from the specified path.
const router = express.Router();

router.use('/:slug', newsController.show); // GET /news/:slug

router.use('/', newsController.index); // GET /news


export default router;
import express from 'express';
import siteController from '../app/controllers/SiteController.js';

// Importing the express module and the NewsController from the specified path.
const router = express.Router();


router.use('/', siteController.index); // GET /news


export default router;
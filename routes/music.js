import express from 'express';
import { createMusic, getMusicById, listMusic } from '../controllers/music.js';

const musicRouter = express.Router();

// CRUD

// READ

// List all music resources
musicRouter.get('/music', listMusic);

// List a music resource
musicRouter.get('/music/:id', getMusicById);

// Create
musicRouter.post('/music', createMusic);

export default musicRouter;

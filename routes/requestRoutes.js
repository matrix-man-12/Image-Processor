import express from 'express';
import * as requestController from '../controllers/requestController.js'; // Import controller

const router = express.Router();

// API routes
router.get('/', (req, res) => {
    res.send('Root Route connected!!');
})

router.post('/upload', requestController.uploadCsv)
router.get('/status/:requestId', requestController.getRequestStatus)

export default router;
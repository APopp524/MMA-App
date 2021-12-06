import express from 'express';
import controller from '../controllers/schedule';
const router = express.Router();

router.get('/schedule', controller.getSchedule);
router.get('/event', controller.getEvent);

export = router;
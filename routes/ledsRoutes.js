const express = require('express');
const router = express.Router();
 
const ledController = require('../controllers/ledController');
 
router.get('/', ledController.getAllLeds);
router.get('/getLed', ledController.getLed);
router.get('/getLedState', ledController.getLedState);
router.get('/getLedLight', ledController.getLedLight);
router.get('/getLedColor', ledController.getLedColor);
router.post('/setLedState', ledController.setLedState);
router.post('/setLedLight', ledController.setLedLight);
router.post('/setLedColor', ledController.setLedColor);

 
module.exports = router;

















const router = require('express').Router();
const authController = require('../constrollers/auth');

router.get('/', authController.get);
router.post('/token', authController.postToken);

module.exports = router;
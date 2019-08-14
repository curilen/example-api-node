const router = require('express').Router();
const accountController = require('../constrollers/account');

router.get('/', accountController.get);

module.exports = router;
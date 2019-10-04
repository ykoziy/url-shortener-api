const router = require('express').Router();
const urlController = require('../../controllers/urlController');

router.post('/shorturl/new', urlController.addUrl);
router.get('/shorturl/:surl', urlController.getFullUrl);

module.exports = router;
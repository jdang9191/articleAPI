const { Router } = require('express');
const controller = require('./controller');

const router = Router();

router.get('/', controller.getArticles);
router.get('/:id', controller.getArticleById);


module.exports = router;
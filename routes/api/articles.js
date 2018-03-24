const axios = require("axios"); 
const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

// Matches with "/api/articles"
router.route("/")
  .post(articlesController.save);

// Matches with "/api/articles/:id"
router
  .put(articlesController.update)
  .delete(articlesController.remove);

router.post('/', articlesController.articles_save);

module.exports = router;
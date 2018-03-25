const router = require("express").Router();
const articlesController = require("../../controllers/articlesController");

router.route("/")
	.get(articlesController.findAll)
  .post(articlesController.create);

// Matches with "/api/articles/:id"
router
  .put(articlesController.update)
  .delete(articlesController.remove);

module.exports = router;
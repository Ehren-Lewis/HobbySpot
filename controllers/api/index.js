const router = require("express").Router();
const categoryRoutes = require("./category-routes");
const userRoutes = require("./user-routes.js");
const discussionRoutes = require("./discussion-routes");

router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);
router.use("/discussions", discussionRoutes);

module.exports = router;

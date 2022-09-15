const router = require("express").Router();
const categoryRoutes = require("./category-routes");
const userRoutes = require("./user-routes.js");

router.use("/users", userRoutes);
router.use("/categories", categoryRoutes);

module.exports = router;

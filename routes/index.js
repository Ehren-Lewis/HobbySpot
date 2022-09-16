const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoute = require("./homeRoute");

router.use("/api", apiRoutes);
router.use("/", homeRoute);
router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>");
});

module.exports = router;

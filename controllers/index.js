const router = require("express").Router();

const apiRoutes = require("./api");
const homeRoute = require("./homeRoute");
const loginRoute = require("./login-routes");
const searchRoute = require("./search");
router.use("/api", apiRoutes);

router.use("/home", homeRoute);

router.use("/", loginRoute);

router.use("/hobby", searchRoute)

// router.use((req, res) => {
//   res.send("<h1>Wrong Route!</h1>");
// });

module.exports = router;

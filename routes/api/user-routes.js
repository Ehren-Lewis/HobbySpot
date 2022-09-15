const router = require("express").Router();
const { User } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const userData = await User.findAll({
      //   include: [{ model: username }, { model: email }, { model: password }],
    });
    if (!userData) {
      res.status(404).json({ message: "users not found" });
      return;
    }
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get("/:id", async (req, res) => {
//   const userById = await User.findByPk(req.params.id);
//   return res.json(userById);
// });

module.exports = router;

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

router.get("/:id", async (req, res) => {
  const userById = await User.findByPk(req.params.id, {
    // include: [{ model: Product }],
  });
  return res.json(userById);
});

router.post("/", async (req, res) => {
  try {
    const createUser = await User.create(req.body);
    if (!userTag) {
      res.status(404).json({ message: "cannot create user" });
      return;
    }
    res.status(200).json(createUser);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const userUpdate = await User.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!userUpdate) {
      res.status(404).json({ message: "user not found" });
      return;
    }
    res.status(200).json(userUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  const userDelete = await User.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.json(userDelete);
  // delete on tag by its `id` value
});
module.exports = router;

const router = require("express").Router();
const { Discussions, Category, User, UserCategory } = require("../../models");

//----------endpoint = api/discussions  ------this route finds all discussions-----
router.get("/", async (req, res) => {
  try {
    const discussionData = await Discussions.findAll({
      include: [{model: User}]
    });
    if (!discussionData) {
      res.status(404).json({ message: "discussion not found" });
      return;
    }
    res.status(200).json(discussionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//----------endpoint = api/discussions/:id ------this route finds discussions by ID-----
router.get("/:id", async (req, res) => {
  const discussionById = await Discussions.findByPk(req.params.id);
  return res.json(discussionById);
});

router.post("/", async (req, res) => {
  try {
    
    const createDiscussion = await Discussions.create(req.body);
    if (!createDiscussion) {
      res.status(404).json({ message: "cannot creat discussion" });
      return;
    }
    res.status(200).json(createDiscussion);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  try {
    const discussionUpdate = await Discussions.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!discussionUpdate) {
      res.status(404).json({ message: "discussion not found" });
      return;
    }
    res.status(200).json(discussionUpdate);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  const discussionDelete = await Discussions.destroy({
    where: {
      id: req.params.id,
    },
  });

  return res.json(discussionDelete);
});

module.exports = router;

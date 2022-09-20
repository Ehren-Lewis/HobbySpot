const router = require("express").Router();
const { Category, User, UserCategory } = require("../../models");

router.get("/", async (req, res) => {
  try {
    const categoryData = await Category.findAll({
      // include: [{ category_name: Product }],
    });
    if (!categoryData) {
      res.status(404).json({ message: "category not found" });
      return;
    }
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//------------not working------------------

// router.get("/:id", async (req, res) => {
//   const categoryById = await Category.findByPk(req.params.id);
//   return res.json(categoryById);
// });


router.put("/:id", async (req, res) => {
    try {
      const categoryUpdate = await Category.update(req.body, {
        where: {
          id: req.params.id,
        },
      });
      if (!categoryUpdate) {
        res.status(404).json({ message: "category not found" });
        return;
      }
      res.status(200).json(categoryUpdate);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post("/", async (req, res) => {
  try {
    const createCategory = await Category.create(req.body);
    if (!createCategory) {
      res.status(404).json({ message: "cannot create category" });
      return;
    }
    res.status(200).json(createCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
    const categoryDelete = await Category.destroy({
      where: {
        id: req.params.id,
      },
    });
  
    return res.json(categoryDelete);
  });

module.exports = router;

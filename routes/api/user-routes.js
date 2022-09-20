const router = require("express").Router();
const connectSessionSequelize = require("connect-session-sequelize");
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
    res.status(500)
  }
});

router.get("/:id", async (req, res) => {
  const userById = await User.findByPk(req.params.id, {
    // include: [{ model: Product }],
  });
  return res.json(userById);
});


router.put("/:id", async (req, res) => {
 
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
  } catch (err) {}
});

router.post('/', async (req, res) => {
  console.log(req);
  try {
    const dbUserData = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.email = req.body.email;
      req.session.username = dbUserData.username;


        // console.log(req.session, 'line 60');

      res.json({status: 200});
    });
  } catch (err) {
    // console.log(err);
    res.json({status: 500});
  }
});

// Login
router.post('/login', async (req, res) => {
  try {
    const dbUserData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!dbUserData) {
      res.status(400).json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }


    const validPassword = await dbUserData.checkPassword(req.body.password);

    if (!validPassword) {
      res.json({ message: 'Incorrect email or password. Please try again!', status: 400 });
      return;
    }

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.email = req.body.email;
      req.session.username = dbUserData.username;
      req.session.userId = dbUserData.id
      console.log(
        '🚀 ~ file: user-routes.js ~ line 57 ~ req.session.save ~ req.session.cookie',

      );


      res.json({message: 'You are now logged in!', status: 200 });

    });

  } catch (err) {
    console.log(err);

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


router.post("/logout", async (req, res) => {
  req.session.destroy( () => {
  res.redirect('/');
  });
})

module.exports = router;


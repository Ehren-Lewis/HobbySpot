const router = require("express").Router();

router.get("/", async (req, res, next) => {
    try {
        const discussionData = await Discussions.findAll({
          include: [{model: User}],
          where: {
            hobby_topic: req.body.hobby_topic
          }
        });
        
        const newData = discussionData.map( ele => ele.get({plain: true}))
        if (!discussionData) {
        // res.status(404).json({ message: "discussion not found" });
        // return;
        res.render("error");
        return;
        }
        res.render("search", { newData, user: req.session.username, loggedIn: req.session.loggedIn});
    }
    catch (err) {
        res.render("err or");
    }
});


module.exports = router;
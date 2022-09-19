const router = require("express").Router();
const { Discussions, Category, User, UserCategory } = require("../models");


// fetch('/api/disucssions').then( (response) => response.json()).then( (data) => {
//     // [{}, {}, 'hello': {}]
// })
router.get("/", async (req, res, next) => {
    try {
        const discussionData = await Discussions.findAll({
          include: [{model: User}]
        });
// serialize data
// create map method 
// get {plain : true} 

        
        const newData = discussionData.map( ele => ele.get({plain: true}))
        if (!discussionData) {
        // res.status(404).json({ message: "discussion not found" });
        // return;
        res.render("error");
        return;
        }
        res.render("index", { newData, user: req.session.username, loggedIn: req.session.loggedIn});
    }
    catch (err) {
        res.render("error")
    }
});

module.exports = router;
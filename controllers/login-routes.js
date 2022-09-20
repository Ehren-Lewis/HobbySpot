const router = require("express").Router();


router.get("/", (req, res, next) => {
    if (req.session.loggedIn) {
        res.redirect("/home");
        return;
    } else {
        // console.log('hererger')
    res.render("login");
    }
});

module.exports = router;
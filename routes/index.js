var express = require('express');
var router = express.Router();

// GET home page.
router.get("/", function (req, res) {
  res.redirect("/catalog");
});


router.get("/about", (req, res, next) => {
  About.find({}).exec((err, queryResults) => {
    if (err) {
      return next(err);
    }
    //Successful, so render
    res.render("about_view", { title: "About", list: queryResults });
  });
});




module.exports = router;

const express = require("express");
const router = express.Router();
const db = require("../database/configurationSequelize");
const hour = db.hour;
const passport = require("passport");

router.post("/displayhours", function (req, res) {
  const id = req.body.id;
  console.log(req.body);
  hour
    .findAll({ attributes: ["hour"] }, { where: { account_id: id } })
    .then((response) => {
      let hourList = response.map((element) => {
        return element.dataValues;
      });

      res.send(hourList);
    })
    .catch((err) => console.log(err));
});

module.exports = router;

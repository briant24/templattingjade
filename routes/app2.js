var express = require('express');
var router = express.Router();

/* App1 - parameter di url */
router.get('/(:id)/(:category)', function(req, res, next) {
  res.render('app2', {id: req.params.id,
                      category: req.params.id,});
});

module.exports = router;

var express = require('express');
var router = express.Router();

/* App1 - render template */
router.get('/', function(req, res, next) {
  res.render('app1', { message: 'SMK Telkom Sandhy Putra Purwokerto',
                       user: {name:'Stematel', email:'stematel@smktelkom-pwt.sch.id', 
                       website:'http://smktelkom-pwt.sch.id'} });
});

module.exports = router;

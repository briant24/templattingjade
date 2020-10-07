var express = require('express');
var router = express.Router();

router.get('/', function(req,res,next) {
    res.json({
        message: 'SMK Telkom Sandhy Putra Purwokerto',
        user: {name:'Stematel', email:'stematel@smktelkom-pwt.sch.id', website:'http://smktelkom-pwt.sch.id'}
    });
});

module.exports = router;
var express = require('express');
var router = express.Router();

var checkNotLogin = require('../middlewares/check').checkLogin;

//GET /signout 登出

router.get('/',checkNotLogin,function(req,res,next){
	res.send(req.flash());
});

module.exports = router;

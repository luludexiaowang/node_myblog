var express = require('express');

var router = express.Router();

var checkNotLogin = require('../middlewares/check').checkNotLogin;

//GET /signup 注册页

router.get('/',checkNotLogin,function(req,res,next){
	res.render('signup');
})

module.exports = router;



var express = require('express')
var router =express.Router();
var passport = require('passport');
var User = require('../models/user');
var BasicStrategy = require('passport-http').BasicStrategy;

router.needsGroup = function(group){
	return function(req,res,next){
		console.log(req);
		if(req.user && req.user.role == group){
			next();		
		}
		else{
			res.send(401,'Unauthorized');
		}
	}
}

passport.use(new BasicStrategy(
  function(username, password, done) {  	
  	User.findOne({username:username},function(err,user){
  		
  		if(err){
			console.log("err",err);
			return done(err);
		}
		if(!user) {return done(null,false)}

		if(!user.validPassword(password)){
			return done(null,false);
		}
		
		return done(null,user)
	});
  		
  }
));

passport.serializeUser(function(user,done){
	done(null,user.id);
})

passport.deserializeUser(function(id,done){
	User.findById(id,function(err,user){
		if(err){
			return done(err);
		}
		done(null,user);
	});
})


router.post('/users/:username/:password/:role',
	passport.authenticate('basic',{session:false}),router.needsGroup('admin'),function(req,res){

    var usr = new User();

    usr.username = req.params['username'];
    usr.password = usr.generateHash(req.params['password']);
    usr.role = req.params['role'];
	
	usr.save(function(err){
		if (err){
			console.log(err);
			res.send("User Already Exists");
		}
		else {
			res.send("User Added");
		}
	})

});


module.exports = router;

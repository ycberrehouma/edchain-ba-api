var express = require('express')
var passport = require('passport');
var Course = require('../models/course');
var userapi = require('../routes/user-api');
var router = express.Router();

var users = require('../routes/user-api');

router.post('/courses/add', 
passport.authenticate('basic',{session:false}),
   userapi.needsGroup('admin'),
   function(req,res){
  
   var d = req.body["course"];
     
   Course.insertMany(JSON.parse(d),function(err,newCourse){
   		if (err){
			console.log(err);
			res.send("Error");
		}
		else {
			res.send("Course Added");
		}
   });

});


router.get('/courses/default',function(req,res){
	
	Course.find({}).limit(200).sort({weight:-1}).exec(function(err,docs){
		res.json(docs);
	})

});

/*
return all copyright holders with  number of courses passed
//courses/count/$value
*/

router.get('/courses/:count',function(req,res){
	
	var val=req.params['count'];
	Course.find({}).limit(parseInt(val)).sort({weight:-1}).exec(function(err,docs){
		res.json(docs);
	})

});


module.exports = router;



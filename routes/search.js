
var express = require('express')
var router =express.Router();
var passport = require('passport');
var Course = require('../models/course');

router.get('/search/courses/:searchType/:searchText',
		passport.authenticate('basic',{session:false}),
	
	function(req,res){

	
	var searchText=req.params['searchText'];
	var searchType=req.params['searchType'];
	
	Course.find({[searchType]:{$regex:searchText,$options:'i'}})
	.sort({weight:-1})
		.exec(function(err,docs){
		res.send(docs)
	});

});


router.get('/search/index/:searchText', 
	passport.authenticate('basic',{session:false}),
	function(req,res){

	var searchText=req.params['searchText'];

	Course.find({ $text: { $search: searchText }},
					{ score: { $meta:"textScore" }}
				).sort({weight:-1}).exec(function(err,docs){
					console.log(docs);
					docs.sort({score: { $meta:"textScore" }})
					res.send(docs);
				});

});


router.get('/search/:searchText', 
	passport.authenticate('basic',{session:false}),
	function(req,res){

	var searchText=req.params['searchText'];

	Course.find({
					   $or:[
						  {course_title:{$regex:searchText,$options:'i'}},
					      {instructor_name:{$regex:searchText,$options:'i'}},
					      {subject_matter:{$regex:searchText,$options:'i'}},
					      {copyright_holder:{$regex:searchText,$options:'i'}}
					      ]
					 }).sort({weight:-1}).exec(function(err,docs){
					res.send(docs);
				});

});

module.exports = router;

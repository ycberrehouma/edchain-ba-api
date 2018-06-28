const collectionStr = 'courses';
const config = require('./config/database');
const url = config.url;
const dbName = config.db;
const express = require('express')
const app = express()
const bodyParser = require('body-parser');

var users = require('./routes/user-api');
var search = require('./routes/search');
var course = require('./routes/course');

var mongoose = require('mongoose');
var MongoClient = require('mongodb').MongoClient;
var collection=null;
var User = require('./models/user');
var passport = require('passport');
var db=null;
var mongoosedb =mongoosedb=mongoose.connect(config.database);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use('/',users);
app.use('/',search);

app.use('/',course);


app.listen(3000, function(){

	MongoClient.connect(url, function(err,client){
	db = client.db(dbName);
    collection=db.collection(collectionStr);
    console.log("connected to database");

});

});


app.use(function(req, res, next){
   
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "X-Requested-With");
   res.header('Access-Control-Allow-Headers', 'Content-Type');
   console.log("Request from: "+req);
   next();
});


/*

older api post request 
@depracated
*/


app.get(function (req,res) {

	
	var reqBody = req.body;
	var responseSize = reqBody.response_size;
	var copyrightHolder = reqBody.copyright_holder;
	var category =  reqBody.subject_matter;

	if(category == undefined){
		collection.find({"copyright_holder":copyrightHolder	})
			.limit(parseInt(responseSize))
			.toArray(function(err,docs){
		res.send(docs);
	})
	}
	else{
		collection.find({"copyright_holder":copyrightHolder, 
		"subject_matter":category})
			.limit(parseInt(responseSize))
			.toArray(function(err,docs){
		res.send(docs);
	})
	}

});
/*

var Course = require('../models/course');



app.post('/course/add',
	passport.authenticate('basic',{session:false}),
	function(req,res){
   
   var course = new Course({course:req.course});

	course.save(function(err){
		if (err){
			console.log(err);
			res.send("Error");
		}
		else {
			res.send("Course Added");
		}
	})

});*/


/*
return all copyright holders with  number of courses passed
//courses/count/$value
*/
/*
app.get('/updateContentAddress',function(req,res){

	var collection=db.collection(collectionStr);
	var val=req.params['count'];
	collection.find({copyright_holder:"YaleCourses"}).forEach(
		function(myDoc){
		//console.log(myDoc.content_address,myDoc._id);
		
		myDoc.lectures.forEach(function (doc){

				console.log(doc.lecture_hyperlink,"hyper");
			
		})

		



		})
	
});*/


/*
	return courses with subject passed

*/


/*
	
	return all courses with lecture videos

*/



//search/all/$text






var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var courseSchema = new Schema({
    "content_address": {
      "type": "String"
    },
    "copyright_holder": {
      "type": "String"
    },
    "course_description": {
      "type": "String"
    },
    "course_hyperlink": {
      "type": "String"
    },
    "course_thumbnail": {
      "type": "String"
    },
    "course_title": {
      "type": "String"
    },
    "document_root": {
      "type": "String"
    },
    "instructor_name": {
      "type": "String"
    },
    "weight":{
      "type":"decimal"
    },
    "lectures": {
      "type": [
        "Mixed"
      ]
    },
    "publication_date": {
      "type": "String"
    },
    "subject_matter": {
      "type": "String"
    },
    "unique_identifier": {
      "type": "String"
    }
});



module.exports = mongoose.model('Course', courseSchema);
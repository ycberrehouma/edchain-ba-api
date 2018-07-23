# edchain-api

<br>

This is an api for the edchain android api that allows adding a new username with password and role type then verify authentication
<br>

Search through courses by course title, course provider, course instructor or course description
<br>

Count number of courses in the JSON file or return a limit number of them 
<br>

Testing queries are included that should be used/tested via  the API development environment POSTMAN

<br>

To import JSON COURSES into mongoDB Follow this command line example
mongoimport --jsonArray --mode merge --db edchain --collection courses --file C:\Users\priya\Downloads\yale_course_videos.json mongoimport --jsonArray --mode merge --db edchain --collection courses --file C:\Users\priya\Downloads\mit_may22.json

<br>
<br>

<b>Technology Used:</b> MongoDB, Javascript (ExpressJS, PassportJS, NodeJS) and JSON

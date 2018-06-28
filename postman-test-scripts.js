//check course title http://localhost:3000/search/contract

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Status code is 404 Not Found", function () {
    pm.response.to.have.status(404);
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

var contentTypeHeaderExists = responseHeaders.hasOwnProperty("Content-Type");

tests["Has Content-Type"] = contentTypeHeaderExists;

if (contentTypeHeaderExists) {
    tests["Content-Type is application/json"] =
        responseHeaders["Content-Type"].has("application/json");
}


var jsonData = JSON.parse(responseBody);
tests[" Object lecture_title Exists and not null"] = jsonData[0].lectures[0].lecture_title !== null ;

tests["Value of Object lecture_title, is matching the requested search"] = jsonData[0].lectures[0].lecture_title === 'Contract Law 1 Intro Hamer v Sidway (just say no)';





//check instructor name http://localhost:3000/search/sarina

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Status code is 404 Not Found", function () {
    pm.response.to.have.status(404);
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

var contentTypeHeaderExists = responseHeaders.hasOwnProperty("Content-Type");

tests["Has Content-Type"] = contentTypeHeaderExists;

if (contentTypeHeaderExists) {
    tests["Content-Type is application/json"] =
        responseHeaders["Content-Type"].has("application/json");
}


var jsonData = JSON.parse(responseBody);
tests[" Object lecture_title Exists and not null"] = jsonData[0].instructor_name !== null ;

tests["Value of Object lecture_title, is matching the requested search"] = jsonData[0].instructor_name === 'Sarina Canelake';


//check subject_matter http://localhost:3000/search/mechanical

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Status code is 404 Not Found", function () {
    pm.response.to.have.status(404);
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

var contentTypeHeaderExists = responseHeaders.hasOwnProperty("Content-Type");

tests["Has Content-Type"] = contentTypeHeaderExists;

if (contentTypeHeaderExists) {
    tests["Content-Type is application/json"] =
        responseHeaders["Content-Type"].has("application/json");
}


var jsonData = JSON.parse(responseBody);
tests[" Object lecture_title Exists and not null"] = jsonData[0].subject_matter !== null ;

tests["Value of Object lecture_title, is matching the requested search"] = jsonData[0].subject_matter === 'Mechanical Engineering';




//check copyright_holder http://localhost:3000/search/yalecourses

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Status code is 404 Not Found", function () {
    pm.response.to.have.status(404);
});

pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

var contentTypeHeaderExists = responseHeaders.hasOwnProperty("Content-Type");

tests["Has Content-Type"] = contentTypeHeaderExists;

if (contentTypeHeaderExists) {
    tests["Content-Type is application/json"] =
        responseHeaders["Content-Type"].has("application/json");
}


var jsonData = JSON.parse(responseBody);
tests[" Object lecture_title Exists and not null"] = jsonData[0].copyright_holder !== null ;

tests["Value of Object lecture_title, is matching the requested search"] = jsonData[0].copyright_holder === 'yalecourses';


//check if user added http://localhost:3000/users/sudo/pass/admin

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

pm.test("Status code is 404 Not Found", function () {
    pm.response.to.have.status(404);
});


pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

pm.test("Status code is 401", function () {
    pm.response.to.have.status(401);
});

pm.test("Unauthorized", function () {
    pm.expect(pm.response.text()).to.include("Unauthorized");
});


pm.test("User Added", function () {
    pm.expect(pm.response.text()).to.include("User Added");
});

pm.test("User Already Exists", function () {
    pm.expect(pm.response.text()).to.include("User Already Exists");
});












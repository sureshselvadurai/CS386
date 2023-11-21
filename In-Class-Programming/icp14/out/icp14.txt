const connectDB = require("./modules/db.js")
connectDB(true)
let  modelCourses = require("./models/CreateCoursesSchema.js")
modelCourses.find()
    .then(function(courses) {
        if(courses.length) {
            for(let course of courses){
                const prerequisites = course.preReqs.length ? course.preReqs.join(", ") : "None";
                console.log(`Course: ${course.courseID} - (${course.name}) (Prerequisites: ${prerequisites})`);
            }
        }else {
            modelCourses.insertMany([{
                courseID: "CS110",
                name: "Introduction to CS101 - I",
                preReqs: ["CS107","MATH109"]
                },{
                courseID: "MATH 109",
                name: "Calculus - I",
                preReqs: []
                },{
                courseID: "CS107",
                name: "Computing, Mobile app, & Web",
                preReqs: []
                }]).save()}
        connectDB(false);
});
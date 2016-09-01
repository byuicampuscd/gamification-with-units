/* jslint browser: true */
/* global valence.js */

/* Reminder:
            getCourseName: function () {
                return data.courseName;
            },
            getCourseID: function () {
                return data.orgUnitId;
            },
            getFirstName: function () {
                return data.firstName;
            },
            getLastName: function () {
                return data.lastName;
            },
            getGrades: function () {
                return data.grades;
            },
            getCategories: function () {
                return data.categories;
            },
            getFinalCalculatedGrade: function() {
                return data.finalCalculatedGrade;
            }
 */

valence.run(function(err, data) {
    var nameOfStudent;

    if (err !== null) {
        console.log("No error");
        nameOfStudent = data.getFirstName() + " " + data.getLastName();
    } else {
        console.log("ERROR");
    }
});
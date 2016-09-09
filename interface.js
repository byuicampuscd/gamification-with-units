/*jslint plusplus: true, browser: true, devel: true */
/*global valence */

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

var data = valence.run(function (err, data) {
    "use strict";

    if (err === null) {
        console.log("No error");
        return data;
    } else {
        console.log("ERROR");
        return err;
    }
});
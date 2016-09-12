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

var data;
var dataIsSet = false;

function startValence() {
    "use strict";
    valence.run(function (err, res) {
        if (err === null) {
            console.log("No error");
            data = res;
        } else {
            console.log("ERROR");
            data = err;
        }
        
        dataIsSet = true;
    });
}
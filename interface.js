/* jslint plusplus: true, browser: true */
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
    "use strict";

    var nameOfStudent = data.getFirstName() + " " + data.getLastName(),
        context = {
            studentName: nameOfStudent,
            units: []
        },
        categories = data.getCategories(),
        grades = data.getGrades(),
        i,
        catName,
        tempUnits = [];

    function findCategory(gradeItem) {
        "use strict";
        var i;
        for (i = 0; i < categories.length; ++i) {
            if (categories[i].catID === gradeItem.catID) {
                return categories[i].catName;
            }
        }

        return "";
    }

    if (err === null) {
        console.log("No error");

        // Go through the different grades
        for (i = 0; i < grades.length; ++i) {
            catName = findCategory(grades[i]);

            // Check if the Unit already exists or not
            if (tempUnits[catName] === undefined) {
                tempUnits[catName] = { numerator: 0, denominator: 0 };
            }

            // Check if grade is graded
            if (grades[i].weightedNumerator !== null) {
                tempUnits[catName].numerator += grades[i].weightedNumerator;
                tempUnits[catName].denominator += grades[i].weightedDenominator;
            } else if (grades[i].pointsNumerator !== null) {
                tempUnits[catName].numerator += grades[i].pointsNumerator;
                tempUnits[catName].denominator += grades[i].pointsDenominator;
            }
        }

        // Add the unit to the context
        for (i = 0; i < tempUnits.length; ++i) {
            context.units.push({
                requiredPer: tempUnits["Unit" + parseInt(i + 1) + "Required"].numerator /
                    tempUnits["Unit" + parseInt(i + 1) + "Required"].denominator,
                optionalPer: tempUnits["Unit" + parseInt(i + 1) + "Optional"].numerator /
                    tempUnits["Unit" + parseInt(i + 1) + "Optional"].denominator,
                unitGrade: ""
            });
        }
    } else {
        console.log("ERROR");
    }
});
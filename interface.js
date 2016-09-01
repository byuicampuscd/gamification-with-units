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
    var nameOfStudent,
        context,
        categories,
        i,
        categoryRegex,
        tempUnits = [],
        unitTemplate = {
            requiredPer: 0,
            optionalPer: 0,
            unitGrade: ""
        };

    if (err === null) {
        console.log("No error");

        // Get the name of the student
        nameOfStudent = data.getFirstName() + " " + data.getLastName();
        context = {
            studentName: nameOfStudent,
            units: []
        };

        // Go through the different categories and assign them to the proper units
        categories = data.getCategories();
        for (i = 0; i < categories.length; i++) {
            categoryRegex = /(?=.*unit)(?=.*required)(?=.*\d).*/ig;

            if (categories[i].catName.search(categoryRegex) !== -1) {
                tempUnits.push({
                    type: "required",
                    name: categories[i].catName
                });
            } else {
                categoryRegex = /(?=.*unit)(?=.*optional)(?=.*\d).*/ig;

                if (categories[i].catName.search(categoryRegex) !== -1) {
                    tempUnits.push({
                        type: "optional",
                        name: categories[i].catName
                    });
                } else {
                    // Should this do anything or just simply ignore the category?
                }
            }
        }

        // Go through the grades and begin to calculate the percentages for the unit
    } else {
        console.log("ERROR");
    }
});
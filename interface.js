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

function findCategory(gradeItem) {

}

valence.run(function(err, data) {
    var nameOfStudent,
        context,
        categories,
        validCategories = {
            Unit1Required: {
                numerator: 0,
                denominator: 0
            },
            Unit1Optional: {
                numerator: 0,
                denominator: 0
            },
            Unit2Required: {
                numerator: 0,
                denominator: 0
            },
            Unit2Optional: {
                numerator: 0,
                denominator: 0
            },
            Unit3Required: {
                numerator: 0,
                denominator: 0
            },
            Unit3Optional: {
                numerator: 0,
                denominator: 0
            },
            Unit4Required: {
                numerator: 0,
                denominator: 0
            },
            Unit4Optional: {
                numerator: 0,
                denominator: 0
            },
            Unit5Required: {
                numerator: 0,
                denominator: 0
            },
            Unit5Optional: {
                numerator: 0,
                denominator: 0
            },
            Unit6Required: {
                numerator: 0,
                denominator: 0
            },
            Unit6Optional: {
                numerator: 0,
                denominator: 0
            }
        },
        grades,
        i,
        catIndex,
        reqRegex = /(?=.*unit)(?=.*required)(?=.*\d).*/ig,
        optRegex = /(?=.*unit)(?=.*optional)(?=.*\d).*/ig,
        numRegex,
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
        //		for (i = 0; i < categories.length; i++) {
        //                  if (categories[i].catName.search(reqRegex) !== -1) {
        //                    else {
        //                      if (categories[i].catName.search(optRegex) !== -1) {
        //                        tempUnits.push({
        //                          type: "optional",
        //                        name: categories[i].catName,
        //                      id: categories[i].catID
        //                });
        //          } else {
        //            // Should this do anything or just simply ignore the category?
        //                       }
        //                 }
        //           }

        // Go through the grades
        grades = data.getGrades();
        for (i = 0; i < grades.length; i++) {
            // Find category associative index (name of category)
            catIndex = findCategory(grades[i]);

            if (catIndex !== "") {
                // Add up the numerators and denominators
                if (grades[i].weightedNumerator !== null) {
                    validCategories[catIndex].numerator += grades[i].weightedNumerator;
                    validCategories[catIndex].denominator += grades[i].weightedDenominator;
                } else {
                    validCategories[catIndex].numerator += grades[i].pointsNumerator;
                    validCategories[catIndex].denominator += grades[i].pointsDenominator;
                }
            }
        }

        // Sort validCategories by UnitNumber
    } else {
        console.log("ERROR");
    }
});
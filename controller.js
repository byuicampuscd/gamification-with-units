/*jslint plusplus: true, browser: true, devel: true */
/*global Handlebars, context, data, startValence, dataIsSet */

startValence();

var contextCreator = setInterval(function () {
    "use strict";

    var nameOfStudent = "",
        context = {
            studentName: nameOfStudent,
            units: []
        },
        categories = data.getCategories(),
        grades = data.getGrades(),
        i,
        catName,
        tempUnits = {
            length: 0
        };

    function findCategory(gradeItem) {
        var i;
        for (i = 0; i < categories.length; ++i) {
            if (categories[i].catID === gradeItem.catID) {
                return categories[i].catName;
            }
        }

        return "";
    }

    if (dataIsSet) {
        try {
            nameOfStudent = data.getFirstName() + " " + data.getLastName();
            context.studentName = nameOfStudent;
            categories = data.getCategories();
            grades = data.getGrades();

            // Go through the different grades
            for (i = 0; i < grades.length; ++i) {
                catName = findCategory(grades[i]);

                // Check if the Unit already exists or not
                if (tempUnits[catName] === undefined) {
                    tempUnits[catName] = {
                        numerator: 0,
                        denominator: 0
                    };
                    tempUnits.length++;
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
                    name: "Unit " + (i + 1),
                    requiredTop: tempUnits["Unit" + (i + 1) + "Required"].numerator,
                    requierdBot: tempUnits["Unit" + (i + 1) + "Required"].denominator,
                    optionalTop: tempUnits["Unit" + (i + 1) + "Optional"].numerator,
                    optionalBot: tempUnits["Unit" + (i + 1) + "Optional"].denominator,
                    unitGrade: "A" // TODO(GRANT): This is just hardcoded. Needs to change.
                });
            }

            document.querySelector('main').innerHTML = Handlebars.templates.uiInterface(context);
        } catch (e) {
            console.log(e.message);
        } finally {
            clearInterval(contextCreator);
        }
    }
}, 1500);

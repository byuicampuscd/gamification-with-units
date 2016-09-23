/*jslint plusplus: true, browser: true, devel: true */
/*global Handlebars, context, data, startValence, dataIsSet, constant */

/* beautify preserve:start */

/* beautify preserve:end */

var callback = function (data) {
    "use strict";
    var nameOfStudent = data.getFirstName() + " " + data.getLastName(),
        context = {
            studentName: nameOfStudent.toUpperCase(),
            courseName: data.getCourseName().toUpperCase(),
            courseGrade: "",
            units: []
        },
        categories = data.getCategories(),
        grades = data.getGrades(),
        i,
        catName,
        tempUnits = {},
        numUnits = 6,
        validCatName;

    /**
     * isValidCat
     *    This will check if the category name given (catName) is in the list of valid categories.
     **/
    function isValidCat(catName) {
        var i;

        for (i = 0; i < constant.UNIT_NAMES.length; ++i) {
            if (constant.UNIT_NAMES[i] === catName) {
                return true;
            }
        }

        return false;
    }

    try {
        if (data.getFinalCalculatedGrade() !== null) {
            context.courseGrade = data.getFinalCalculatedGrade().displayedGrade;
        } else {
            context.courseGrade = "?";
        }

        // Go through the different grades
        for (i = 0; i < grades.length; ++i) {
            catName = grades[i].catName;
            validCatName = isValidCat(catName);

            // Check if the Unit already exists or not and if it is a valid category name
            if (tempUnits[catName] === undefined && validCatName) {
                tempUnits[catName] = {
                    numerator: 0,
                    denominator: 0
                };
            }

            // If the category name is valid, check if grade is graded
            if (validCatName) {
                if (grades[i].weightedNumerator !== null) {
                    tempUnits[catName].numerator += grades[i].weightedNumerator;
                    tempUnits[catName].denominator += grades[i].weightedDenominator;
                } else if (grades[i].pointsNumerator !== null) {
                    tempUnits[catName].numerator += grades[i].pointsNumerator;
                    tempUnits[catName].denominator += grades[i].pointsDenominator;
                }
            }
        }

        // Add the unit to the context
        for (i = 0; i < numUnits; ++i) {
            context.units.push({
                name: "UNIT " + (i + 1),
                requiredTop: tempUnits["Unit" + (i + 1) + "Required"].numerator,
                requiredBot: tempUnits["Unit" + (i + 1) + "Required"].denominator,
                optionalTop: tempUnits["Unit" + (i + 1) + "Optional"].numerator,
                optionalBot: tempUnits["Unit" + (i + 1) + "Optional"].denominator
            });
        }
        console.log("context:", context);
    } catch (e) {
        console.log(e.message);
        // TODO(Grant): Perhaps we should change context to display an error message if something
        //              went wrong?
    } finally {
        document.querySelector('main').innerHTML = Handlebars.templates.uiInterface(context);
    }
};

startValence(callback);

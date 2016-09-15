/*jslint plusplus: true, browser: true, devel: true */
/*global Handlebars, context, data, startValence, dataIsSet */

var callback = function (data) {
    var nameOfStudent = data.getFirstName() + " " + data.getLastName(),
        context = {
            studentName: nameOfStudent,
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
     * findCategory
     *    This will find the category name based on the grade item given. If it is not found, and empty
     *  string is returned.
     **/
    function findCategory(gradeItem) {
        var i;
        for (i = 0; i < categories.length; ++i) {
            if (categories[i].catID === gradeItem.catID) {
                return categories[i].catName;
            }
        }

        return "";
    }

    /**
     * isValidCat
     *    This will check if the category name given (catName) is in the list of valid categories.
     **/
    function isValidCat(catName) {
        var i,
            catNames = [
                "Unit1Required",
                "Unit1Optional",
                "Unit2Required",
                "Unit2Optional",
                "Unit3Required",
                "Unit3Optional",
                "Unit4Required",
                "Unit4Optional",
                "Unit5Required",
                "Unit5Optional",
                "Unit6Required",
                "Unit6Optional"
            ];
        for (i = 0; i < catNames.length; ++i) {
            if (catNames[i] === catName) {
                return true;
            }
        }

        return false;
    }

    try {
        // Go through the different grades
        for (i = 0; i < grades.length; ++i) {
            catName = findCategory(grades[i]);
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
                name: "Unit " + (i + 1),
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
}

startValence(callback);

/*jslint plusplus: true, browser: true, devel: true */
/*global scormSuspendData */

// This is currently only the Student Workflow
var callback = function (data) {
    "use strict";
    //var scormData = scormSuspendData.getData(),
    var i,
        j,
        context = {
            nameOfStudent: data.getFirstName() + " " + data.getLastName(),
            courseName: data.getCourseName(),
            currentChosenGrade: "",
            categories: null,
            optionalGrades: []
        },
        // TODO(Grant): Loop through cats. Add properties to each cat:  numerator total and denominator of one item. Do this with optionalGrades.
        tempCats = data.getCategories();


    /* NOTE(Grant): This will NOT work right now! Either I need to loop through the grades or
                    make the categories know more about their grade items. */
    for (i = 0; i < tempCats.length; ++i) {
        tempCats[i].finalNumerator = 0;
        tempCats[i].finalDenominator = 0;
        for (j = 0; j < tempCats[i].grades.length; ++j) {
            // NOTE(Grant): There is no 'else' here.
            // Add up all the numerators
            if (tempCats[i].grades[j].weightedNumerator !== null) {
                tempCats[i].finalNumerator += tempCats[i].grades[j].weightedNumerator;
            } else if (tempCats[i].grades[j].pointsNumerator !== null) {
                tempCats[i].finalNumerator += tempCats[i].grades[j].pointsNumerator;
            }

            // Get the first grade's denominator
            if (tempCats[i].finalDenominator === 0 && tempCats[i].grades[j].weightedDenominator !== null) {
                tempCats[i].finalDenominator = tempCats[i].grades[j].weightedDenominator;
            } else if (tempCats[i].finalDenominator === 0 && tempCats[i].grades[j].pointsDenominator !== null) {
                tempCats[i].finalDenominator = tempCats[i].grades[j].pointsDenominator;
            }
        }
    }

    // NOTE(Grant): This is 
    /*if (scormData === '') {
        // First Time
        console.log("First Time");
    } else {
        // Subsequent Times
        console.log("Subsequent Times");
    }*/
};

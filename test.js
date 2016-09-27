/*jslint plusplus: true, browser: true, devel: true */
/*global scormSuspendData */

// This is currently only the Student Workflow
var data = scormSuspendData.getData();
if (data === '') {
    // First Time
    console.log("First Time");
} else {
    // Subsequent Times
    console.log("Subsequent Times");
}

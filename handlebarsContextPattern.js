/*jslint plusplus: true, browser: true, devel: true */
/*global Handlebars*/

var constant = {
    BARS_LEFT: 94,
    BARS_RIGHT: 574,
    REQUIRED_RIGHT: 386,
    OPTIONAL_LEFT: 419,
    MISSING_WIDTH: 0,
    UNIT_WEIGHTS: {
        REQUIRED: 70,
        OPTIONAL: 30
    },
    SCALE: {
        A: 93.0,
        AMINUS: 90.0,
        BPLUS: 87.0,
        B: 83.0,
        BMINUS: 80.0,
        CPLUS: 77.0,
        C: 73.0,
        CMINUS: 70.0,
        DPLUS: 67.0,
        D: 63.0,
        DMINUS: 60.0,
        F: 0.0
    }
};

function isMissingOrZero(thing) {
    "use strict";
    return thing === 0 || typeof thing === undefined || thing === null;
}

/********************** GRADE LETTER *******************************/
function getUnitGrade(thing) {
    var letter = "",
        totalPercent = ((thing.requiredTop / thing.requiredBot) * constant.UNIT_WEIGHTS.REQUIRED +
            (thing.optionalTop / thing.optionalBot) * constant.UNIT_WEIGHTS.OPTIONAL);

    if (thing.requiredBot === 0 && thing.optionalBot === 0) {
        letter = "";
    } else if (totalPercent >= constant.SCALE.A) {
        letter = "A";
    } else if (totalPercent >= constant.SCALE.AMINUS) {
        letter = "A-";
    } else if (totalPercent >= constant.SCALE.BPLUS) {
        letter = "B+";
    } else if (totalPercent >= constant.SCALE.B) {
        letter = "B";
    } else if (totalPercent >= constant.SCALE.BMINUS) {
        letter = "B-";
    } else if (totalPercent >= constant.SCALE.CPLUS) {
        letter = "C+";
    } else if (totalPercent >= constant.SCALE.C) {
        letter = "C";
    } else if (totalPercent >= constant.SCALE.CMINUS) {
        letter = "C-";
    } else if (totalPercent >= constant.SCALE.DPLUS) {
        letter = "D+";
    } else if (totalPercent >= constant.SCALE.D) {
        letter = "D";
    } else if (totalPercent >= constant.SCALE.DMINUS) {
        letter = "D-";
    } else {
        letter = "F";
    }

    return letter;
}

Handlebars.registerHelper('ifUnitGrade', function (block) {
    "use strict";
    if (getUnitGrade(this) !== "") {
        return block.fn(this);
    }
});

Handlebars.registerHelper('unitGrade', function () {
    "use strict";
    return getUnitGrade(this);
});

/********************** BAR WIDTHS *******************************/
Handlebars.registerHelper('requiredWidth', function () {
    "use strict";
    //error check
    if (isMissingOrZero(this.requiredBot)) {
        return constant.MISSING_WIDTH;
    }

    var percent = this.requiredTop / this.requiredBot,
        diff = constant.REQUIRED_RIGHT - constant.BARS_LEFT;
    return (percent * diff).toFixed(0);
});

Handlebars.registerHelper('optionalWidth', function () {
    "use strict";
    //error check
    if (isMissingOrZero(this.optionalBot)) {
        return constant.MISSING_WIDTH;
    }

    var percent = this.optionalTop / this.optionalBot,
        diff = constant.BARS_RIGHT - constant.OPTIONAL_LEFT;
    return (percent * diff).toFixed(0);
});

function makeUnitRequiredWidth(thing) {
    "use strict";
    //error check
    if (isMissingOrZero(thing.requiredBot)) {
        return constant.MISSING_WIDTH;
    }

    var percent = thing.requiredTop / thing.requiredBot * constant.UNIT_WEIGHTS.REQUIRED / 100,
        diff = constant.BARS_RIGHT - constant.BARS_LEFT;
    return Math.round(percent * diff);
}

Handlebars.registerHelper('unitRequiredWidth', function () {
    "use strict";
    return makeUnitRequiredWidth(this).toFixed(0);
});

Handlebars.registerHelper('unitOptionalWidth', function () {
    "use strict";
    //error check
    if (isMissingOrZero(this.optionalBot)) {
        return constant.MISSING_WIDTH;
    }

    var percent = this.optionalTop / this.optionalBot * constant.UNIT_WEIGHTS.OPTIONAL / 100,
        diff = constant.BARS_RIGHT - constant.BARS_LEFT;
    return (percent * diff).toFixed(0);
});

Handlebars.registerHelper('unitOptionalLeft', function () {
    "use strict";
    return constant.BARS_LEFT + makeUnitRequiredWidth(this);
});

/**************************** DISPLAYED NUMBERS ********************************/
Handlebars.registerHelper('unitPercent', function () {
    "use strict";
    var requiredPer = this.requiredTop / this.requiredBot * constant.UNIT_WEIGHTS.REQUIRED / 100,
        optionalPer = this.optionalTop / this.optionalBot * constant.UNIT_WEIGHTS.OPTIONAL / 100;
    return ((requiredPer + optionalPer) * 100).toFixed(0);
});

Handlebars.registerHelper('unitRequiredTop', function () {
    "use strict";
    var required = this.requiredTop / this.requiredBot * constant.UNIT_WEIGHTS.REQUIRED;
    return required.toFixed(0);
});

Handlebars.registerHelper('unitOptionalTop', function () {
    "use strict";
    var optional = this.optionalTop / this.optionalBot * constant.UNIT_WEIGHTS.OPTIONAL;
    return optional.toFixed(0);
});

/************************************ TRIANGLES *************************************/

Handlebars.registerHelper('triangleLeft', function (leftIn, offset) {
    "use strict";

    var left = parseInt(leftIn, 10);
    //is it not a number?
    if (isNaN(left)) {
        left = constant[leftIn];
    }

    offset = parseFloat(offset);

    return left + offset;
});

/************************************ OTHER *********************************************/
Handlebars.registerHelper('addOne', function (numIn) {
    "use strict";

    return parseInt(numIn, 10) + 1;
});

/************************************ OLD *********************************************
//Caculated Unit Scores

//Display numbers
Handlebars.registerHelper('width', function (fill, xStart) {
    "use strict";
    return fill - xStart;
});

Handlebars.registerHelper('fillRequired', function () {
    "use strict";
    var percent = this.requiredTop / this.requiredBot,
        x1 = 94,
        x2 = 386,
        diff = x2 - x1;
    return x1 + (percent * diff);
});

Handlebars.registerHelper('fillOptional', function () {
    "use strict";
    var percent = this.optionalTop / this.optionalBot,
        x1 = 419,
        x2 = 574,
        diff = x2 - x1;
    return x1 + (percent * diff);
});

function makefillUnitRequired(data) {
    "use strict";
    var percent = data.requiredTop / data.requiredBot * constant.UNIT_WEIGHTS.REQUIRED / 100,
        x1 = 94,
        x2 = 574,
        diff = x2 - x1;
    return x1 + (percent * diff);
}

Handlebars.registerHelper('fillUnitRequired', function () {
    "use strict";
    return makefillUnitRequired(this);
});

Handlebars.registerHelper('widthUnitOptional', function () {
    "use strict";
    var percent = this.optionalTop / this.optionalBot * constant.UNIT_WEIGHTS.OPTIONAL / 100,
        x1 = 94,
        x2 = 574,
        diff = x2 - x1;
    return percent * diff;
});

Handlebars.registerHelper('transformUnitOptional', function () {
    "use strict";
    var percent = this.optionalTop / this.optionalBot * constant.UNIT_WEIGHTS.OPTIONAL / 100,
        x1 = 94,
        x2 = 574,
        diff = x2 - x1;
    return percent * diff;
});
*/

/*jslint plusplus: true, browser: true, devel: true */
/*global Handlebars*/

/*
var context = {
    studentName: "First Last",
    units: [
        {
            name: "Renaissance",
            requiredTop: 430,
            requiredBottom: 500,
            optionalTop: 175,
            optionalBottom: 300,
            unitGrade: "B+"
        }, {
            name: "Baroque",
            requiredTop: 0,
            requiredBottom: 500,
            optionalTop: 0,
            optionalBottom: 300,
            unitGrade: "F"
        }, {
            name: "Techno",
            requiredTop: 500,
            requiredBottom: 500,
            optionalTop: 300,
            optionalBottom: 300,
            unitGrade: "A+"
        }, {
            name: "Country",
            requiredTop: 500,
            requiredBottom: 500,
            optionalTop: 0,
            optionalBottom: 300,
            unitGrade: "A+"
        }
    ]
};
*/

var context = {
    studentName: "First Last",
    units: []
};

var UNIT_WEIGHTS = {
    REQUIRED: 70,
    OPTIONAL: 30
};

//Caculated Unit Scores
Handlebars.registerHelper('unitPercent', function () {
    "use strict";
    var requiredPer = this.requiredTop / this.requiredBottom * UNIT_WEIGHTS.REQUIRED / 100,
        optionalPer = this.optionalTop / this.optionalBottom * UNIT_WEIGHTS.OPTIONAL / 100;
    return ((requiredPer + optionalPer) * 100).toFixed(0);
});

Handlebars.registerHelper('unitRequiredTop', function () {
    "use strict";
    var required = this.requiredTop / this.requiredBottom * UNIT_WEIGHTS.REQUIRED;
    return required.toFixed(0);
});

Handlebars.registerHelper('unitOptionalTop', function () {
    "use strict";
    var optional = this.optionalTop / this.optionalBottom * UNIT_WEIGHTS.OPTIONAL;
    return optional.toFixed(0);
});

//Display numbers
Handlebars.registerHelper('width', function (fill, xStart) {
    "use strict";
    return fill - xStart;
});

Handlebars.registerHelper('fillRequired', function () {
    "use strict";
    var percent = this.requiredTop / this.requiredBottom,
        x1 = 94,
        x2 = 386,
        diff = x2 - x1;
    return x1 + (percent * diff);
});

Handlebars.registerHelper('fillOptional', function () {
    "use strict";
    var percent = this.optionalTop / this.optionalBottom,
        x1 = 419,
        x2 = 574,
        diff = x2 - x1;
    return x1 + (percent * diff);
});

function makefillUnitRequired(data) {
    "use strict";
    var percent = data.requiredTop / data.requiredBottom * UNIT_WEIGHTS.REQUIRED / 100,
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
    var percent = this.optionalTop / this.optionalBottom * UNIT_WEIGHTS.OPTIONAL / 100,
        x1 = 94,
        x2 = 574,
        diff = x2 - x1;
    return percent * diff;
});

Handlebars.registerHelper('transformUnitOptional', function () {
    "use strict";
    var percent = this.optionalTop / this.optionalBottom * UNIT_WEIGHTS.OPTIONAL / 100,
        x1 = 94,
        x2 = 574,
        diff = x2 - x1;
    return percent * diff;
});



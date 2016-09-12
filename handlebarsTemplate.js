(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['uiInterface'] = template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3=container.escapeExpression, alias4="function";

  return "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 900 400\">\r\n    <g id=\"bg\">\r\n        <rect width=\"900\" height=\"400\" class=\"bgDark\" />\r\n    </g>\r\n    <g id=\"everythingElse\">\r\n        <!--  bg  -->\r\n        <rect x=\"90.4\" y=\"157.5\" width=\"486.4\" height=\"48.3\" class=\"bgDark\" />\r\n        \r\n        <!--  light gray box in bg and lines on sides  -->\r\n        <path d=\"M859 27.2v21.3 303 21.3h-5.6H46.7 41v-21.3 -303V27.2h5.6 806.6H859M862.4 23.8H859h-5.6H46.7 41h-3.4v3.4 21.3 303 21.3 3.4H41h5.6 806.6 5.6 3.4v-3.4 -21.3 -303V27.2 23.8L862.4 23.8z\" fill=\"#4C4C4D\" />\r\n        <line x1=\"28.8\" y1=\"23.6\" x2=\"28.8\" y2=\"376.6\" class=\"bgLight\" />\r\n        <line x1=\"871.2\" y1=\"23.6\" x2=\"871.2\" y2=\"376.6\" class=\"bgLight\" />\r\n        \r\n        <!--paths-->\r\n<!--        <path d=\"M574.3 160v43.2H93V160H574.3M580.2 154.1h-3.4H90.4 87v3.4 48.3 3.4h3.4 486.4 3.4v-3.4 -48.3V154.1L580.2 154.1z\" class=\"bgLight\" />-->\r\n<!--        <path d=\"M574.3 279.2v43.2H417.8v-43.2H574.3M580.2 273.3h-2.4H414.2h-2.4v3.4 48.3 3.4h2.4 163.6 2.4v-3.4 -48.3V273.3L580.2 273.3z\" class=\"green\" />-->\r\n<!--        <path d=\"M387.8 279.2v43.2H93v-43.2H387.8M393.fillUnitOptional7 273.3h-4.4 -298H87v3.4 48.3 3.4h4.4 298 4.4v-3.4 -48.3V273.3L393.7 273.3z\" class=\"bgLight\" />-->\r\n         \r\n        <!-- fills -->\r\n        <rect x=\"93\" y=\"162.5\" width=\""
    + alias3((helpers.width || (depth0 && depth0.width) || alias2).call(alias1,(helpers.fillUnitRequired || (depth0 && depth0.fillUnitRequired) || alias2).call(alias1,{"name":"fillUnitRequired","hash":{},"data":data}),93,{"name":"width","hash":{},"data":data}))
    + "\" height=\"38.5\" class=\"green\" />\r\n        <rect x=\""
    + alias3(((helper = (helper = helpers.fillUnitRequired || (depth0 != null ? depth0.fillUnitRequired : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"fillUnitRequired","hash":{},"data":data}) : helper)))
    + "\" y=\"162.5\" width=\""
    + alias3(((helper = (helper = helpers.widthUnitOptional || (depth0 != null ? depth0.widthUnitOptional : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"widthUnitOptional","hash":{},"data":data}) : helper)))
    + "\" height=\"38.5\" class=\"blue\" />\r\n        <rect x=\"93\" y=\"282\" width=\""
    + alias3((helpers.width || (depth0 && depth0.width) || alias2).call(alias1,(helpers.fillRequired || (depth0 && depth0.fillRequired) || alias2).call(alias1,{"name":"fillRequired","hash":{},"data":data}),93,{"name":"width","hash":{},"data":data}))
    + "\" height=\"38\" class=\"green\" />\r\n        <rect x=\"418\" y=\"282\" width=\""
    + alias3((helpers.width || (depth0 && depth0.width) || alias2).call(alias1,(helpers.fillOptional || (depth0 && depth0.fillOptional) || alias2).call(alias1,{"name":"fillOptional","hash":{},"data":data}),418,{"name":"width","hash":{},"data":data}))
    + "\" height=\"38\" class=\"blue\" />\r\n        \r\n        <!-- white outlines -->\r\n        <path d=\"M580.2 154.1v3.4 48.3 3.4h-3.4H90.4 87v-3.4 -48.3 -3.4h3.4 486.4H580.2M583.6 150.7h-3.4 -3.4H90.4 87h-3.4v3.4 3.4 48.3 3.4 3.4H87h3.4 486.4 3.4 3.4v-3.4 -3.4 -48.3 -3.4V150.7L583.6 150.7z\" class=\"white\" />\r\n        <path d=\"M393.7 273.3v3.4 48.3 3.4h-4.4 -298H87v-3.4 -48.3 -3.4h4.4 298H393.7M397.1 269.9h-3.4 -4.4 -298H87h-3.4v3.4 3.4 48.3 3.4 3.4H87h4.4 298 4.4 3.4v-3.4 -3.4 -48.3 -3.4V269.9L397.1 269.9z\" class=\"white\" />\r\n        <path d=\"M580.2 273.3v3.4 48.3 3.4h-2.4H414.2h-2.4v-3.4 -48.3 -3.4h2.4 163.6H580.2M583.6 269.9h-3.4 -2.4H414.2h-2.4 -3.4v3.4 3.4 48.3 3.4 3.4h3.4 2.4 163.6 2.4 3.4v-3.4 -3.4 -48.3 -3.4V269.9L583.6 269.9z\" class=\"white\" />\r\n        <text transform=\"matrix(0.83 0 0 1 93.1226 65.3384)\" font-size=\"31\" class=\"white\">\r\n            "
    + alias3(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "\r\n        </text>\r\n        <text transform=\"matrix(0.83 0 0 0.9 93.1226 80.7705)\" font-size=\"15\" class=\"white\">\r\n            UNIT "
    + alias3(((helper = (helper = helpers.index || (data && data.index)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"index","hash":{},"data":data}) : helper)))
    + "\r\n        </text>\r\n        <path d=\"M821 154.1v10.8 152.7 10.8h-1.4H624.4 623v-10.8V164.8v-10.8h1.4 195.3H821M824.4 150.7H821h-1.4H624.4 623h-3.4v3.4 10.8 152.7 10.8 3.4h3.4 1.4 195.3 1.4 3.4v-3.4 -10.8V164.8v-10.8V150.7L824.4 150.7z\" class=\"white\" />\r\n        <text transform=\"matrix(0.83 0 0 1 624.7793 144.043)\" font-size=\"30.6015\" class=\"white\">\r\n            UNIT GRADE\r\n        </text>\r\n        <g id=\"unitPercent\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.unitGrade : depth0),{"name":"if","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </g>\r\n        <text transform=\"matrix(0.83 0 0 1 92.2095 124.043)\" font-size=\"30.6015\" class=\"white\">\r\n            UNIT PROGRESS\r\n        </text>\r\n        <text transform=\"matrix(0.83 0 0 1 92.2095 354.7305)\" font-size=\"23.8012\" class=\"green\">\r\n            MANDATORY\r\n        </text>\r\n        <text transform=\"matrix(0.83 0 0 1 295.9746 319.7305)\" font-size=\"18\" class=\"white\">\r\n            70% WEIGHT\r\n        </text>\r\n        <text transform=\"matrix(0.83 0 0 1 417.2085 354.7305)\" font-size=\"23.8012\" class=\"lightBlue\">\r\n            ELECTIVE\r\n        </text>\r\n        <text transform=\"matrix(0.83 0 0 1 483.9746 319.7305)\" font-size=\"18\" class=\"white\">\r\n            30% WEIGHT\r\n        </text>\r\n    </g>\r\n    <g id=\"unitStatus\">\r\n        <text transform=\"matrix(0.83 0 0 1 725.3721 354.7305)\" font-size=\"23.8012\" class=\"white\">\r\n            PASSING \r\n        </text>\r\n    </g>\r\n    <g id=\"unitGrade\">\r\n        <text  transform=\"scale(0.96)\" x=\"750\" y=\"310\" text-anchor=\"middle\" font-size=\"170\" letter-spacing=\"-4.2\" class=\"white\">\r\n            "
    + alias3(((helper = (helper = helpers.unitGrade || (depth0 != null ? depth0.unitGrade : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"unitGrade","hash":{},"data":data}) : helper)))
    + "\r\n        </text>\r\n    </g>\r\n    <g id=\"unitMandatory\" transform=\"translate("
    + alias3(((helper = (helper = helpers.fillUnitRequired || (depth0 != null ? depth0.fillUnitRequired : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"fillUnitRequired","hash":{},"data":data}) : helper)))
    + " 144.043)\">\r\n        <text transform=\"scale(0.83 1)\" text-anchor=\"middle\"  font-size=\"20\" class=\"green\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.unitGrade : depth0),{"name":"if","hash":{},"fn":container.program(4, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </text>\r\n        <polygon points=\"-14 2 14 2 0 10\" class=\"green triangle\" />\r\n    </g>\r\n    <g id=\"unitElective\" transform=\"translate(403 233)\" >\r\n        <text transform=\"scale(0.83 1)\" text-anchor=\"middle\" font-size=\"20\" class=\"lightBlue\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.unitGrade : depth0),{"name":"if","hash":{},"fn":container.program(6, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </text>\r\n        <polygon points=\"-14 -16 14 -16 0 -24\" class=\"lightBlue triangle\" />\r\n    </g>\r\n    <g id=\"mandatory\" class=\"pointer\" transform=\"translate("
    + alias3(((helper = (helper = helpers.fillRequired || (depth0 != null ? depth0.fillRequired : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"fillRequired","hash":{},"data":data}) : helper)))
    + " 264)\">\r\n        <text transform=\"scale(0.83 1)\" text-anchor=\"middle\" font-size=\"20\"  class=\"green\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.unitGrade : depth0),{"name":"if","hash":{},"fn":container.program(8, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </text>\r\n        <polygon points=\"-14 2 14 2 0 10\" class=\"green triangle\" />\r\n    </g>\r\n    <g id=\"elective\" transform=\"translate("
    + alias3(((helper = (helper = helpers.fillOptional || (depth0 != null ? depth0.fillOptional : depth0)) != null ? helper : alias2),(typeof helper === alias4 ? helper.call(alias1,{"name":"fillOptional","hash":{},"data":data}) : helper)))
    + " 264.25)\">\r\n        <text  transform=\"scale(0.83 1)\" text-anchor=\"middle\" font-size=\"20\" class=\"lightBlue\">\r\n"
    + ((stack1 = helpers["if"].call(alias1,(depth0 != null ? depth0.unitGrade : depth0),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "        </text>\r\n        <polygon points=\"-14 2 14 2 0 10\" class=\"lightBlue triangle\" />\r\n    </g>\r\n</svg>\r\n\r\n";
},"2":function(container,depth0,helpers,partials,data) {
    var helper;

  return "            <text  x=\"575\" y=\"200\" text-anchor=\"end\" font-size=\"47\" class=\"white\">\r\n                "
    + container.escapeExpression(((helper = (helper = helpers.unitPercent || (depth0 != null ? depth0.unitPercent : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"unitPercent","hash":{},"data":data}) : helper)))
    + "%\r\n            </text>\r\n";
},"4":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                "
    + container.escapeExpression(((helper = (helper = helpers.unitRequiredTop || (depth0 != null ? depth0.unitRequiredTop : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"unitRequiredTop","hash":{},"data":data}) : helper)))
    + "&#x2F;70\r\n";
},"6":function(container,depth0,helpers,partials,data) {
    var helper;

  return "                "
    + container.escapeExpression(((helper = (helper = helpers.unitOptionalTop || (depth0 != null ? depth0.unitOptionalTop : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},{"name":"unitOptionalTop","hash":{},"data":data}) : helper)))
    + "&#x2F;30\r\n";
},"8":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                "
    + alias4(((helper = (helper = helpers.requiredTop || (depth0 != null ? depth0.requiredTop : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"requiredTop","hash":{},"data":data}) : helper)))
    + "&#x2F;"
    + alias4(((helper = (helper = helpers.requiredBottom || (depth0 != null ? depth0.requiredBottom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"requiredBottom","hash":{},"data":data}) : helper)))
    + "\r\n";
},"10":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "                "
    + alias4(((helper = (helper = helpers.optionalTop || (depth0 != null ? depth0.optionalTop : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"optionalTop","hash":{},"data":data}) : helper)))
    + "&#x2F;"
    + alias4(((helper = (helper = helpers.optionalBottom || (depth0 != null ? depth0.optionalBottom : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"optionalBottom","hash":{},"data":data}) : helper)))
    + "\r\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div class=\"wrapper\">\r\n<h1>"
    + alias4(((helper = (helper = helpers.studentName || (depth0 != null ? depth0.studentName : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"studentName","hash":{},"data":data}) : helper)))
    + "</h1>\r\n<div class=\"units\">\r\n   <div class=\"unit\">\r\n        <div class=\"unitSection\">\r\n           <div class=\"unitContainer container\">\r\n                    <div class=\"unitGrade\" style=\"left:calc("
    + alias4(((helper = (helper = helpers.requiredPer || (depth0 != null ? depth0.requiredPer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"requiredPer","hash":{},"data":data}) : helper)))
    + "%  * 0.7 + "
    + alias4(((helper = (helper = helpers.optionalPer || (depth0 != null ? depth0.optionalPer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"optionalPer","hash":{},"data":data}) : helper)))
    + "% * 0.3 - 0.5%)\"><div class=\"down arrow\">"
    + alias4(((helper = (helper = helpers.unitGrade || (depth0 != null ? depth0.unitGrade : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"unitGrade","hash":{},"data":data}) : helper)))
    + "</div></div>\r\n                <div class=\"unitBar bar\">\r\n                    <div class=\"innerBar\" style=\"width:calc(("
    + alias4(((helper = (helper = helpers.requiredPer || (depth0 != null ? depth0.requiredPer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"requiredPer","hash":{},"data":data}) : helper)))
    + "% - 6px) * 0.7)\"></div>\r\n                    <div class=\"innerBar\" style=\"width:calc(("
    + alias4(((helper = (helper = helpers.optionalPer || (depth0 != null ? depth0.optionalPer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"optionalPer","hash":{},"data":data}) : helper)))
    + "% - 6px) * 0.3 )\"></div>\r\n                </div>\r\n                <p>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\r\n            </div>\r\n        </div>\r\n        <div class=\"keySection\">\r\n            <div class=\"requiredContainer\">\r\n                <div class=\"reqiredBar bar\">\r\n                    <div class=\"innerBar\" style=\"width:calc("
    + alias4(((helper = (helper = helpers.requiredPer || (depth0 != null ? depth0.requiredPer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"requiredPer","hash":{},"data":data}) : helper)))
    + "% - 6px)\"></div>\r\n                </div>\r\n                <p>Required</p>\r\n            </div>\r\n            <div class=\"optionalContainer\">\r\n                <div class=\"optionalBar bar\">\r\n                    <div class=\"innerBar\" style=\"width:calc("
    + alias4(((helper = (helper = helpers.optionalPer || (depth0 != null ? depth0.optionalPer : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"optionalPer","hash":{},"data":data}) : helper)))
    + "% - 6px)\"></div>\r\n                </div>\r\n                <p>Optional</p>\r\n            </div>\r\n        </div> \r\n   </div>\r\n"
    + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.units : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "</div>\r\n<img src=\"ui.jpg\">\r\n</div>";
},"useData":true});
})();
/*global QUnit*/

jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-2-css");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

 
sap.ui.require([
	"sap/ui/test/Opa5",
	"sap/ui/demo/bulletinboard/test/integration/pages/Common",
	"sap/ui/demo/bulletinboard/test/integration/pages/Worklist",
	"sap/ui/demo/bulletinboard/test/integration/pages/Browser",
	"sap/ui/demo/bulletinboard/test/integration/pages/Post"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({ 
		arrangements: new Common(),
		viewNamespace: "sap.ui.demo.bulletinboard.view.",
		autoWait: true,
		visible: true	// if visible is true (it is by default), the controls also need to be rendered
	});

	sap.ui.require([ 
		"sap/ui/demo/bulletinboard/test/integration/PostJourney",
		"sap/ui/demo/bulletinboard/test/integration/WorkListJourney"
	], function () {
		QUnit.start();
	});
});
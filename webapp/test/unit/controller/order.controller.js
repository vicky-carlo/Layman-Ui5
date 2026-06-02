/*global QUnit*/

sap.ui.define([
	"masterdetail/masterdetail/controller/order.controller"
], function (Controller) {
	"use strict";

	QUnit.module("order Controller");

	QUnit.test("I should test the order controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});

// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
(function() {
	"use strict";

	var Testem = require("testem/lib/api");
	var Config = require("testem/lib/config");

	exports.runTests = function(requiredBrowsers, success, fail) {
		var testem = new Testem();
		testem.startCI({}, function(failed) {
			if (failed) fail("Testem failed");
			else success();
		});
	};

	function checkRequiredBrowsers(requiredBrowsers, stdout) {
		var browserMissing = false;
		requiredBrowsers.forEach(function(browser) {
			browserMissing = lookForBrowser(browser, stdout.capturedOutput) || browserMissing;
		});
		return browserMissing;
	}

	function lookForBrowser(browser, output) {
		var missing = output.indexOf(browser + ": Executed") === -1;
		if (missing) console.log(browser + " was not tested!");
		return missing;
	}

}());
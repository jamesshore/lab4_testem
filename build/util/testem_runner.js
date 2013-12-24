// Copyright (c) 2012 Titanium I.T. LLC. All rights reserved. See LICENSE.txt for details.
(function() {
	"use strict";

	var DevApp = require("testem/lib/dev");
	var Config = require("testem/lib/config");

	exports.runTests = function(requiredBrowsers, success, fail) {
		var browsers = 0;
		var passed = 0;
		var failed = 0;
		var allRunners = 0;

		var config = new Config("dev", {});

		var app = new DevApp(config, function() {
			console.log("Finalizer called");
			success();
		});

		app.on("all-test-results", function(results, browser) {
			browsers++;
			passed += results.get("passed");
			failed += results.get("failed");
		});

		app.on("all-runners-complete", function() {
			allRunners++;
			console.log("ALL RUNNERS COMPLETE", allRunners);
			console.log("BROWSERS RUN", browsers);
			console.log("PASSED", passed);
			console.log("FAILED", failed);

			browsers = 0;
			passed = 0;
			failed = 0;
//			if (failed === 0) app.quit();
		});

		app.start();
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
/**
 * List of test functions
 */
var tests = [
	require('./tests/facebook.js').test,
	require('./tests/other.js').test
];


/**
 * 
 * 
 * @param {type} message
 * @param {type} url
 * @param {type} lineNumber
 * @param {type} columnNumber
 * @param {type} errorObj
 * @returns {Boolean}
 */
exports.checkError = function (message, url, lineNumber, columnNumber, errorObj) {
	// Check each test type
	for (var i = 0; i < tests.length; i += 1) {
		var testFn = tests[i];
		var result = testFn(message, url, lineNumber, columnNumber, errorObj);
		if (result) {
			return result;
		}
	}

	// If no test failed return false
	return false;
};
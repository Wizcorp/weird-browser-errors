var escapeRegexp = require('escape-regexp');


/**
 * List of string tokens that should be flagged
 */
var flagStrings = [
	'fb_xd_fragment'
];


/**
 * List of url tokens that should be flagged
 */
var flagUrls = [
	// Facebook flakiness
	'https://graph.facebook.com',

	// Facebook blocked
	'http://connect.facebook.net/en_US/all.js'
];


// Process above flag lists and turn them into regular expressions. This ensures the matches later
// are much quicker.
var flagStringsRegex = new RegExp(escapeRegexp(flagStrings.join('|')));
var flagUrlsRegex = new RegExp(escapeRegexp(flagUrls.join('|')));


/**
 * Test function used to match facebook known issues
 * 
 * @param {type} message
 * @param {type} url
 * @returns {Boolean}
 */
exports.test = function (message, url) {
	// Check if the error message contained a token we should flag
	if (message.match(flagStringsRegex)) {
		return true;
	}

	// Check if the url should be flagged
	if (url.match(flagUrlsRegex)) {
		return true;
	}

	// Otherwise return false
	return false;
};
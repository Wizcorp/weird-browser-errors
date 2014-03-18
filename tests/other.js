/**
 * List of string tokens that should be flagged
 */
var flagStrings = [
	'top.GLOBALS',
	'canvas.contentDocument',
	'MyApp_RemoveAllHighlights',
	'http://tt.epicplay.com',
	'Can\'t find variable: ZiteReader',
	'jigsaw is not defined',
	'ComboSearch is not defined',
	'http://loading.retry.widdit.com/',
	'atomicFindClose',

	// See: http://blog.errorception.com/2012/03/tale-of-unfindable-js-error.html
	'originalCreateNotification',

	// Probably comes from extensions: http://stackoverflow.com/questions/5913978/cryptic-script-error-reported-in-javascript-in-chrome-and-firefox
	'Script error.'
];


/**
 * List of url tokens that should be flagged
 */
var flagUrls = [
	// Woopra flakiness
	'http://eatdifferent.com.woopra-ns.com',
	'http://static.woopra.com/js/woopra.js',

	// Chrome extensions
	'extensions/',

	// Other (from plugins)
	'http://127.0.0.1:4001/isrunning', // Cacaoweb
	'http://webappstoolbarba.texthelp.com/',
	'http://metrics.itunes.apple.com.edgesuite.net/'
];


// Process above flag lists and turn them into regular expressions. This ensures the matches later
// are much quicker.
var flagStringsRegex = new RegExp(flagStrings.join('|'));
var flagUrlsRegex = new RegExp(flagUrls.join('|'));


/**
 * Test function used to match other unknown issues
 * 
 * @param {type} message
 * @param {type} url
 * @param {type} lineNumber
 * @param {type} columnNumber
 * @param {type} errorObj
 * @returns {Boolean}
 */
exports.test = function (message, url, lineNumber, columnNumber, errorObj) {
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
/**
 * @name storm-file-input: Tests support for and wraps file input to style and surface filename
 * @version 0.1.1: Mon, 16 Jan 2017 17:12:12 GMT
 * @author stormid
 * @license MIT
 */
(function(root, factory) {
   var mod = {
       exports: {}
   };
   if (typeof exports !== 'undefined'){
       mod.exports = exports
       factory(mod.exports)
       module.exports = mod.exports.default
   } else {
       factory(mod.exports);
       root.StormFileInput = mod.exports.default
   }

}(this, function(exports) {
   'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});
var defaults = {
	message: '',
	fileClassName: 'filename',
	noSupportClassName: 'no--fileinput'
};

var test = exports.test = function test() {
	var isFileInputSupported = function () {
		var ua = window.navigator.userAgent;
		if (ua.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) {
			return false;
		}
		if (!!ua.match(/iPad/i) || !!ua.match(/iPhone/i) || !!ua.match(/CriOS/i)) {
			return false;
		}
		var el = document.createElement('input');
		el.type = 'file';
		return !el.disabled;
	}();

	if (isFileInputSupported) return true;

	document.documentElement.classList.add(defaults.noSupportClassName);
	return false;
};

var init = function init(sel) {
	var els = [].slice.call(document.querySelectorAll(sel));

	if (!els.length) throw new Error('File input cannot be initialised, no inputs found');

	if (!test()) return;

	[].slice.call(els).forEach(function (input) {
		var fileNameHolder = document.createElement('span'),
		    ref = void 0;

		fileNameHolder.className = defaults.fileClassName;
		ref = input.parentNode.appendChild(fileNameHolder);
		ref.innerHTML = '';
		input.addEventListener('change', function () {
			var fileNameContent = input.value.replace(/^.*[\\\/]/, '') === '' ? defaults.message : input.files ? [].slice.call(input.files).reduce(function (accumulator, current) {
				return [accumulator, current.name].join(' ');
			}, 'Selected file(s): ') : 'Selected file: ' + input.value.replace(/^.*[\\\/]/, '');
			ref.innerHTML = fileNameContent;
		});
	});
};

exports.default = { init: init };;
}));

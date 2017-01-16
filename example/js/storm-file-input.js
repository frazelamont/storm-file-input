/**
 * @name storm-file-input: Tests support for and wraps file input to style and surface filename
 * @version 0.1.1: Mon, 16 Jan 2017 17:04:51 GMT
 * @author stormid
 * @license MIT
 */
const defaults = {
	message: '',
	fileClassName: 'filename',
	noSupportClassName: 'no--fileinput'
};

export const test = () => {
	var isFileInputSupported = (function () {
		var ua = window.navigator.userAgent;
		if (ua.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) {
			return false;
		}
		if ((!!ua.match(/iPad/i) || !!ua.match(/iPhone/i)) || !!ua.match(/CriOS/i)) {
			return false;
		}
		var el = document.createElement('input');
		el.type = 'file';
		return !el.disabled;
	})();

	if (isFileInputSupported) return true;
	
	document.documentElement.classList.add(defaults.noSupportClassName);
	return false;
	
};

const init = sel => {
	let els = [].slice.call(document.querySelectorAll(sel));

	if(!els.length) throw new Error('File input cannot be initialised, no inputs found');
	
	if (!test()) return;

	[].slice.call(els).forEach(input => {
		let fileNameHolder = document.createElement('span'),
			ref;

		fileNameHolder.className = defaults.fileClassName;
		ref = input.parentNode.appendChild(fileNameHolder);
		ref.innerHTML = '';
		input.addEventListener('change', () => {
			let fileNameContent = input.value.replace(/^.*[\\\/]/, '') === '' ? defaults.message : input.files ? [].slice.call(input.files).reduce((accumulator, current) => {
				return [accumulator, current.name].join(' ');
			}, 'Selected file(s): ') : 'Selected file: ' + input.value.replace(/^.*[\\\/]/, '');
			ref.innerHTML = fileNameContent;
		});
	});
};

export default { init };
var UI = (function(w, d) {
		'use strict';

		var FileInput = require('./libs/storm-file-input'),
			init = function() {
				var support = FileInput.test() ? 'supported' : 'unsupported';

				console.log('File input ' + support);

				FileInput.init();
			};

		return {
			init: init
		};

	})(window, document, undefined);


global.STORM = {
    UI: UI
};

if('addEventListener' in window) window.addEventListener('DOMContentLoaded', STORM.UI.init, false);
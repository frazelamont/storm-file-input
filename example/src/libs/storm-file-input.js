/**
 * @name storm-toggle: Toggle UI state accessibly
 * @version 0.1.1: Wed, 22 Jun 2016 14:46:52 GMT
 * @author stormid
 * @license MIT
 */(function (root, factory) {
    if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.StormFileInput = factory();
    }
}(this, function () {
    'use strict';

    function test() {
        var isFileInputSupported = (function () {
            var ua = window.navigator.userAgent;
            if (!!ua.match(/(Android (1.0|1.1|1.5|1.6|2.0|2.1))|(Windows Phone (OS 7|8.0))|(XBLWP)|(ZuneWP)|(w(eb)?OSBrowser)|(webOS)|(Kindle\/(1.0|2.0|2.5|3.0))/)) {
                return false;
            }
            if ((!!ua.match(/iPad/i) || !!ua.match(/iPhone/i)) || !!ua.match(/CriOS/i)) {
                return false;
            }
            var el = document.createElement('input');
            el.type = 'file';
            return !el.disabled;
        })();

        if (!isFileInputSupported) {
            document.documentElement.classList.add('no-fileinput');
            return false;
        }
        return true;
    }

    function init() {
        if (!test()) { return; }
        var fileUploads = document.querySelectorAll('input[type=file]'),
            defaultMessage = '';

        if (!!!fileUploads.length) { return; }

        [].slice.call(fileUploads).forEach(function (r) {
            var fileNameHolder = document.createElement('span'),
                ref;
            fileNameHolder.className = 'form-file-name';
            ref = r.parentNode.parentNode.appendChild(fileNameHolder);
            ref.innerHTML = '';
            r.addEventListener('change', function (e) {
                var fileNameContent = r.value.replace(/^.*[\\\/]/, '') === '' ? defaultMessage : r.files ? [].slice.call(r.files).reduce(function (previous, current) {
                        return [previous, current.name].join(' ');
                    }, 'Selected file(s): ') : 'Selected file: ' + r.value.replace(/^.*[\\\/]/, '');
                ref.innerHTML = fileNameContent;
            }, true);
        });
    }

    return {
        init: init,
        test: test
    };

}));

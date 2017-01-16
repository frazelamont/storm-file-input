#Storm File Input

[![Build Status](https://travis-ci.org/mjbp/storm-file-input.svg?branch=master)](https://travis-ci.org/mjbp/storm-file-input)
[![codecov.io](http://codecov.io/github/mjbp/storm-file-input/coverage.svg?branch=master)](http://codecov.io/github/mjbp/storm-file-input?branch=master)
[![npm version](https://badge.fury.io/js/storm-file-input.svg)](https://badge.fury.io/js/storm-modal)

Tests support for and wraps file input to style and surface filename

##Example
[https://mjbp.github.io/storm-file-input](https://mjbp.github.io/storm-file-input)

##Usage
Wrap a file input to display the filename(s):

HTML
```
<div>
    <input type="file" name="f" id="f" multiple>
</div>
```
JS
```
npm i -S storm-file-input
```
either using es6 import
```
import FileInput from 'storm-file-input';

FileInput.init('input[type=file]');
```
aynchronous browser loading (use the .standalone version in the /dist folder)
```
import Load from 'storm-file-input';

Load('/content/js/async/storm-file-input.standalone.js')
    .then(() => {
        FileInput.init('input[type=file]');
    });
```


Test for file input support and add className 'no--fileinput' if none:

HTML
```
<div>
    <input type="file" name="f" id="f" multiple>
</div>
```
JS
```
npm i -S storm-file-input
```
```
import FileInput from 'storm-file-input';

FileInput.test('input[type=file]');
```

##Tests
```
npm run test
```

##Browser support
This is module has both es6 and es5 distributions. The es6 version should be used in a workflow that transpiles.

The es5 version depends unpon Object.assign, element.classList, and Promises so all evergreen browsers are supported out of the box, ie9+ is supported with polyfills. ie8+ will work with even more polyfils for Array functions and eventListeners.

##Dependencies
None

##License
MIT
#S torm File Input

[![Build Status](https://travis-ci.org/mjbp/storm-file-input.svg?branch=master)](https://travis-ci.org/mjbp/storm-file-input)
[![codecov.io](http://codecov.io/github/mjbp/storm-file-input/coverage.svg?branch=master)](http://codecov.io/github/mjbp/storm-file-input?branch=master)
[![npm version](https://badge.fury.io/js/storm-file-input.svg)](https://badge.fury.io/js/storm-file-input)

Tests support for and wraps file input to style and display the filename

## Example
[https://mjbp.github.io/storm-file-input](https://mjbp.github.io/storm-file-input)

## Usage
Test support, then wrap a file input to display the filename(s):

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
    .then(() => FileInput.init('input[type=file]'));
```

## Tests
```
npm run test
```

## Browser support
This is module has both es6 and es5 distributions. The es6 version should be used in a workflow that transpiles.

This module depends upon Object.assign, element.classList, and Promises, available in all evergreen browsers. ie9+ is supported with polyfills, ie8+ will work with even more polyfills for Array functions and eventListeners.

## Dependencies
None

## License
MIT
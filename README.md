#Storm File Input

Tests and wraps file inputs
    
##Usage
```
npm install storm-file-input
```

Initialise
```js
require('storm-file-input').init();
```

Test for file input support
```js
var FileInput = require('storm-file-input');

console.log(FileInput.test());

```

##API
    
    - init, function, wrap and addEventListener
    - test, boolean, return file input support test result
# winston-printit

## Main goal

The main is to provide a beautiful print in your console

## Usage

```javascript
let winston = require('winston');
let Console = require('winston-printit');

let logger = new winston.Logger({
  transports: [
    new Console({
      date: true, // can be null
      prefix: 'appName' // can be null
    });
  ]
});
```

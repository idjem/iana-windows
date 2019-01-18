iana-windows
---

This library exports function to help convert from IANA time zones to Windows time zones  (based on [this mapping definition](https://unicode.org/repos/cldr/trunk/common/supplemental/windowsZones.xml)).

# Installation

`npm install --save iana-windows`

# Usage


## `findWindowsTimeZone()`

```
const {findWindowsTimeZone} = require('iana-windows');

const win_tz = findWindowsTimeZone('Europe/Paris');
console.log(win_tz); // "Romance Standard Time"
```

# Credits
* [idjem](https://github.com/idjem)
* [rubenillodo](https://github.com/rubenillodo/windows-iana)' windows-iana - API inspiration

# License

MIT
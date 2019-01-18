"use strict";

const time_zone_map = require("./windowsZones.json");

const findWindowsTimeZone = function (iana = '') {
  const entrys = time_zone_map.filter(function (_a) {
    var itemName = _a.iana;
    return (itemName.indexOf(iana) != -1);
  });
  return (entrys || []).map(_timeZone => _timeZone.windowsName);
};

const findOneWindowsTimeZone = function (iana) {
  return findWindowsTimeZone(iana)[0];
};


module.exports = {findWindowsTimeZone, findOneWindowsTimeZone};

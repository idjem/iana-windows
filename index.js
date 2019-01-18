"use strict";

const time_zone_map = require("./windowsZones.json");

const findWindowsTimeZone = function (iana = '') {
  const entrys = time_zone_map.find(function (_a) {
    var itemName = _a.iana;
    return (itemName.indexOf(iana) != -1);
  });
  return (entrys || {}).windowsName;
};



module.exports = {findWindowsTimeZone};

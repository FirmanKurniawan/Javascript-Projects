"use strict";
/**
 * Enum datatype
 */
var Days;
(function (Days) {
    Days[Days["Monday"] = 1] = "Monday";
    Days[Days["Tuesday"] = 2] = "Tuesday";
    Days[Days["Wednesday"] = 3] = "Wednesday";
    Days[Days["Thursday"] = 4] = "Thursday";
    Days[Days["Friday"] = 5] = "Friday";
    Days[Days["Saturday"] = 6] = "Saturday";
    Days[Days["Sunday"] = 7] = "Sunday";
})(Days || (Days = {}));
console.log(Days.Monday);
console.log(Days.Tuesday);
// string enum
var JobDesc;
(function (JobDesc) {
    JobDesc["FE"] = "Front End";
    JobDesc["BE"] = "Back End";
    JobDesc["FS"] = "Full Stack";
    JobDesc["MP"] = "Multi Platform";
    JobDesc["CE"] = "Cloud Engineer";
})(JobDesc || (JobDesc = {}));
console.log(JobDesc.FE);

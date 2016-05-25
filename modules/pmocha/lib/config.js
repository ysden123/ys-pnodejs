// Defines list of the automation tests.
'use strict';
module.exports = function () {
    return {
        tests: [
            "google_adwords/test/auth_test.js",
            "ppc/test/*"
        ]
    };
}
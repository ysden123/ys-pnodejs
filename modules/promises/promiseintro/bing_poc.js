// Working with Bing, POC
'use strict';
var testOptions = {
  getBingAccessTokenResolve: true,
  getReportResolve: true,
  saveReportResolve: true,
};

function getBingAccessToken(credentials) {
  let promise = new Promise((resolve, reject) => {
    // Getting access token
    console.log('Getting access token for credentials: %s', credentials);

    if (testOptions.getBingAccessTokenResolve) {
      // Token has been received
      resolve('a token');
    } else {

      reject('a failure during getting the token');
    }
  });

  return promise;
}

function getReport(token) {
  let promise = new Promise((resolve, reject) => {
    // Getting a report
    console.log('Getting report with access token: %s', token);

    if (testOptions.getReportResolve) {
      // Report has been received.
      resolve('a report');
    } else {
      // Failed getting report.
      reject('a failure during getting the report.');
    }
  });

  return promise;
}

function saveReport(report) {
  let promise = new Promise((resolve, reject) => {
    // Getting a report
    console.log('Saving report %s', report);

    if (testOptions.saveReportResolve) {
      // Report has been received.
      resolve('a report');
    } else {
      // Failed getting report.
      reject('a failure during saving the report.');
    }
  });

  return promise;
}

getBingAccessToken('credentials')
  .then(token => getReport(token))
  .then(report => saveReport(report))
  .catch(err => console.log(err));

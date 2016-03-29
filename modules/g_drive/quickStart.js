// Quick start
'use strict';

var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');
// YS test
// var fileId = '1uwxKci1KXbdtif-A7Qo2t5PGQyuSgIVBNSv3yo59muk';
// yuriystest
var fileId = '19khklF7tFgLnRE-mDcnqHiqA41bKyKAWgihb9mrDOe4';
// Ben
// var fileId = '15tkRDZIXXvkSBvd_TzTwI9kkg-uV3_wrXwsgzyL2ug0';
var dest = fs.createWriteStream('c:/work/test.csv');

// If modifying these scopes, delete your previously saved credentials
// at ~/.credentials/drive-nodejs-quickstart.json
// var SCOPES = ['https://www.googleapis.com/auth/drive.metadata.readonly'];
var SCOPES = ['https://www.googleapis.com/auth/drive.readonly'];
// var SCOPES = ['https://www.googleapis.com/auth/drive'];
// var SCOPES = ['https://www.googleapis.com/auth/drive.file'];
var TOKEN_DIR = (process.env.HOME || process.env.HOMEPATH ||
    process.env.USERPROFILE) + '/.credentials/';
var TOKEN_PATH = TOKEN_DIR + 'drive-nodejs-quickstart.json';

console.log(`TOKEN_PATH: %s`, TOKEN_PATH);

// Load client secrets from a local file.
fs.readFile('client_secret.json', function processClientSecrets(err, content) {
    if (err) {
        console.log('Error loading client secret file: ' + err);
        return;
    }
    // Authorize a client with the loaded credentials, then call the
    // Drive API.
    // authorize(JSON.parse(content), listFiles);
    // authorize(JSON.parse(content), getFile);
    authorize(JSON.parse(content), exportFile);
});

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
    // console.log('credentials:');
    // console.log(credentials);
    var clientSecret = credentials.installed.client_secret;
    var clientId = credentials.installed.client_id;
    var redirectUrl = credentials.installed.redirect_uris[0];
    var auth = new googleAuth();
    var oauth2Client = new auth.OAuth2(clientId, clientSecret, redirectUrl);

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, function(err, token) {
        if (err) {
            getNewToken(oauth2Client, callback);
        } else {
            oauth2Client.credentials = JSON.parse(token);
            callback(oauth2Client);
        }
    });
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
    var authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
    });
    console.log('Authorize this app by visiting this url: ', authUrl);
    var rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });
    rl.question('Enter the code from that page here: ', function(code) {
        rl.close();
        oauth2Client.getToken(code, function(err, token) {
            if (err) {
                console.log('Error while trying to retrieve access token', err);
                return;
            }
            oauth2Client.credentials = token;
            storeToken(token);
            callback(oauth2Client);
        });
    });
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
    try {
        fs.mkdirSync(TOKEN_DIR);
    } catch (err) {
        if (err.code != 'EEXIST') {
            throw err;
        }
    }
    fs.writeFile(TOKEN_PATH, JSON.stringify(token));
    console.log('Token stored to ' + TOKEN_PATH);
}

/**
 * Lists the names and IDs of up to 10 files.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
function listFiles(auth) {
    var service = google.drive('v3');
    service.files.list({
        auth: auth,
        pageSize: 10,
        fields: "nextPageToken, files(id, name)"
    }, function(err, response) {
        if (err) {
            console.log('The API returned an error: ' + err);
            return;
        }
        var files = response.files;
        if (files.length == 0) {
            console.log('No files found.');
        } else {
            console.log('Files:');
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                console.log('%s (%s)', file.name, file.id);
            }
        }
    });
}

function exportFile(auth) {
    console.log('Exporting file...');
    // console.log('auth:', auth);
    var service = google.drive('v3');

    service.files.export({
        auth: auth,
        fileId: fileId,
        mimeType: 'text/csv'
    })
        .on('end', () => {
            console.log('Done');
        })
        .on('error', (err) => {
            console.error('Error during download', err);
        })
        .pipe(dest);
}

function getFile(auth) {
    console.log('Getting file...');
    // console.log('auth:', auth);
    var service = google.drive('v3');
 
    service.files.get({
        auth: auth,
        fileId: fileId
    })
        .on('end', () => {
            console.log('Done');
        })
        .on('error', (err) => {
            console.error('Error during download', err);
        })
        .pipe(dest);
}
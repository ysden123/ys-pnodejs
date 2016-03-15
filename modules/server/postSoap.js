// Sends POST request with SOAP

'use strict';

var https = require('https');
var qs = require('querystring');

function postWithPostData() {
    console.log('==> postWithPostData');
    
    var postData =
        '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:v9="https://bingads.microsoft.com/Reporting/v9"> \
        < soapenv:Header> \
            <v9:UserName>?</v9:UserName> \
            <v9:Password>?</v9:Password> \
            <v9:DeveloperToken>?</v9:DeveloperToken> \
            <v9:CustomerId>?</v9:CustomerId> \
            <v9:CustomerAccountId>?</v9:CustomerAccountId> \
            <v9:AuthenticationToken>?</v9:AuthenticationToken> \
            <v9:ApplicationToken>?</v9:ApplicationToken> \
        </soapenv:Header> \
        <soapenv:Body> \
            <v9:SubmitGenerateReportRequest> \
                <!--Optional: --> \
                <v9:ReportRequest> \
                    <!--Optional: --> \
                    <v9:Format>?</v9:Format > \
                    <!--Optional:--> \
                    <v9:Language>?</v9:Language > \
                    <!--Optional:--> \
                    <v9:ReportName>?</v9:ReportName > \
                    <!--Optional:--> \
                    <v9:ReturnOnlyCompleteData>?</v9:ReturnOnlyCompleteData > \
                </v9: ReportRequest > \
            </v9: SubmitGenerateReportRequest > \
       </soapenv: Body > \
    </soapenv: Envelope > ';
    
    var options = {
        hostname: 'reporting.api.bingads.microsoft.com',
        port: 443,
        path: '/Api/Advertiser/Reporting/V9/ReportingService.svc',
        method: 'POST',
        headers: {
            'Content-Type': 'text/xml',
            'Content-Length': Buffer.byteLength(postData)
        }
    };

    var req = https.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        // console.log('headers: ${qs.stringify(res.headers)}');

        res.setEncoding('utf8');

        let response = "";
        res.on('data', (chunk) => {
            //console.log(`BODY: ${chunk}`);
            response += chunk;
        });

        res.on('end', () => {
            console.log('response:');
            console.log(response);
        });
    });

    req.on('error', (e) => {
        console.log(`Problem with request: ${e.message}`);
    });

    req.write(postData);
    req.end();
}
console.info('Getting...');
postWithPostData();
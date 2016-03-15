// Sends POST request with SOAP

var https = require('https');
var qs = require('querystring');

function postWithPostData() {
    console.log('==> postWithPostData');
    var postData = '<soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:v9="https://bingads.microsoft.com/Reporting/v9">
        < soapenv:Header>
            <v9:UserName>?</v9:UserName>
                <v9:Password>?</v9:Password>
                    <v9:DeveloperToken>?</v9:DeveloperToken>
                        <v9:CustomerId>?</v9:CustomerId>
                            <v9:CustomerAccountId>?</v9:CustomerAccountId>
                                <v9:AuthenticationToken>?</v9:AuthenticationToken>
                                    <v9:ApplicationToken>?</v9:ApplicationToken>
   </soapenv: Header >
        <soapenv:Body>
            <v9:SubmitGenerateReportRequest>
            <!--Optional: -->
            <v9:ReportRequest>
            <!--Optional: -->
            <v9:Format>?</v9:Format >
            <!--Optional:-->
        <v9:Language>?</v9:Language >
            <!--Optional:-->
        <v9:ReportName>?</v9:ReportName >
            <!--Optional:-->
        <v9:ReturnOnlyCompleteData>?</v9:ReturnOnlyCompleteData >
         </v9: ReportRequest >
      </v9: SubmitGenerateReportRequest >
   </soapenv: Body >
</soapenv: Envelope > ';
    var options = {
        hostname: 'https://reporting.api.bingads.microsoft.com/Api/Advertiser/Reporting/V9/ReportingService.svc',
        port: 443,
        path: '/',
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Accept': 'application/xml',
            'Content-Length': Buffer.byteLength(postData)
        }
    };

    var req = https.request(options, (res) => {
        console.log(`STATUS: ${res.statusCode}`);
        console.log('headers: ${qs.stringify(res.headers)}');

        res.setEncoding('utf8');

        res.on('data', (chunk) => {
            console.log(`BODY: ${chunk}`);
        });

        res.on('end', () => {
            console.log('No more data in response.');
        });
    });

    req.on('error', (e) => {
        console.log(`Problem with request: ${e.message}`);
    });

    req.write(postData);
    req.end();
}
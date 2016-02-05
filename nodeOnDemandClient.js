var http = require('http');
var replyUrl =  "http://192.168.13.1:8081/nodeOnDemandClient";

var correlationId = "corrId_00001";

var postData = '<tns:CreateMeterReadings  xmlns:obj="http://iec.ch/TC57/2011/MeterReadings#" xmlns:tns="http://iec.ch/TC57/2011/MeterReadingsMessage" xmlns:msg="http://iec.ch/TC57/2011/schema/message" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://iec.ch/TC57/2011/MeterReadingsMessage ../xsd/MeterReadingsMessage.xsd">' +         
				'<tns:Header>' +                         
					'<msg:Verb>create</msg:Verb>' +
					'<msg:Noun>MeterReadings</msg:Noun>' +
					'<msg:Revision>0.1</msg:Revision>' +
					'<msg:Timestamp>2014-12-17T09:30:41.0Z</msg:Timestamp>' +    
					'<msg:ReplyAddress>' + replyUrl + '</msg:ReplyAddress>' +
					'<msg:CorrelationID>' + correlationId + '</msg:CorrelationID>' +
				'</tns:Header>' +
				'<tns:Payload>' +
					'<obj:MeterReadings>' +
						'<obj:MeterReading>' +
							'<obj:Meter>' +
								'<obj:Names>' +
									'<obj:name>16714752</obj:name>' +
								'</obj:Names>' +
							'</obj:Meter>' +               
						'</obj:MeterReading>' +        
						'<obj:ReadingType>' +                                                  
							'<obj:Names>' +
								'<obj:name>0.0.0.1.1.1.12.0.0.0.0.0.0.0.0.3.72.0</obj:name>'
							'</obj:Names>' +
						'</obj:ReadingType>' +
					'</obj:MeterReadings>' +
				'</tns:Payload>' +
			'</tns:CreateMeterReadings>';

var postRequest = {
    host: "129.192.210.50",
    port: 38080,
	path: "/rest/utilityData/meterReadings",
    method: "POST",
	body: postData,
    headers: {
		"X-ECE-PARTNER-ID": "Utility1",
		"X-ECE-SERVICE-ID": "utilityService1",
		"ECE-Suppress-AA": "true",
        "Content-Type": "text/xml",
		"user": "utilityService1",
		"password": "test"
    }
};

var buffer = "";

var req = http.request( postRequest, function( res )    {

   console.log( res.statusCode );
   var buffer = "";
   res.on( "data", function( data ) { buffer = buffer + data; } );
   res.on( "end", function( data ) { console.log( buffer ); } );

});

req.on('error', function( e ) {
    console.log('problem with request: ' + e.message);
});

//req.write( postData );
req.end();
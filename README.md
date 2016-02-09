On-demand API is used for retrieving present consumption data regarding associated 
utility within the request. User is able to get this data by setting some request and
header parameters up to his/her own environment. Both request and response within this
call operation are in XML format.

There are 3 fields in the on-demand API request body to be filled beforehand. These are 
"replyAddress", "correlationId" and "name" of the meter that on-demand request will be 
made to. replyAddress stands for if where the on-demand response will be send to, therefore 
it should be the requester's IP where the demanding application is working on. 
correlationId is a string value to differentiate each request from each other, therefore each 
call should have different correlationId from the previous one. Lastly meter name is the 
id of the meter for which the on-demand request is being carried out. 

Other than these, parameters in the request header are to be used as is. Nothing to be edit there. 

As an asynchronous event driven framework, Node.js can handle many connections can be handled 
concurrently. Upon each connection the callback is fired, but if there is no work to be done 
Node is sleeping. So once the request is sent, Node's event driven asynchronous framework enables
on-demand API to be handled where the request is made once the callback event is triggered.

After the request is sent with the above settings, application should get the present consumption 
data regarding the meter data that is requested. 



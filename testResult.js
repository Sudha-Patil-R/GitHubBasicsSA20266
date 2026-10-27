//Assignment 3: 
//Problem: Write .js script that evaluates a test case result based on HTTP 
//response status code the program should use Nester if..else statements to 
//determine result message.  
//Instructions:  
//1.create a new file named testResult.js Inside the file declare variable to store 
//status code Let responseCode=200;  
//2.use if else Nested statements to evaluate response code and print status message  
//3.Use the following logic for result evaluation: I 
//if response Code is 100-199→print: Informational  
//If response Code is 200-299→print: successful  
//If response Code is 300-399→print: Redirectional  
//If response Code is 400-499 →print: Client Error 
//If response Code is 500-599→print: Server Error For any other code →print 

let responsecode=200;

if(responsecode>=100 && responsecode<=199)
{
    console.log("it is Informational responsecode");
}
else{
    if(responsecode>=200 && responsecode<=299)
    {
        console.log("it is Successful responsecode");
    }
    else{
        if(responsecode>=300 && responsecode<=399)
        {
            console.log("it is Redirectional responsecode");
        }
        else{
            if(responcecode>=400 && responcecode<=499)
            {
                console.log("it is Client error responsecode");
            }
            else{
                if(responsecode>=500 && responsecode<=599)
                {
                    console.log("it is server error responsecode");
                }
                else{
                    console.log("othercode");
                }
            }
        }
    }
}
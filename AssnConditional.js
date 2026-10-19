Conditional Satements Program
=================================
Assignment1: 
Problem: 
Write a JavaScript program to check whether a number is even or odd. 
 let num=20
if(num%2===0)
    {
        console.log("The num is even.");

    }
else
    {
        console.log("The num is odd.");
    }




Assignment2: 
Problem: 
Print the day of the week based on number (1–7). 
What you will use here? If-else or switch case? 
 
let day=2
switch(day)
{
    case 1: 
        console.log("Monday");
        break;
    case 2:
        console.log("tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4: 
        console.log("Thursday");  
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
        
}



Assignment 3: 
Problem: Write .js script that evaluates a test case result based on HTTP 
response status code the program should use Nester if..else statements to 
determine result message.  
Instructions:  
1.create a new file named testResult.js Inside the file declare variable to store 
status code Let responseCode=200;  
2.use if else Nested statements to evaluate response code and print status 
message  
3.Use the following logic for result evaluation: I 
f response Code is 100-199→print: Informational  
If response Code is 200-299→print: successful  
If response Code is 300-399→print: Redirectional  
If response Code is 400-499 →print: Client Error 
If response Code is 500-599→print: Server Error For any other code →print 
Unkown Status code  
4.Run script using node testResult.js  

Assignment 4
Problem:  Write a script that suggests what clothing to wear based on the 
current temperature The program should use if...else or if...else if statements to 
determine the suggestion.  
Instructions: 1. Create a new file named weather.js. Inside the file, declare a 
variable to store the temperature,  
for example: let temperature = 28;  
2. Use if...else or if...else if statements to decide and print the clothing 
suggestion based on the temperature 
3. Use the following logic for clothing suggestion:  
If temperature is above 35°C Print: wear light cotton clothes  
◦ If temperature is between 20°C and 35°C Pint: Normal casual wear  
○ If temperature is between 10°C and 19°C Print: Wear a jacket  
○ If temperature is below 10°C Print: stay indoors, it's too cold! Run the script 
using: node weather.js  
Test Cases to Try: • temperature = 40 • temperature = 28 . temperature- 15  

Assignment5:  
Problem: Create a Javascript that checks whether the given username and 
password match the predefined login credentials using simple variables 
Instructions:  
1. Greate a new file named login.js.  
2. Inside the file, do the following: Declare two variables for user input: let 
enteredUsername = "Priyanka"; // Keep changing  
let enteredPassword = "Nigade":;//Keep changing (Change "some _ value" to 
simulate different test cases.)  
Declare two predefined credentials:  
const correctusername = "admin@emalil.com",  
const correctPassword = "admin@123";  
3. Use an if...else statement to compare: If both enteredusername and 
enteredPassword match the correct credentials, print: Login Successful 
Otherwise, print: Invalid credentials Run the script using: node login.js

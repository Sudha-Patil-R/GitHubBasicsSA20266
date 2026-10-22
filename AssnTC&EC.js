===========================================================

Problem 1 — UI Price and Quantity
A product page returns the following values as strings:
let price = "500";
let quantity = "3";
Calculate the total price.

Expected Output:
1500

let price="500";
let quantity="3";
let totalPrice=Number(price)*Number(quantity);  //500*3
console.log(totalPrice);  //1500


Problem 2 — UI Price + Tax
The UI returns:
let price = "1000";
let tax = "200";
Calculate the final price.

Expected Output:
1200

let price="1000";
let tax="200";
let finalprice=price*1+tax*1; 
console.log(finalprice);  //1200


Problem 3 — Understand + Coercion
Consider:
let actual = "100";
let expected = 20;
What will be the output of:
console.log(actual + expected);

let actual="100";
let expected=20;
console.log(actual+expected);  //10020

Problem 4 — Understand - Coercion
Consider:
let actual = "100";
let expected = 20;
What will be the output of:
console.log(actual - expected);

let actual="100";
let expected=20;
console.log(actual-expected);  //80


Problem 5 — UI Value and Assertion
A UI displays:
100
The automation code receives it as:
let actualPrice = "100";
let expectedPrice = 100;
Check the result of:
console.log(actualPrice == expectedPrice);
console.log(actualPrice === expectedPrice);

let actualPrice = "100";
let expectedPrice = 100;
console.log(actualPrice == expectedPrice);  //true
console.log(actualPrice === expectedPrice);  //false


Problem 6 — Fix the Assertion
The following automation code is failing:
let actualPrice = "500";
let expectedPrice = 500;
console.log(actualPrice === expectedPrice);

Modify the code so that the assertion gives:
true


let actualPrice = "500";
let expectedPrice = 500;
let StringtoNumber=Number(actualPrice);  
console.log(StringtoNumber===expectedPrice); //true


Problem 7 — Environment Variable
An automation framework reads the timeout from an environment variable:
let timeout = "30000";
Convert it into a number and print:
The value
Its data type

Expected Output:
30000
number

let timeout="30000";
let StringtoNumber=Number(timeout);
console.log(StringtoNumber);  //30000
console.log(typeof StringtoNumber);  //number


Problem 8 — Order ID
An API returns:
let orderId = 12345;
Convert the order ID into a string and create:
ORDER-12345

let orderid=12345;
let NumbertoString=String(orderid);
console.log(NumbertoString); //12345
console.log("ORDER-"+NumbertoString); //ORDER-12345


Problem 9 — Boolean API Value
An API returns:
let status = "true";
Convert this value into an actual Boolean.

Expected Output:
true
boolean

let status="true";
let StringtoBoolean=Boolean(status);
console.log(StringtoBoolean); //true
console.log(typeof StringtoBoolean);  //boolean

Problem 10 — Input Field Value
A Playwright test retrieves a quantity from an input field:
let quantity = "5";
The expected quantity is:
let expectedQuantity = 5;

let quantity="5";
let expectedQuantity=5;
console.log(quantity===expectedQuantity); //false
let StringtoNumber=Number(quantity);
console.log(StringtoNumber===expectedQuantity); //true


Problem 11 — Calculate Cart Total
An e-commerce application provides:
let price = "799";
let quantity = "2";
let discount = "100";
Calculate:
(price × quantity) - discount

Expected Output:
1498

let price = "799";
let quantity = "2";
let discount = "100";
let carttotal=(price*quantity)-discount;
console.log(carttotal); //1498



//Datatype Assignment
===================

1. Identify the datatype
Create variables for the following values and identify their datatype:
- 25
- "JavaScript"
- true
- undefined
- null
- 123.45
- 12345678901234567890n
- Symbol("id")
Task: Print both the value and its datatype.

let num1=25;
console.log(num1);//25
console.log(typeof num1);//number

let Mname="javascript";
console.log(Mname);//javascript
console.log(typeof Mname);//string

let bool=true;
console.log(bool);//true
console.log(typeof bool);//boolean

let undef=undefined;
console.log(undef);//undefined
console.log(typeof undef);//undefined

let n=null;
console.log(n);//null
console.log(typeof n);//object

let num2=123.45;
console.log(num2);//123.45
console.log(typeof num2);//number

let bigInt=12345678901234567890n;
console.log(bigInt);//12345678901234567890n
console.log(typeof bigInt);//bigint

let sym=Symbol("id");
console.log(sym);//Symbol(id)
console.log(typeof sym);//symbol

2. Create Variables of Different Datatypes
Create one variable for each of the following datatypes:
- String
- Number
- Boolean
- Undefined
- Null
- BigInt
- Symbol
- Object
Print all variables

//string
let fname=`Gouri`;
console.log(fname);

//number
let num=2.10;
console.log(num);

//boolean
let isloggedin=true;
console.log("the user is logged in:", isloggedin);

//undefined
let id;
console.log("the id is:", id);

//null
let bloodtype=null;
console.log("the blood type is:", bloodtype);

//bigInt
let num2=9876214376354759365n;
console.log("the bigInt is:", num2);

//symbol
let sym=Symbol("id");
console.log("the symbol is:", sym);

//object
let user={};
console.log(user);


3. Predict the Output
Without running the code, predict the output:

console.log(typeof 100);  //number

console.log(typeof "100");  //string

console.log(typeof true);  //boolean

console.log(typeof undefined);  //undefined

console.log(typeof null);  //object

console.log(typeof 100n);  //bigInt


4. Student Information
Create variables to store:
- Student name
- Student age
- Student percentage
- Whether the student has completed the course
- Student's grade
Use appropriate JavaScript datatypes.

let studentName = "Gouri";
let studentAge = 20;
let studentPercentage = 85.5;
let hasCompletedCourse = true;
let studentGrade = "A";
console.log(studentName);
console.log(studentAge);
console.log(studentPercentage);
console.log(hasCompletedCourse);
console.log(studentGrade);

5.Create two variables:
let userName;
let userEmail = null;
Print both values and their datatypes.
Then answer:
1. What is the difference between undefined and null?
2. What does typeof userName return?
3. What does typeof userEmail return?
4. Why is typeof null considered unusual in JavaScript?

let username;
console.log("username is:", username); //undefined
console.log(typeof username); //undefined

let userEmail=null;
console.log("Email is:", userEmail); //null
console.log(typeof userEmail); //object

1.in undefined the variable is declared but not assigned any value.
   but in null the veriable is assigned with null value(means no value).

2.typeof username return is undefined.

3.typeof userEmail retun is object.

4.typeof null is considered unusual in javascript because null is a primitive value, 
   but type of null returns "object" because of a historical legacy behavior.
   A long standing bug in javascript that has been kept for backward compability.
   


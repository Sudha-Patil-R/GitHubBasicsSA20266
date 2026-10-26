============================================
1. Employee Management System 
Scenario: 
A company stores employee names in an array. 
Question: 
Declare an array with employee names "Rahul", "Priya", "Amit" and 
perform the following operations: 
1. Add "Sneha" to the employee list  
2. Remove the last employee from the list  
3. Add "Manager" at the beginning of the list  
4. Remove the first employee from the list 


let emp = ["Rahul", "Priya", "Amit"];
console.log(emp);

emp.push("Sneha");
console.log(emp); 

emp.pop(); 
console.log(emp); 

emp.unshift("Manager"); 
console.log(emp); 

emp.shift();
console.log(emp); 


2. Shopping Cart Application 
Scenario: 
An e-commerce website manages products in a shopping cart. 
Question: 
Declare an array with "Mobile", "Laptop", "Mouse" and: 
1. Add "Keyboard" to the cart  
2. Display all products in reverse order  
3. Convert all cart items into a single string separated by " | "  

let scart=["mobile","laptop","mouse"];

scart.push("keyword");
console.log(scart);

scart=scart.reverse();
console.log(scart);

scart=scart.join("|");
console.log(scart);



3. Browser Tabs Automation 
Scenario: 
A browser automation framework tracks currently opened tabs. 
Question: 
Declare an array with "Google", "YouTube", "ChatGPT" and: 
1. Close the last opened tab  
2. Add "GitHub" as the first tab  
3. Display tabs in reverse order 

let tab=["google","youtube","chatgpt"];

tab.unshift("github");
console.log(tab);

tab.reverse();
console.log(tab);

4. Food Delivery Orders 
Scenario: 
A food delivery application maintains current orders. 
Question: 
Declare an array with "Pizza", "Burger", "Pasta" and: 
1. Add "Sandwich" to the orders  
2. Remove the first order  
3. Display all orders as a comma-separated string  

let food=["pizza","burger","pasta"];
console.log(food);

food.push("sandwich");
console.log(food);

food.shift("pizza");
console.log(food);

food1=food.join(",");
console.log(food1);


5. Student Attendance System 
Scenario: 
A school application maintains student attendance. 
Question: 
Declare an array with "Ankit", "Riya", "Karan" and: 
1. Add "Neha" at the beginning  
2. Remove the last student from the list  
3. Create a separate copy of the attendance list 
 
let student=["ankit","riya","karan"];
console.log(student);

student.unshift("neha");
console.log(student);

student.pop();
console.log(student);

attendencelist=[...student];
console.log(attendencelist);


6. QA Test Case Management 
Scenario: 
A QA engineer stores executed test cases. 
Question: 
Declare an array with "LoginTest", "PaymentTest", "SearchTest" and: 
1. Create another copy of the same array  
2. Extract only the first 2 test cases  
3. Display test cases in reverse order 

let testcase=["logintest","paymenttest","searchtest"];
console.log(testcase);

testcasecopy=[...testcase];
console.log(testcasecopy);

slice1=testcase.slice(0,2);
console.log(slice1);

testcase.reverse();
console.log(testcase);

7. Movie Recommendation App 
Scenario: 
A movie application stores recommended movies. 
Question: 
Declare an array with "Inception", "Avatar", "Titanic" and: 
1. Add "Interstellar" to the movie list  
2. Replace "Titanic" with "Jawan"  
3. Convert all movie names into a single string separated by "-"  

let movie=["inception","avatar","titanic"];
console.log(movie);

movie.push("intersteller");
console.log(movie);

movie.splice(2,1,"jawan");
console.log(movie);

movie1=movie.join('-');
console.log(movie1);


8. Product Inventory Management 
Scenario: 
An admin manages product inventory. 
Question: 
Declare an array with "Mobile", "Laptop", "Tablet", "Camera" and: 
1. Remove "Tablet" from inventory  
2. Add "Smart Watch" after "Laptop"  
3. Create a duplicate copy of updated inventory 

let product=["mobile","laptop","tablet","camera"];
console.log(product);

product.splice(2,1);
console.log(product);

product.splice(2,0,"smart watch");
console.log(product);

product1=[...product];
console.log(product1);


9. Online Course Platform 
Scenario: 
An online learning platform stores enrolled courses. 
Question: 
Declare an array with "JavaScript", "Playwright", "Cypress" and: 
1. Remove the first course  
2. Add "TypeScript" at the beginning  
3. Extract only the last 2 courses  

let course=["javascript","playwright","cypress"];
console.log(course);

course.shift();
console.log(course);

course.unshift("typescript");
console.log(course);

console.log(course.slice(1));

10. Music Playlist Application 
Scenario: 
A music app stores favorite songs. 
Question: 
Declare an array with "Song1", "Song2", "Song3" and: 
1. Display playlist in reverse order  
2. Remove the last song  
3. Add "NewSong" at the beginning  
4. Convert playlist into a single string  

let songs=["song1","song2","song3"];
console.log(songs);

songs.reverse();
console.log(songs);

songs.pop();
console.log(songs);

songs.unshift("newSong");
console.log(songs);

songs1=songs.join(",");
console.log(songs1);


11. Bug Tracking System 
Scenario: 
A software team tracks bugs using arrays. 
Question: 
Declare an array with "Bug101", "Bug102", "Bug103" and: 
1. Add "Bug104"  
2. Remove "Bug102"  
3. Create a copy of the bug list

let Buglist=["Bug101", "Bug102", "Bug103"];
console.log(Buglist);

Buglist.push("Bug104");
console.log(Buglist);

Buglist.splice(1,1);
console.log(Buglist);

Buglist1=[...Buglist];
console.log(Buglist1);



12. Daily Tasks Planner 
Scenario: 
A task planner application stores daily tasks. 
Question: 
Declare an array with "Wake Up", "Exercise", "Study" and: 
1. Add "Meeting" to the task list  
2. Remove the first task  
3. Reverse all tasks  
4. Display all tasks in a single string separated by " -> " 

let Tasks=["Wake Up", "Exercise", "Study"];
console.log(Tasks);

Tasks.push("Meeting");
console.log(Tasks);

Tasks.shift();
console.log(Tasks);

Tasks.reverse();
console.log(Tasks);

let Tasks1=Tasks.join("->");
console.log(Tasks1);



13. Mobile Contacts List 
Scenario: 
A mobile app stores contact names. 
Question: 
Declare an array with "Ram", "Shyam", "Mohan" and: 
1. Add "Sita" at the beginning  
2. Remove the last contact  
3. Extract only the first 2 contacts  

let contactlist=["Ram", "Shyam", "Mohan"];
console.log(contactlist);

contactlist.unshift("Sita");
console.log(contactlist);

contactlist.pop();
console.log(contactlist);

contactlist1=contactlist.slice(0,2);
console.log(contactlist1);



14. Sports Team Selection 
Scenario: 
A coach manages selected players. 
Question: 
Declare an array with "Virat", "Rohit", "Gill" and: 
1. Add "Hardik" to the team  
2. Replace "Gill" with "KL Rahul"  
3. Display players in reverse order  

let players=["Virat", "Rohit", "Gill"];
console.log(players);

players.push("Hardik");
console.log(players);

players.splice(2,1,"KL Rahul");
console.log(players);

players.reverse();
console.log(players);



15. Real-Time Automation Framework Scenario 
Scenario: 
An automation framework stores failed test names. 
Question: 
Declare an array with "LoginFail", "CheckoutFail", "SearchFail" and: 
1. Add "ProfileFail"  
2. Remove the first failed test  
3. Create another copy of the failed tests array  
4. Extract only the first 2 failed tests  
5. Replace "CheckoutFail" with "PaymentFail"  
6. Convert all failures into a single comma-separated string

let testname=["LoginFail", "CheckoutFail", "SearchFail"];
console.log(testname);

testname.push("ProfileFail");
console.log(testname);

testname.shift();
console.log(testname);

testname1=[...testname];
console.log(testname1);

testname2=testname1.slice(2,1);
console.log(testname2);

testname2.splice(0,1,"PaymentFail");
console.log(testname2);

testname2.join(",");
console.log(testname2);






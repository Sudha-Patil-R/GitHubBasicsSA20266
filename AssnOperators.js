console.log(1 + "2" + 3);  //123

console.log(1 + 2 + "3");  //33

console.log("5" * true);  //5

console.log(10 > 5 > 1);  //false

let a = 2;
    let b = a++ + ++a;
    console.log(a, b);
 //a=4, b=6

let c= 3;
console.log(c++ + c++ + ++c); //3+4+6=13

console.log(5 * 2 == "10");  //true
let x = 1;
let y = ++x + x++ + x;
console.log(x, y);
//x=3,y=7

console.log(10 > 5 && 20 < 30);  //true

console.log(null || undefined || "Playwright");  //Playwright


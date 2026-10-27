
//1.Prime Number
//Problem Statement:
//Write a JavaScript program to check whether a given number is prime or not using a loop.



//2.Print Even Numbers
//Problem Statement:
//Write a JavaScript program to print all even numbers between 1 and 50 using a loop.

for(let i=1;i<=50;i++)
{
    if(i%2===0)
    {
        console.log("even number:" +i);
    }
}

//3.Multiplication Table
//Problem Statement:
//Write a JavaScript program that accepts a number and prints its multiplication table from 1 to 10.

for (let i = 1; i <= 10; i++)
     {
    console.log(`--- Multiplication Table for ${i} ---`);

    for (let j = 1; j <= 10; j++)
    {
        let result = i * j;
        console.log(`${i} x ${j} = ${result}`);
    }
     }


//4.Factorial Number
//Problem Statement:
//Write a JavaScript program to calculate the factorial of a given positive integer using a loop.

let factorialof(num)
let fact=1;
for(let i=1;i<=num;i++)
{
    fact=fact*i;
}
console.log("factorial of num!:" +fact);


//5.Count Digits
//Problem Statement:
//Write a JavaScript program to count the total number of digits present in a given number using a loop.



//6.Stop the Loop at a Specific Number
//Problem Statement:
//Write a JavaScript program to print numbers from 1 to 20. Use the break statement to terminate the loop when the number reaches 10.

for(let i=1;i<=20;i++)
{
    if(i===10)
    {
        break;
    }
    else
    {
        console.log(i);
    }

}


//7.Skip Even Numbers
//Problem Statement: 
//Write a JavaScript program to print numbers from 1 to 20, but skip all even numbers using the continue statement.

for(let i=1;i<=20;i++)
{
    if(i%2===0)
    {
        continue;
    }
    else
        {
            console.log(i);
        }
}


//8.Print a 5 × 5 Star Pattern
//Problem Statement:
//Write a JavaScript program using nested loops to print a square containing 5 rows and 5 columns of stars.
//*****
//*****
//*****
//*****
//*****

for(let r=1;r<=5;r++)    
    {
        let row=" ";
        for(let c=1;c<=5;c++)
        {
            row=row+"*";
        }
        console.log(row);
    }



//9.Decreasing Star Pattern
//Problem Statement:
//Write a JavaScript program using nested loops to print the following pattern:

//*****
//****
//***
//**
//*

for(let r=5;r>=1;r--)
{
    let row="";

    for(let c=1;c<=r;c++)
    {
        row=row+"*";
    }
    console.log(row);
    
}


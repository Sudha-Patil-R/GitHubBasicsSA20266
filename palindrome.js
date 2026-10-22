
let num1=121,rem=0,rev=0,temp=num1;
while(num1>0)
{
    rem=num1%10;
    num1=Math.floor(num1/10);
    rev=rev*10+rem;
}
if(temp==rev)
{
    console.log("The number is a palindrome.");
}
else
{
    console.log("The number is not a palindrome.");
}
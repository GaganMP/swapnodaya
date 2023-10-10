y=prompt("Ente the operation you want to perform +:add,-:sub,*:product,/:division");
a=prompt("Entwr the value of first operand");
b=prompt("Entwr the value of first operand");
var x;
a=a-'0';
b=b-'0';
switch(y)
{ case "+":x=a+b;
alert('a+b='+x);
 break;

case "-":x=a-b;
alert('a-b='+x);
 break;
  
 case "*":x=a*b;
alert('a*b='+x);
 break;
 
 case "/":x=a/b;
alert('a/b='+x);
 break;

 default:confirm("enter valid operand");
 
}
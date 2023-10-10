/*js is a dynamiclly and weeklt typed lanuage

var -->name of location
var var-name=value
var name=Gagan
var name start  with:
letter, _ ,$;followed by anything
case sensitive
No key value*/  
 

 /*syntax of if else ladder
if(cond){
    stmt
 }
 else if(cond)
 {
    stmt
 }
 else
 {
    stml
 }
*/

 /*switch case statement
 syntax
switch(case-variable){

    case va1:stmt
           break;
    case va2:stmt
           break;
    case va3:stmt
           break;
   case va4:stmt
           break;
    default:stmt; 


}
*/


 

 
console.log("Hello")


var day=prompt("day number");

var a=1;
var b=19;
console.log(a);
console.log(b);

if(a>b){
    console.log("a is greater");

}

else if (a<b)
{

    console.log("b is greater");
}
else {
    console.log("a is equal to b");
}


/* switch*/


switch(day)
{   case '1':alert("today is monday");
             break;
    case '2':alert("today is Tuesdy");
             break;
    case '3':alert("today is Wednesday");
             break;
    case '4':alert("today is Thursday");
            break;
    case '5':alert("today is Friday");
            break;
    case '6':alert("today is Saturday");
            break;
    case '7':alert("today is Sunday");
            break;
    default:alert("Not Known");
}

//for loop



for (var i=0;i<10;i++)
{console.log(i);}
console.log("name")


let nams=["Gagan",'Arun','Darshan']
for(item of nams)
{
    console.log(item)
}

let frt=['apple','peach','orange'];
frt.forEach(items=>console.log(items));



let arr =['vrishab','more','mooshak','Simha'];
arr.forEach(item=>console.log(item));

{ var x=[12,'cat','dog','camel']
for (items of x){
    console.log(items);
}

var a=[1,2,3,4]
}

console.log("iterating using forEach")
a.forEach(item=>console.log(item));

console.log("iterating using for of")
for( var i of a)
{console.log(i)}

console.log("iterating using for in")
for( var i in a)
{console.log(i)}


//while

var z=0
while(z<10)
{
    console.log(z);
    z++;
}

var i=0;
do{
    console.log("iteration->"+i);
    i++;
}while(i<0);


/*operators In JavaScript
unary operator
Arithmatic operator
Logical
shift operator
Relative
Bitwise
Assignment
Ternary

unary:
postfix and prefix
*/



var a=2;
var x=a++;
console.log(x);
console.log(a);

var a=2;
var x=++a;
console.log(x);
console.log(a);
/*
Arithmatic operator
+ add
- difference
*  product
/ division
% remainder
** power


*/
var num1=8;
console.log(num1<<2);


var num1=8;
console.log(num1>>2);

//relational



var ab;
console.count("value="+ab);
var ab=20;
console.count("value="+ab);

//to prevent hosting we use let and const

var le=[2,3,74,7,7];


console.log("value of a"+le);
{let les=20;
console.log("value of a"+le);
}

var lex=[1,45,47,,23,'b'];

console.log("value of a"+lex);
const l=20;
console.log("value of a"+lex);



var globals=20;
for (let global=0;global<=10;global++)
{console.log(global);
}

console.log(globals);

/*let x=10;
var x=10; this causes a erroe due to scope conflict
*/
const object={a:10,b:20}
console.log(object);

object.c=3;
console.log(object);

/*object="jack";
console.log(object)
this is invalid reference


*/
/*
Datatypes
1)primitive
2)non primitive

In primitive
Numbers
chatacter/string

*/



var x=2;
var d='hello';
console.log(d +x);
console.log(`${x} is the value of x`);
var t=true;
typeof(t)

/*
1 -1 '0' {} ->true
0 null undefined NaN "" -> false

undefined for undefined may be declared;
Null specifing initialized var b=null;*/

let  sym1=Symbol('Gagan');
let sym2=Symbol("Gagan");
console.log(sym2==sym1);

var fcolor={
    "apple":"red",
    "Mango":"yellow",
    "watermelon":"Green",
}
console.log(fcolor);

let f={
    names:"Gagan",
    age:21,
    eat(){
        console.log(`${this.names} is ${this.age}`);
    }
  };

  console.log(Object.is(+0,-0));



  //Arrays:a collection of ordered data together
  var arr1=[1,2,3];
  console.log(`second element of ${arr1} ->${arr1[1]}`);

  var arr2=[1,,2,3];
  console.log(`second element of ${arr2} ->${arr2[1]}`);

  arr3=['cat',12,23];
  arr3[2]=23;

  //array to insert a delete element in array
  arr3.push("hi");
arr3.pop(3);  


arr3.unshift("dog");
arr3.shift();
arr3.unshift("puppy");
arr3.unshift("cow");

/*
array splicing*/
console.log(arr3);

console.log(arr3.splice(1,3,));
 var arr4=[1,'two',3,'four',5];

let arr5=arr4.slice(0,3);
let arr6=arr4.slice(3,6);
let arr7=arr4.slice(0,5);
arr4.forEach(item => console.count(item));


console.log("using for of")
for (var i of arr4)
{
    console.log(i);
}





z=function(x)
{
  if(x%2==0)
  {return 1;}
  else
  {return 0;}
}

d=prompt("Enter a Number");

y=z(d);

(y==1 )? alert("the number is even"):alert("the number is odd");

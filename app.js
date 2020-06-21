//chapter 21-25

//task 1
//var a = prompt("Enter your first name");
//var b = prompt(" Enter your last name");
//var fullname = 'Good Morning '+a+  ' ' +b;
//alert(fullname);

//task 2
//var a = prompt("Your favorite phone model ?");
//var length = a.length;
//document.write("My favorite phone is: "+a);
//document.write("<br>Length of string: "+ length );

//task 3
//var a = "Pakistani"
//document.write("String: "+a)
//document.write("<br> The index of n =")
//b = a.indexOf('n');
//document.write(b);

//task 4
//var a = "Hello world"
//document.write("String: "+a)
//document.write("<br>last index of l =")
//b = a.lastIndexOf('l');
//document.write(b);

//task 5
//var a = "Pakistani"
//document.write("String: "+a)
//document.write("<br>Character at index 3=")
//b = a.charAt(3);
//document.write(b);

//task 6
//var a = prompt("Enter your first name");
//var b = prompt(" Enter your last name");
//var fullname = "Good Morning! "
//var result = fullname.concat(a, b);
//alert(result);

//task 7
//var a = "Hyderabad";
//document.write("city: "+a)
//var b = a.replace("Hyderabad","Islamabad");
//document.write("<br>After replacement: "+b);

//task 8
//var a = " “Ali and Sami are best friends. They play cricket and football together“ " 
//var b = a.replace(/and/gi,"&");
//document.write(b);

//task 9
//var a = "472"
//document.write(a)
//document.write("<br>")
//document.write(typeof a)
//document.write("<br>")
//var b = parseInt(a)
//document.write(b)
//document.write("<br>")
//document.write(typeof b);

//task 10
//var a = prompt("Enter text");
//document.write("Text: "+a)
//var b = a.toLocaleUpperCase();
//document.write("<br>Upper case: "+b);

//task 11
//var a = prompt("Enter text")
//document.write("Text: "+a)
//var b = a.charAt(0).toLocaleUpperCase() + a.slice(1);
//document.write("<br>Title case: "+b);
//document.write(b);

//task 12
//var a = 12;
//document.write(a)
//document.write("<br>")
//document.write(typeof a)
//document.write("<br>")
//var b = a.toString();
//document.write(b)
//document.write("<br>")
//document.write(typeof b);

//task 13
 //var a = prompt("Enter your Name"); 
//      a = a.toLowerCase(); 
//      var b = ["!", ".", ",", "&", "@"]; 
//     for (var i = 0; i <= 4; i++) {  
//          if (a === b[i]) { 
//                 
//          alert("Enter a valid name");  
//          break; 
//         } else if(a!==b[i]){
//             document.write(a)
//             break;
//         }}

//task 14
// var a = prompt("Welcome to ABC Bakery. What do you want to order sir/mam");
// var b = ["cake", "apple pie", "cookie", "chips", "patties"];
// for (var i = 0; i <= a.length; i++){
//     if(a === b[i]){
//         alert(("This is available in our bakery"));
//         break;
//     }
//     else if(a !== b[i]){
//          alert("sorry. Item yuour entered is not avialable")
//          break;
//     }
// }

//task 15
 //var a = prompt("enter password")
// var b=  /^[A-Za-z]\w{7,14}$/;
// if(a === b)
// { 
// alert('Correct, try another...')
//
// }
// else if(a !== b){
// { 
// alert('Wrong!')
//
// }}

//task 16
//var uni = "University of karachi"
//var uni2 = uni.split("");
//document.write(uni2);

//task 17
//var a = prompt("Enter text"); 
//var b = a.charAt(a.length - 1);
//document.write("Last character of input: "+b);

//task 18
 //function count(a_string, b_string) 
// {
// a_string += '';
// b_string += '';
//
// if (b_string.length <= 0) 
// {
//     return a_string.length + 1;
// }
//
//    cstring = b_string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
//    return (a_string.match(new RegExp(cstring, 'gi')) || []).length;
// }
// document.write(count("The quick brown fox jumps over the lazy dog", 'the'));





//chapter 26-30

//task 1
 //var a = prompt("input positive integer");
// document.write("number "+a);
// var b = Math.round(a);
// document.write("<br>round off value "+b);
// var c = Math.floor(a);
// document.write("<br>floor value "+c);
// var d = Math.ceil(c);
// document.write("<br>ceil value "+d);

//task 2
//var a = prompt("input negative floating point number");
//  document.write("number "+a);
//  var b = Math.round(a);
//document.write("<br>round off value "+b);
//  var c = Math.floor(b);
//  document.write("<br>floor value "+c);
//  var d = Math.ceil(c);
// document.write("<br>ceil value "+d);

//task 3
// var a = -4;
// var b = Math.abs(-4);
// document.write("the absolut value of " +a+ " is "+b);

//task 4
// var a;
// var b;
// var i;
// b = prompt("How many time do you want to roll the dice?",5);
//
// for (i=1; i<=b; i++){
//     a = Math.ceil(Math.random() *6);
//     document.writeln(a+"<br>");
// }

//task 5
//var a = Math.floor(Math.random() * 2) +1;
// var b = Math.floor(Math.random() * 2) +1;
//
// if( a === b){
//    document.write('Random coin value: Tail'+" ",a);}
//	else{
//    document.write('Random coin value Head'+" ",b);
//  }

//task 6
 //var a = Math.floor((Math.random() * 100) + 1);
// document.write("The random number between 1 and 100 is"+" ",a);

//task 7
//var weight=window.prompt("Enter your weight in kilograms");
//var value=parseFloat(weight);
//document.write("The weight of user is " + value+" kilograms");

//task 8
//var a = Math.ceil(Math.random() * 10);
// document.write(a);
// var b = prompt("Enter the number between 1 and 10 ");
// if (b == a) document.write("Nice! number is matched "+" ");
// else document.write('Not matched, the number was ' + b);




//chapter 31-34

//task 1
//var d = new Date();
//document.write(d);

//task 2
//var month = new Array();
//  month[0] = "January";
//  month[1] = "February";
//  month[2] = "March";
//  month[3] = "April";
//  month[4] = "May";
//  month[5] = "June";
//  month[6] = "July";
//  month[7] = "August";
//  month[8] = "September";
//  month[9] = "October";
//  month[10] = "November";
//  month[11] = "December";
//  var d = new Date();
//  var n = month[d.getMonth()];
//  alert(n);

//task 3
 //var days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
// var d = new Date();
// var result = days[d.getDay()];
// alert(result);

//task 4
 //var day = new Date();
// if(day.getDay() == 6 || day.getDay() == 0) alert('Its Funday');

//task 5
 //var a = new Date();
// if(a.getDate() <=15){
//     document.write("its first 15 day of month")
// }else{
//     document.write("last 15 days of month")
// }

//task 6
 //var today = new Date();
// var a = today.getTime();
// var b = a / 60000;
// document.write("Current date = " + " " + today);
// document.write("<br>Elapsed miliseconds since 1 Jaunuary 1970 " + " " + a);
// document.write("<br>Elapsed minutes since 1 Jaunary 1970" + " " + b);

//task 7
//var a = new Date();
// if(a.getHours() <=11){
//     alert("Its AM")
// }else{
//     alert("Its PM")
// }

//task 8
//var laterdate = new Date("Dec 31, 2020");
//document.write("Later date: "+laterdate);

//task 9
// var day = new Date();
// var a = day.setDate(18);
// var x= day.setMonth(5);
// var y = day.setFullYear(2015);
// var z = x + a + y;
// var b = day.getDay();
// var c = b - z;
// document.write(x);
//
// var x1 = new Date(); 
//  x1.setDate(15);
//  document.write(x1)
//  var x = new Date(); 
//  x.setMonth(5);
//  document.write(x)
//
//  var z = new Date(); 
//  z.setFullYear(2015);
//  document.write(z)
//  var y1 = x1 + x + z;
//  document.write(y1)

//task 11
//var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var a = new Date();
// var time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
// document.write("current date = " + " ")
// document.write(date + " ")
// document.write(time)
//document.write("<br>")
// time2 = a.getHours() -1 + ":" + a.getMinutes()  + ":" + a.getSeconds();
// document.write("I hour ago, it was" + " ")
// document.write(date + " ")
// document.write(time2);

//task 12
 //var today = new Date();
// var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
// var a = new Date();
// var time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
// document.write("current date = " + " ")
// document.write(date + " ")
// document.write(time)
// document.write("<br>")
// var date2 = today.getFullYear() -100 +'-'+(today.getMonth()+1)+'-'+today.getDate();
// document.write("100 Years back, it was" + " ")
// document.write(date2 + " ")
// document.write(time);

//task 13
// var day = new Date();
// var a = prompt("Enter your age ",22)
// var d = day.getFullYear() - a;
// document.write("Your birth year =" + " " + d)

//task 14
// var today = new Date;
// var a = prompt(" Enter your name");
// var date = today.getMonth();
// var b = prompt("Enter unit of this month");
// var cpu = 16;
// var nap = b*cpu;
// var lps = nap / 30;
// var gap = nap + lps;
// document.write("Customer name ="+ " "+ a);
// document.write("<br>Month =" + " " + date);
// document.write("<br>Number of units" + " " + b);
// document.write("<br>charges per unit = 16");
// document.write("<br>Net amount payable (within due date) = "+ " " + nap);
// document.write("<br>Late payment surcharge)" + " " + lps);
// document.write("<br>Gross amount payable (after due date) =" + " " + gap);




//chapter 35-38

//task 1
 //function Time() { 
// var now = new Date(); 
// var Hr = now.getHours(); 
// var Min = now.getMinutes(); 
// alert("Current time: "+ Hr + ":" + Min); 
// }
// Time();


// Task 2
// function greet(){
//     var a = prompt(" Enter your first name" + " ");
//     var b = prompt ("Enter your last name");
//     var c = a + b;
//     alert("Welcome " + " " + c);
// }
// greet();


// Task no 3
// function sum(){
//     var t3 = prompt("Enter first number");
//     var a = parseInt(t3);
//     var ta3 = prompt("Enter second number");
//     var b = parseInt(ta3);
//     var tas3 = a + b;
//     alert(" Sum of your given number =" + " " + tas3);
// }
// sum();


//Task 4
// function calcukate(){
// var a = prompt("Enter first number");
// var x = parseInt(a);
// var b = prompt("Enter operator");
// var c = prompt("Enter second number");
// var y = parseInt(c);
// if (b === '+'){
//     alert(x + y);

// }else if(b === '-'){
//     alert(x-y);
// }else if(b === '*'){
//     alert (x * y);
// }else if(b === '/'){
//     alert(x/y);
// }else{
//     alert("Enter correct operator")
// }
// }
// calculate();



//Task 5
// function sq() {
//     var a = prompt("Enter number");
//     alert(a*a);
//   }
//   sq();



//Task 6
// function factor(num) {
//     if (num < 0) 
//           return -1;
//     else if (num == 0) 
//         return 1;
//     else {
//         return (num * factorialize(num - 1));
//     }}
//   factor(5);

//Task 7
// function sum() {
// var a = prompt("Enter digit")
// var secondno = parseInt(a);
// var output=(secondno *(secondno +1))/2;
// alert(output);
// }

//Task 8
// function Hypo(base, per) {
//     return Math.sqrt(base*base  + per*per) ; }
// alert(Hypo(45,56));


//Task 9
// function rec() {  
//     var length = prompt("Enter  number for length rectangle.");
//     var width = prompt ("Enter  number for width  rectangle.");          
//     var area= length * width ;   
//      document.write("Area of rectangle:"  + area); }
// rec();


// Task 13
// function char_count(str, letter) {
//  var letter_Count = 0;
//  for (var position = 0; position < str.length; position++) {
//     if (str.charAt(position) == letter) {
//       letter_Count += 1;
//       }}
//   return letter_Count;}
// alert(char_count('hello', 'o'));




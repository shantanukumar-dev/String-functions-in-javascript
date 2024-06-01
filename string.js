// PROPERTY OF STRING:-
const message = "shantanu";
console.log(message[2]);

const message1 = "my name is shantanu";
console.log(message1[3]);

const message3 = "shantanu";
console.log(message3[12]);

console.log(message.length);
console.log(message1.length);


//----------------------------------------------------------------------------
//METHODS (WITHOUT ARGUMENTS):-

//1-touppercase()
const msg = "shantanu";
console.log(msg.toUpperCase());

//2-tolowercase()
const msg1 = "SHNTANU KUMAR";
console.log(msg1.toLowerCase());

//3-trim() 
const msg2 = "     shantan kuumar    ";
console.log(msg2.trim());

//4-trimStart()
const msg3 = "     shantanu kumar   ";
console.log(msg2.trimStart());

//5-trimEnd()
const msg4 = "     shantanu kumar    ";
console.log(msg2.trimEnd());


// ---------------------------------------------------------------------------

//METHODS WITH ARGUMENTS

//1.includes()
let s1 = "Hy i am shantanu kumar";
console.log(s1.includes("am"));
console.log(s1.includes("mn"));
console.log(s1.includes("12"));
console.log(s1.includes("   "));

//2.indexOf()
let s2 = "Hello World ,Welcome to the Sambalpur University";
console.log(s2.indexOf("H"));
console.log(s2.indexOf("S"));
console.log(s2.indexOf("f"));
console.log(s2.indexOf(" "));
console.log(s2.indexOf("W"));
console.log(s2.indexOf("World"));

//3.replace()
// syntax:- 
// String.replace(Searching value,New value)
let s3 = "Hello Welcome to Microsoft";
console.log(s3.replace("Welcome", "Visit"));
console.log(s3.replace("university", "Visit"));
console.log(s3.replace("o", "O"));

//4.replaceAll()
//String.replaceAll(Searching value,New value)
let s4 = "Hello Welcome to Microsoft";
console.log(s4.replaceAll("o", "O"));

//5.concat()
//string.concat(string1,string2........string n)
let s5 = "Shantanu";
let s6 = "Kumar";
let s7 = "mahanta";
console.log(s5 + s6 + s7);
let result = s5.concat(' ', s6, ' ', s7);
console.log(result);

//6.Padstart()
//string.padstrt(Totallength,"new string");
 const Accountnumber="0311";
 console.log('************'+Accountnumber);
console.log(Accountnumber.padStart(16,"*"));

//7.padEnd()
//string.padstrt(Totallength,"new string");
const Firstfourdigit="8260";
console.log(Firstfourdigit.padEnd(16,"*"));

//8.charAt()
//string.charAt(index)
const chat="Shantanu Kumar mahanta";
console.log(chat.charAt(6));
console.log(chat.charAt(7));
console.log(chat.charAt(8));
console.log(chat.charAt(9));

//9.CharCodeAt()
//string.charCodeAt(index) 
const chat1="Shantanu Kumar mahanta";
console.log(chat.charCodeAt(6));
console.log(chat.charCodeAt(7));
console.log(chat.charCodeAt(8));
console.log(chat.charCodeAt(9));


//10.split()
//string.split()
const mssg="shantanu kumar mahanta";
console.log(mssg.split(" "));



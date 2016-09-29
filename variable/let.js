"use strict";

/*

//块作用域
{
    let a = 1;
    var b = 2;
}
console.info(a); // ReferenceError: a is not defined
console.info(b); // 1

//For循环
for (var i = 0; i < 10; i++) {}
console.info(i); //10

for (let i = 0; i < 10; i++) {}
console.info(i);//ReferenceError: i is not defined

var a = [];
for (var i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}
a[6](); // 10

let a = [];
for (let i = 0; i < 10; i++) {
    a[i] = function() {
        console.log(i);
    };
}
a[6](); // 6


//变量提升问题
console.info(a); //undefined
console.info(b); //ReferenceError: b is not defined

var a = 0;
let b = 1;

//暂时性死区
var a = 1;
if (true) {
    a = 234; //ReferenceError: a is not defined
    let a = 1;
}

if (true) {
    tmp = 'abc'; //ReferenceError: tmp is not defined
    console.log(tmp); //ReferenceError: tmp is not defined

    let tmp;
    console.log(tmp); // undefined

    tmp = 123;
    console.log(tmp); // 123
}


console.info(typeof a); //undefined
console.info(typeof b); //undefined
console.info(typeof x); // ReferenceError: x is not defined
let x;
var a;

//变量声明
function declareVar() {
    var a = 1;
    let a = 2; //SyntaxError: Identifier 'a' has already been declared
    console.info(a);
}
declareVar();

function declareVar() {
    var a = 1;
    var a = 2; 
    console.info(a); // 2
}
declareVar();

function declareVar() {
    let a = 1;
    let a = 2; //SyntaxError: Identifier 'a' has already been declared
    console.info(a);
}
declareVar();

function declareVar() {
    let a = 1;
    var a = 2; //SyntaxError: Identifier 'a' has already been declared
    console.info(a);
}
declareVar();

//重复声明
function func(arg) {
  let arg; //SyntaxError: Identifier 'arg' has already been declared
}
func();

function func(arg) {
  {
    let arg;
  }
}
func();

//块级作用域与函数声明
function f() { console.log('I am outside!'); }
(function() {
    if (false) {
        // 重复声明一次函数f
        function f() { console.log('I am inside!'); }
    }

    f(); //I am outside!
}());
*/

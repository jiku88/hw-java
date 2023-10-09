// Number one
// 2 values addtion

function addTwoNumber(a,b){
    var a;
    var b;
    var c = a + b;

    return c;
}
console.log(addTwoNumber(5,10));

// 2 values multiplication

function maltiTwoNumber(d,e){
    var d;
    var e;
    var f = d * e;

    return f;
}
console.log(maltiTwoNumber(5,6));

// 2 values substraction

function subTwoNumber(a,b){
    var a;
    var b;
    var c = a - b;

    return c;
}
console.log(subTwoNumber(30,5));

// 2 values divition

function diviTwoNumber(a,b){
    var a;
    var b;
    var c = a / b;

    return c;
}
console.log(diviTwoNumber(50,2));

// Number Two
// convert a string into uppercase

var name = "My name is Juttirmoy datta Jiku"

console.log(name.toUpperCase())

// Number Three
// student grade sheet

var marks = 60;

if(marks >= 80){
    console.log("A+")
}else if(marks >= 75){
    console.log("A")
}else if(marks >= 70){
    console.log("A-")
}else if(marks >= 60 & 65){
    console.log("B+")
}else if(marks > 50){
    console.log("B")
}else if(marks > 40){
    console.log("C")
}

else{
    console.log("Fail")
}

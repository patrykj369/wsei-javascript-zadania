//Zadanie 1

var x=1;
var y=2;

if(x>y) {
   console.log("x jest wieksze"); 
} else {
    console.log("x jest mniejsze");
} 

//Zadanie 2
let num1 = 112;
let num2 = 115;
let num3 = 20;

if(num1 > num2 && num1 > num3) {
    console.log('num1 jest największe');
} else if(num2 > num3) {
    console.log('num2 jest największe');
} else {
    console.log('num3 jest największe');
}

//Zadanie 3
for (let i=0; i<11; i++) {
    console.log("Lubię JavaScript");
}

//Zadanie 4
let result = 0;
for(let i=0; i>=10; i++){
  result =+ i;
  console.log(result);
}

//Zadanie 5
var n = 5;
for(let i = 0; i <= n; i++){
    console.log(`${i} - ${i%2 === 0 ? 'parzysta' : 'nieparzysta'}`);
}

//Zadanie 6
for (var i = 0; i < 3; i++) {
    for (var j= 0; j < 4; j++) {
        console.log("i=" + i +", j=" +j);
    }
}

//Zadanie 7 
for(let i = 0; i < 100; i++){
    if(i%3 === 0 && i%5 === 0) {
        console.log("FizzBuzz");
    }
    else if(i%3 === 0){
        console.log("Fizz");
    }
    else if(i%5 === 0) {
        console.log("Buzz");
    }
    else {
        console.log(i);
    }
}

//Zadanie 8a
let stars = '*';
for (var i=0; i<5; i++) {
    var result = '';
    for (var j = 0; j <= i; j++) {
        
        result += stars;
        
    }
    console.log(result)
}

//Zadanie 8b

let stars = '*';
let spacer = ' ';
for (var i=0; i<5; i++) {
    var result = '';
    for (var j = 5 - 1; j > i; j--) {
        result += spacer;
    }
    for (var k = 0; k <= i; k++) {
        result += stars + spacer;
    }
    console.log(result);
}

//Zadanie 8c


let star="*";
let space=" ";
var j=4;
var l=1;
for(var i=0; i<5; i++){

result1="";
result2="*";

  for(var k=j; k>0; k--){
   result1+=space;
}
j--;
for(var n=1; n<l; n++){
result2+=(star+star);
}
l++;
console.log(result1+result2);

}

//Zadanie 8d
let star = "*";
let result1 = "";
let result2 = "";
let l = 5;
for (var i = 1; i <= 5; i++) {
  result1+=star;
  let tmp = 1;
  for (var j = 1; j < l; j++) {
    result2+=tmp;
    tmp++;
  }
  console.log(result1+result2);
  result2 = "";
  l--;
}



/* Write a program that reads 5 Random 3 Digit values and then outputs the minimum
and the maximum value */

let a = Math.floor(Math.random()*999);
let b = Math.floor(Math.random()*999);
let c = Math.floor(Math.random()*999);
let d = Math.floor(Math.random()*999);
let e = Math.floor(Math.random()*999);

console.log("You Entered : "+a+" , "+b+" , "+c+" , "+d+" , "+e);
//Maximum Value
if(a>b && a>c && a>d && a>e) {
    console.log("Maximum value is : "+a);
}else if(b>c && b>d && b>e) {
    console.log("Maximum value is : "+b);
}else if(c>d && c>e) {
    console.log("Maximum value is : "+c);
}else if(d>e) {
    console.log("Maximum value is : "+d);
}else {
    console.log("Maximum value is : "+e);
}
//Minimum Value
if(a<b && a<c && a<d && a<e) {
    console.log("Minimum value is : "+a);
}else if(b<c && b<d && b<e) {
    console.log("Minimum value is : "+b);
}else if(c<d && c<e) {
    console.log("Minimum value is : "+c);
}else if(d<e) {
    console.log("Minimum value is : "+d);
}else {
    console.log("Minimum value is : "+e);
}
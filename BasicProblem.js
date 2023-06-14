/*Read a Number 1, 10, 100, 1000, etc and display unit, ten, hundred,...*/
let num = prompt("Enter number");

const placeValue = (num, res = [], factor = 1) => {
    if(num){
       const val = (num % 10) * factor;
       res.unshift(val);
       return placeValue(Math.floor(num / 10), res, factor * 10);
    };
    return res;
 };
 console.log(placeValue(num));

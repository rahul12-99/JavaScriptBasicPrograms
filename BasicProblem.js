var date = prompt("Enter date");
var month = prompt("Enter month"); 
if(month==3 && date>=20){
    console.log("true");
}
else if(month==6 && (date<=20 && date>0)){
    console.log("true");
}
else if((month>4 && month<6) && (date>0 && date<32)){
    console.log("true");
}
else{
    console.log("false"); 
}

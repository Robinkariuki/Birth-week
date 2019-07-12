var DayMonth = parseInt(prompt("Enter Day of the month"));
var Month =  parseInt(prompt("Enter  month"));
var Year =  parseInt(prompt("Enter Year"));
var cc = year.slice(0,2)

function calculate(){
return (((cc/4)-2*cc-1)+((5*year/4))+((26*(Month+1)/10))+DayMonth)%7;
}

  console.log(calculate);

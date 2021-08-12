function hoursAndMinutes (a){

  var hours = Math.floor(a/60); //function to round of float to integer/whole number
  var minutes = a % 60;

  console.log( {hours,minutes})//used curly braces to seperate two results
  
}

hoursAndMinutes(133)
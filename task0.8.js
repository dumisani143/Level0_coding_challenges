function convertToTime(t) {
  t = Number(t);
  var hours = Math.floor(t / 60);
  var minutes = Math.floor(t % 60);

  var converted_hours = hours > 0 ? hours + (hours == 1 ? " hour, " : " hours, ") : "";
  var converted_minutes = minutes > 0 ? minutes + (minutes == 1 ? " minute, " : " minutes, ") : "";
  
  return converted_hours + converted_minutes ; 
}

console.log(convertToTime(133))
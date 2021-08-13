function converter(celsius){
  var fahrenheit = celsius * 1.8 + 32; // Celsios to farenheight 
  console.log(fahrenheit.toFixed(0))

}

function converter2(fahrenheit){
  var celsius = (fahrenheit - 32) * 0.5556;//farenheight to celsios
  console.log(celsius.toFixed(0))
}

converter(90)
converter2(90)
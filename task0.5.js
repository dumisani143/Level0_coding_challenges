function areaOfTriangle(side1,side2,side3){

var s = (side1+side2+side3)/2  
var area = (s*(s-side1)*(s-side2)*(s-side3)) ** 0.5
console.log(area.toFixed(2))
}
  

areaOfTriangle(5,3,7)
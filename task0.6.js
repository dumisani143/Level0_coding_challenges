function maxValue(num1, num2, num3) 
 {
  var largestNum = 0;

  if (num1 > num2)
  {
    largestNum = num1;
  } else
  {
    largestNum = num2;
  }
  if (num3 > largestNum) 
  {
    largestNum = num3;
  }
  console.log(largestNum);
}

maxValue(15,20,11);

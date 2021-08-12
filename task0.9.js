function vowels(str) {
    
  var strVowels = "";
  var i;
  
  for (i in str) {
      
      // checks if string charactors match listed vowels
      if (str.charAt(i) == "a" || str.charAt(i) == "e" || str.charAt(i) == "i" || 
  str.charAt(i) == "o" || str.charAt(i) == "u" || str.charAt(i) == "A" || str.charAt(i) == "E" || str.charAt(i) == "I" || 
  str.charAt(i) == "O" || str.charAt(i) == "U")
  
   {// adds matching vowels from string
          strVowels += str.charAt(i); 
      }
  }
  
  i = 0;
  for (i in strVowels) {
      console.log(strVowels.charAt(i));
  }
  ;
  }
  
  
  
  vowels("Umuzi")
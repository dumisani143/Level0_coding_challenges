function commonCharactors(string1, string2) {
   
    var str1 = string1.toLowerCase();
    var str2 = string2.toLowerCase();
    var result = "";

    //finds matches between strings and adds to result
    for (var a = 0; a < str1.length; a++) {
      for (var b = 0; b < str2.length; b++) {
        if (str1[a] === str2[b]) {
          result += str1[a]+",";
        }
      }
      
    }
 console.log(result);
  }
  
  commonCharactors("house", "computers");
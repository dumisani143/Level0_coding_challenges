  
function matchChar(str,str1) {
  let commonLetters = [];

  //finds matching char in string
  for (let i = 0; i < str.length; i++) {
      if (str.includes(str1[i])) {
          if (!commonLetters.includes(str[i].toLowerCase())) {
          commonLetters.push(str1[i].toLowerCase());
          }    
      }
  }
  console.log("Common Letters: " + commonLetters.toString());
}
  
  matchChar("houseses", "computers");
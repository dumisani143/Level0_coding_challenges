  
function matchChar(str,str1) {
  let strVowels = [];

  //finds matching char in string
  for (let i = 0; i < str.length; i++) {
      if (str.includes(str1[i])) {
          if (!strVowels.includes(str[i].toLowerCase())) {
          strVowels.push(str1[i].toLowerCase());
          }    
      }
  }
  console.log(strVowels);
}
  
  matchChar("houseses", "computers");
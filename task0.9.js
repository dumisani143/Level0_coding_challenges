  
function vowelsInStr(str) {
    let vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let strVowels = [];

    //finds matching vowels in array
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            if (!strVowels.includes(str[i].toLowerCase())) {
            strVowels.push(str[i].toLowerCase());
            }    
        }
    }
    console.log(strVowels);
}

vowelsInStr("UmuzDUMInia")
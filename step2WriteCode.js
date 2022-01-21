///// 1) Sum Zero ///////

function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === 0){
                return true
            } else {
                return false
            }
        }
    }
}

console.log(sumZero([2, 2, 5, 5])) //false
console.log(sumZero([3,-3])) //true

///// code runtime = O(n squared) ///////////////

///// 2) Unique Characters //////////

function hasUniqueChars(str) {
    let strSet = new Set(str)

    if(str.length > strSet.size) {
        return false
    } else if (str.length === strSet.size) {
        return true
    }
}

hasUniqueChars("coffee") //false
hasUniqueChars("tea") //true

/////code runtime:    O(n)     /////////////////

///// 3) pangram sentence ////////////////////////

function isPangram(string){
    let strLowerCase = string.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
    
    for (let i = 0; i < alphabet.length; i++) {
      if(strLowerCase.indexOf(alphabet[i]) < 0){
        return false;
      }
    }
    return true;
  }

console.log(isPangram("do you like gouda?")) //false
console.log(isPangram("the quick brown fox jumps over the lazy dog.")) //true
/////// code runtime:     O(n)              //////////////////////

////// 4) longest word  ////////////////////////////////////////////////

function longestWord(arr) {
    let word = ''
    for(let i = 0; i < arr.length; i++){
        if(word.length < arr[i].length){
            word = arr[i]
        }
    }
    return word.length
}
console.log(longestWord(['hi', 'hello']))
//////code runtime:    O(n)    /////////////////////////////

//// EXTRA CREDIT //////

/// space complexity of 1)sumZero = O(n squared)
///  
/// space complexity of 2)hasUniqueChars = O(n)
///
/// space complexity of 3)isPangram = O(n)
///
/// space complexity of 4)longestWord = O(n)
///




///// 1) Sum Zero ///////

function sumZero (num1, num2) {
    if(num1 + num2 === 0){
        return true
    } else {
        return false
    }
}

console.log(sumZero(2,2))
console.log(sumZero(3,-3))

///// code runtime = O(1) ///////////////

///// 2) Unique Characters //////////

function hasUniqueChars(str) {
    let strSet = new Set(str)

    if(str.length > strSet.size) {
        return false
    } else if (str.length === strSet.size) {
        return true
    }
}

hasUniqueChars("coffee")
hasUniqueChars("tea")

/////code runtime:    O(1)     /////////////////

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

console.log(isPangram("do you like gouda?"))
console.log(isPangram("the quick brown fox jumps over the lazy dog."))
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

/// space complexity of 1)sumZero = O(1)
///  
/// space complexity of 2)hasUniqueChars = O(n squared)
///
/// space complexity of 3)isPangram = O(n)
///
/// space complexity of 4)longestWord = O(n squared)
///




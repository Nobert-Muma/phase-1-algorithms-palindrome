function isPalindrome(word) {
  // Write your algorithm here
  let stringToLowercase=word.toLowerCase();
  let reversedString=stringToLowercase.split('').reverse().join('');
  if(stringToLowercase===reversedString){
    return true;
  } else {
    return false;
  }
}
console.log(isPalindrome('racecar'));
console.log(isPalindrome('robot'));
/* 
  Add your pseudocode here
  1. create a variable to hold the lowercased string
  2. convert the string to lowercase
  3. create a variable to hold the reversed version of the string
  4. use if else statement to complare the string and its reversed version to check if they are palindrome
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;

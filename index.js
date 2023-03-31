function isPalindrome(word) {
  const len = word.length;
  for (let i = 0; i < len / 2; i++) {
    if (word[i] !== word[len - 1 - i]) {
      return false;
    }
  }
  return true;
}


/* 
  Add your pseudocode here
 Loop through to check the first character to the last character of the string and then move next
Compare characters and return false if they do not match 
*/

/*
  Add written explanation of your solution here
  "The function compares the characters at the beginning and end of the string. If the characters do not match, the function returns false.
   "If all the characters match, the function returns true"
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

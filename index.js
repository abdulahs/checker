class Checker {
    isPalindrome(str) {
      const cleanedStr = str.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
      const reversedStr = cleanedStr.split('').reverse().join('');
      return cleanedStr === reversedStr;
    }
  }
  
  // Example usage
  const checker = new Checker();
  
  const palindromeString = 'A man, a plan, a canal, Panama!';
  const nonPalindromeString = 'Hello, World!';
  
  console.log(checker.isPalindrome(palindromeString)); // true
  console.log(checker.isPalindrome(nonPalindromeString)); // false
  
function isPalindrome(str) {
    // Convert string to lowercase and remove non-alphanumeric characters
    let cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    
    // Convert string to array
    let arr = cleanStr.split("");
    
    // Reverse the array
    let reversedArr = arr.slice().reverse();
    
    // Compare original and reversed
    return arr.join("") === reversedArr.join("");
}

// Example
console.log(isPalindrome("madam"));     // true
console.log(isPalindrome("hello"));     // false
function palindromeChecker(str) {
    let j = str.length - 1;
    for (let i = 0; i < j / 2; i++) {
        let x = str[i]; //forward character
        let y = str[j - i]; //backward character
        if (x !== y) {
            // return false if string not match
            return false;
        }
    }
    /// return true if string is palindrome
    return true;

}

//function that display the result testing
function isPalindrome(str) {
    // variable will checked here
    let result = palindromeChecker(str);

    //condition checking result is true or not
    if (result) {
        console.log("String is palindrome ");
    } else {
        console.log("String is not a palindrome");
    }
}

// test variable
let test = "nanana";
isPalindrome(test);

isPalindrome("Yuhuuu");

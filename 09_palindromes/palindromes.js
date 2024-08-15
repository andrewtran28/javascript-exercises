const palindromes = function (string) {
    const alphanumerical = "abcdefghijklmnopqrstuvwxyz0123456789";

    const rawString = string
        .toUpperCase()
        .split("")
        .filter((char) => alphanumerical.includes(char))
        .join("");

    const reverseString = rawString
        .split('')
        .reverse()
        .join('');

    return rawString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;

const reverseString = function(string) {

let strLength = string.length;
let reverseStr = "";

for (let i = strLength-1; i >= 0; i--) {
    reverseStr += string.charAt(i);
}

return reverseStr;
};

// Do not edit below this line
module.exports = reverseString;

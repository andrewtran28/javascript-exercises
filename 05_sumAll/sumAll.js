const sumAll = function(int1, int2) {

    let sum = 0;
    let tempInt = 0;
    
    if (int1 < 0 || int2 < 0) {
        return "ERROR";
    }

    if (Number.isInteger(int1) == 0 || Number.isInteger(int2) == 0) {
        return "ERROR";
    }

    //Check to see if second argument is smaller than first argument, then swap them if so.
    if (int2 < int1) {
        tempInt = int2;
        int2 = int1;
        int1 = tempInt;
    }

    for (let i = int1; i <= int2; i++) {
        sum += i
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;

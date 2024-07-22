const removeFromArray = function(...args) {

    let array = args[0];
    let filteredArray = array;
    let removeValue;

    for (let i = 1; i < args.length; i++) {
        removeValue = args[i];
        filteredArray = filteredArray.filter((filteredArray) => filteredArray !== removeValue);
    }

    return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
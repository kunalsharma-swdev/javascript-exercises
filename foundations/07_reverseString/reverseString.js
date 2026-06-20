const reverseString = function (str) {
    let len = str.length;
    let reversed = "";
    for (let i = len - 1; i > -1; i--) {
        reversed += str[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;

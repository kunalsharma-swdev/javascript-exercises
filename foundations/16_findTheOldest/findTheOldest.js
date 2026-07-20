const findTheOldest = function (x) {
    let oldest;
    let current = 0;

    for (let i = 0; i < x.length; i++) {
        let age = x[i].yearOfDeath - x[i].yearOfBirth;

        if (age > current) {
            current = age;
            oldest = x[i];
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

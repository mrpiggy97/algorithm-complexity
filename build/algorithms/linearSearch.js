"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// linearSearch will return index of password in array if it is member
function linearSearch(array, password) {
    for (var i = 0; i < array.length; i++) { //o(n) because operation will run as many times as length of array
        if (array[i] === password) { // o(1) opeartion will run once
            return i; // o(1) operation will run once
        }
    }
    return -1; // o(1) operation will run once
}
exports.default = linearSearch;
// time complexity is o(n)

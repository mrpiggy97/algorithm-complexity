"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// bubbleSearch will sort numbers in array from lowest to highest
function bubbleSearch(array) {
    var length = array.length; // o(1) because operation is run once
    for (var i = 0; i < length; i++) { // o(n) because operation is run as many times as value of length
        for (var j = 0; j < length; j++) { // o(n) same reason as above
            if (array[j] > array[j + 1]) { // o(1) because operation is run once
                var temporal = array[j]; // o(1) because operation is run once
                array[j] = array[j + 1]; // o(1) because operation is run once
                array[j + 1] = temporal; // o(1) because operation is run once
            }
        }
    }
    return array; //because operation is run once
}
exports.default = bubbleSearch;
//time complexity is o(n^2)

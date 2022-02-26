"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// selectionSort will sort items inside array from lowest to highest
function selectionSort(array) {
    var length = array.length; // o(1) because operation runs once
    for (var i = 0; i < length; i++) { // o(n) because operation runs as much as length
        var currentIndex = i; // o(1) because operation runs once
        for (var nextItemIndex = i + 1; nextItemIndex < length; nextItemIndex++) { // o(n) because operation runs as much as length
            if (array[nextItemIndex] < array[currentIndex]) { // o(1) because operation runs once
                currentIndex = nextItemIndex; // o(1) because operation runs once
            }
        }
        if (currentIndex != i) { // o(1) because operation runs once
            var temporal = array[i]; // o(1) because operation runs once
            array[i] = array[currentIndex]; // o(1) because operation runs once
            array[currentIndex] = temporal; // o(1) because operation runs once
        }
    }
    return array; // o(1) because operation runs once
}
exports.default = selectionSort;
// time complexity is o(n^2)

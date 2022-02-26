"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoDimensions = exports.convertString = void 0;
function repeat(array) {
    var newArray = array;
    return newArray;
}
function convertString(array) {
    var result = array.map(function (arrayMember) { return arrayMember.toString(); });
    console.log(result);
}
exports.convertString = convertString;
function twoDimensions(numberOfArrays) {
    var array = new Array(numberOfArrays);
    for (var i = 0; i < numberOfArrays; i++) {
        array[i] = new Array(numberOfArrays);
    }
    return array;
}
exports.twoDimensions = twoDimensions;

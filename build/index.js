"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var performanceNow_1 = __importDefault(require("./performance/time/performanceNow"));
var index_1 = require("./performance/space/index");
var startTime = performance.now();
(0, performanceNow_1.default)(5);
var finishTime = performance.now();
var duration = finishTime - startTime;
console.log("algorithm countNumbers lasted ".concat(duration, " miliseconds"));
var numbers = [1, 2, 2, 111, 11111, 333];
(0, index_1.convertString)(numbers);
console.log((0, index_1.twoDimensions)(5));

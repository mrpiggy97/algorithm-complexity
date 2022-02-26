import countNumbers from "./performance/time/performanceNow";
import {convertString,twoDimensions} from './performance/space/index'

let startTime : number = performance.now()
countNumbers(5)
let finishTime : number = performance.now()
let duration : number = finishTime - startTime
console.log(`algorithm countNumbers lasted ${duration} miliseconds`)
let numbers : number[] = [1,2,2,111,11111,333]
convertString(numbers)
console.log(twoDimensions(5))
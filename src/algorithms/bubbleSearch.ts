// bubbleSearch will sort numbers in array from lowest to highest
export default function bubbleSearch(array : number[]) : number[]{
    let length : number = array.length // o(1) because operation is run once
    for (let i = 0; i < length; i++) { // o(n) because operation is run as many times as value of length
        for (let j = 0; j < length; j++) { // o(n) same reason as above
            if (array[j] > array[j + 1]) { // o(1) because operation is run once
                let temporal = array[j]; // o(1) because operation is run once
                array[j] = array[j + 1]; // o(1) because operation is run once
                array[j + 1] = temporal; // o(1) because operation is run once
            }
        }
    }
    return array; //because operation is run once
}

//time complexity is o(n^2)
// linearSearch will return index of password in array if it is member
export default function linearSearch(array : number[],password : number) : number{
    for(let i = 0; i < array.length; i++){//o(n) because operation will run as many times as length of array
        if (array[i] === password){// o(1) opeartion will run once
            return i // o(1) operation will run once
        }
    }
    return -1 // o(1) operation will run once
}

// time complexity is o(n)
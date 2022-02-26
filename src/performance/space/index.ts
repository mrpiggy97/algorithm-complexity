function repeat(array : number[]) : number[]{
    let newArray : number[] = array
    return newArray
}

function convertString(array : number[]) : void{
    let result : string[] = array.map((arrayMember : number) : string => arrayMember.toString())
    console.log(result)
}

function twoDimensions(numberOfArrays : number) : number[]{
    let array = new Array(numberOfArrays)
    for(let i = 0; i < numberOfArrays; i++){
        array[i] = new Array(numberOfArrays)
    }
    return array
}

export {convertString,twoDimensions}
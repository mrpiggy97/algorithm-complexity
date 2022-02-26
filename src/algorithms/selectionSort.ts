
// selectionSort will sort items inside array from lowest to highest
export default function selectionSort(array : number[]) : number[] {
  let length = array.length; // o(1) because operation runs once

  for (let i = 0; i < length; i++) { // o(n) because operation runs as much as length
    let currentIndex = i; // o(1) because operation runs once
    for (let nextItemIndex = i + 1; nextItemIndex < length; nextItemIndex++) {// o(n) because operation runs as much as length
      if (array[nextItemIndex] < array[currentIndex]) { // o(1) because operation runs once
        currentIndex = nextItemIndex; // o(1) because operation runs once
      }
    }
    if (currentIndex != i) {// o(1) because operation runs once
      let temporal = array[i];// o(1) because operation runs once
      array[i] = array[currentIndex];// o(1) because operation runs once
      array[currentIndex] = temporal;// o(1) because operation runs once
    }
  }
  return array;// o(1) because operation runs once
}

// time complexity is o(n^2)
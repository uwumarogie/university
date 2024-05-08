function findMinIndex(arr: number[], start: number, end: number): number {
  let minIndex = start;
  for (let j = start + 1; j < end; j++) {
    if (arr[j] < arr[minIndex]) {
      minIndex = j;
    }
  }
  return minIndex;
}

function swap(arr: number[], i: number, j: number): void {
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

function selectionSort(arr: number[]): number[] {
  let n = arr.length;
  let lastIndex = n - 1;

  for (let i = 0; i < lastIndex; i++) {
    const minIndex = findMinIndex(arr, i, lastIndex);
    console.log(arr);
    if (minIndex !== i) {
      swap(arr, i, minIndex);
    }
  }

  return arr;
}

const arr = [64, 25, 12, 22, 11];
console.log("Sorted array:", selectionSort(arr));


function insertionSort(arr:number[], length: number) {
  for(let  i = 1; i < length; i++) {
    for(let j  = i - 1; j >= 0; j-- ) {
      if(arr[j] > arr[j+1]) {
        console.log(arr)
        swap(arr, j, j + 1)
      } else {
        break
      }
    }
  }
}


insertionSort([3,24,34,8,7,2], 6)



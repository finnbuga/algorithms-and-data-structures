export default function mergeSort(a: number[], start = 0, end = a.length) {
  const hasLessThanTwoElements = end - start < 2;
  if (hasLessThanTwoElements) {
    return;
  }

  const mid = Math.floor((start + end) / 2);
  mergeSort(a, start, mid); // sort left half
  mergeSort(a, mid, end); // sort right half
  merge(a, start, mid, end); // merge them
}

function merge(a: number[], start: number, mid: number, end: number): void {
  const sorted: number[] = [];
  let i1: number = start; // index for left half
  let i2: number = mid; // index for right half

  while (i1 < mid && i2 < end) {
    sorted.push(a[i1] <= a[i2] ? a[i1++] : a[i2++]);
  }

  while (i1 < mid) {
    sorted.push(a[i1++]);
  }

  a.splice(start, sorted.length, ...sorted);
}

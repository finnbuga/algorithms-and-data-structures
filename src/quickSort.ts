export default function quickSort(a: number[]): number[] {
  sortSlice(0, a.length);
  return a;

  function sortSlice(begin: number, end: number): void {
    const sliceLength = end - begin;
    if (sliceLength <= 1) {
      return;
    }

    const splitIndex = splitSmallerToLeft();
    sortSlice(begin, splitIndex);
    sortSlice(splitIndex, end);
    return;

    function splitSmallerToLeft(): number {
      const mid = Math.floor((begin + end) / 2);
      const pivot = a[mid];

      let left = begin;
      let right = end - 1;

      while (left < right) {
        while (a[left] < pivot) {
          left++;
        }
        while (a[right] > pivot) {
          right--;
        }
        if (left < right) {
          swipe(left, right);
          left++;
          right--;
        }
      }

      const partitionIndex = left;
      return partitionIndex;
    }
  }

  function swipe(i1: number, i2: number) {
    [a[i1], a[i2]] = [a[i2], a[i1]];
  }
}

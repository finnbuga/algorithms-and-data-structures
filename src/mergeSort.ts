export default function sortSlice(a: number[]) {
  sortSlice(0, a.length);
  return a;

  function sortSlice(begin: number, end: number) {
    const sliceLength = end - begin;
    if (sliceLength <= 1) {
      return;
    }

    const mid = Math.floor((begin + end) / 2);
    sortSlice(begin, mid);
    sortSlice(mid, end);
    mergeSortedSlices();

    function mergeSortedSlices(): void {
      const slice1Begin = begin,
        slice1End = mid,
        slice2Begin = mid,
        slice2End = end;
      const sorted: number[] = [];
      let i1: number = slice1Begin;
      let i2: number = slice2Begin;

      while (i1 < slice1End && i2 < slice2End) {
        sorted.push(a[i1] <= a[i2] ? a[i1++] : a[i2++]);
      }

      while (i1 < slice1End) {
        sorted.push(a[i1++]);
      }

      a.splice(begin, sorted.length, ...sorted);
    }
  }
}

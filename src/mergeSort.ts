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
    mergeSortedSlices(begin, mid, end);
  }

  function mergeSortedSlices(
    s1Begin: number,
    s1End: number,
    s2End: number
  ): void {
    const s2Begin = s1End;
    const sorted: number[] = [];
    let i1: number = s1Begin;
    let i2: number = s2Begin;

    while (i1 < s1End && i2 < s2End) {
      sorted.push(a[i1] <= a[i2] ? a[i1++] : a[i2++]);
    }

    while (i1 < s1End) {
      sorted.push(a[i1++]);
    }

    a.splice(s1Begin, sorted.length, ...sorted);
  }
}

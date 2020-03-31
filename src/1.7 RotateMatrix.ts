type Matrix = Array<Array<any>>;

export default function rotateMatrix(m: Matrix): void {
  for (let row: number = 0; row <= m.length / 2; row++) {
    rotateRow(m, row);
  }
}

function rotateRow(m: Matrix, row: number): void {
  for (let col: number = row; col < m.length - 1; col++) {
    rotateElm(m, row, col);
  }
}

function rotateElm(m: Matrix, row: number, col: number): void {
  const row1: number = col,
    col1: number = m.length - 1 - row,
    row2: number = col1,
    col2: number = m.length - 1 - row1,
    row3: number = col2,
    col3: number = m.length - 1 - row2;

  [m[row][col], m[row1][col1], m[row2][col2], m[row3][col3]] = [
    m[row3][col3],
    m[row][col],
    m[row1][col1],
    m[row2][col2]
  ];
}

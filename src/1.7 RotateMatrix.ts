export type Matrix = Array<Array<any>>;

export default class RotatingMatrix {
  constructor(private matrix: Matrix) {}

  rotate(): Matrix {
    for (let row = 0; row <= this.matrix.length / 2; row++) {
      this.rotateRow(row);
    }
    return this.matrix;
  }

  private rotateRow(row: number): void {
    for (let col: number = row; col < this.matrix.length - 1; col++) {
      this.rotateElm(row, col);
    }
  }

  private rotateElm(row: number, col: number): void {
    const m = this.matrix;
    const row1 = col,
      col1 = m.length - 1 - row,
      row2 = col1,
      col2 = m.length - 1 - row1,
      row3 = col2,
      col3 = m.length - 1 - row2;

    [m[row][col], m[row1][col1], m[row2][col2], m[row3][col3]] = [
      m[row3][col3],
      m[row][col],
      m[row1][col1],
      m[row2][col2],
    ];
  }
}

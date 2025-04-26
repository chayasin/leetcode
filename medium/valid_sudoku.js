/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  for (let i = 0; i < 9; i++) {
    let row = new Set();
    let col = new Set();
    let box = new Set();
    for (let j = 0; j < 9; j++) {
      // check rows
      if (board[i][j] != ".") {
        if (row.has(board[i][j])) return false;
        row.add(board[i][j]);
      }

      // check column
      if (board[j][i] != ".") {
        if (col.has(board[j][i])) return false;
        col.add(board[j][i]);
      }

      // check boxes
      let rowIdx = ((i / 3) >> 0) * 3 + ((j / 3) >> 0);
      let colIdx = (i % 3) * 3 + (j % 3);
      if (board[rowIdx][colIdx] != ".") {
        if (box.has(board[rowIdx][colIdx])) return false;
        box.add(board[rowIdx][colIdx]);
      }
    }
  }
  return true;
};

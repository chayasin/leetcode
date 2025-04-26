class Solution:
    def isValidSudoku(self, board: list[list[str]]) -> bool:
        for i in range(0, 9):
            row, col, box = set(), set(), set()
            for j in range(0, 9):
                # check row
                if board[i][j] != ".":
                    if board[i][j] in row:
                        return False
                    row.add(board[i][j])
                # check col
                if board[j][i] != ".":
                    if board[j][i] in col:
                        return False
                    col.add(board[j][i])
                # check box
                row_ind = (i // 3) * 3 + (j // 3)
                col_ind = (i % 3) * 3 + (j % 3)
                if board[row_ind][col_ind] != ".":
                    if board[row_ind][col_ind] in box:
                        return False
                    box.add(board[row_ind][col_ind])
        return True

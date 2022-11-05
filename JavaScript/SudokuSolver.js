// Sudoku Solver

class SudokuSolver {
    static sudoku(puzzle) {
        let nextEmpty = this.findNextEmpty(puzzle);
        let row = nextEmpty[0];
        let col = nextEmpty[1];
        if (row === -1) {
            return puzzle;
        }
        for (let num = 1; num <= 9; num++) {
            if (this.checkVal(puzzle, row, col, num)) {
                puzzle[row][col] = num;
                this.sudoku(puzzle);
            }
        }

        if (this.findNextEmpty(puzzle)[0] !== -1) puzzle[row][col] = 0;
        return puzzle;
    }

    static findNextEmpty(puzzle) {
        for (let i = 0; i < 9; i++) {
            let j = puzzle[i].indexOf(0);
            if (j !== -1) return [i, j];
        }
        return [-1, -1];
    }

    static checkRow(puzzle, row, num) {
        return puzzle[row].indexOf(num) !== -1 ? false : true;
    }

    static checkCol(puzzle, col, num) {
        for (let i = 0; i < 9; i++) {
            if (puzzle[i][col] === num) return false;
        }
        return true;
    }

    static checkBox(puzzle, row, col, num) {
        let ulRowIdx = Math.floor(row / 3) * 3;
        let ulColIdx = Math.floor(col / 3) * 3;
        for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (puzzle[ulRowIdx + i][ulColIdx + j] === num) return false;
            }
        }
        return true;
    }

    static checkVal(puzzle, row, col, num) {
        return this.checkRow(puzzle, row, num) &&
            this.checkCol(puzzle, col, num) &&
            this.checkBox(puzzle, row, col, num)
            ? true
            : false;
    }
}

module.exports = SudokuSolver;

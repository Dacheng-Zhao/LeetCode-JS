/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    if (board === null || board === undefined || board.length === 0 || board[0].length === 0) {
        return false
    }
    let res = false;
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) {
                DFS(board, 0, word, i, j);
            }
        }
    }
    return res
    
    
    function DFS(board, index, word, row, col) {
        if (index === word.length) {
            res = true;
            return true
        }
        if (row < 0 || row >= board.length || col < 0 || col >= board[0].length || board[row][col] === 'visited') {
            return false
        }
        if (board[row][col] === word[index]) {
            let temp = board[row][col];
            board[row][col] = 'visited';
            if (DFS(board, index + 1, word, row + 1, col) ||
            DFS(board, index + 1, word, row - 1, col) ||
            DFS(board, index + 1, word, row, col + 1) ||
            DFS(board, index + 1, word, row, col - 1)) {
                return true
            }
            board[row][col] = temp;
            return false
        }
    }
};
       
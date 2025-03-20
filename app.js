let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameActive = true;

const cells = document.querySelectorAll('.cell');
const messageElement = document.getElementById('message');

function handleClick(index) {
    if (board[index] !== '' || !isGameActive) return;

    board[index] = currentPlayer;
    cells[index].textContent = currentPlayer;

    if (checkWinner()) {
        messageElement.textContent = `${currentPlayer} venceu!`;
        isGameActive = false;
    } else if (board.every(cell => cell !== '')) {
        messageElement.textContent = 'Empate!';
        isGameActive = false;
    } else {
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
}

function checkWinner() {
    const winningCombination = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    return winningCombination.some(combination => {
        const [a, b, c] = combination;
        return board[a] !== '' && board[a] === board[b] && board[a] === board[c];
    });
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = 'X';
    isGameActive = true;
    cells.forEach(cell => cell.textContent = '');
    messageElement.textContent = '';
}

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => handleClick(index));
});

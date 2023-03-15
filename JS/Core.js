const board = Array(9).fill("");
let currentPlayer = "X";

document.querySelectorAll(".field div").forEach((cell, index) => {
    cell.addEventListener("click", () => {
        if (board[index]) {
            return;
        }

        makeMove(cell, index);
        currentPlayer = currentPlayer === "X" ? "O" : "X";

        setTimeout(() => checkWinner(), 1);
    });
});

function makeMove(cell, index) {
    board[index] = currentPlayer;
    cell.textContent = currentPlayer;
}

function checkWinner() {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    let winner = null;
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            winner = board[a];
        }
    }

    if (winner) {
        alert(`${winner} wins!`);
        resetBoard();
    } else if (board.every((cell) => cell !== "")) {
        alert("Tie!");
        resetBoard();
    }
}

function resetBoard() {
    board.fill("");
    document.querySelectorAll(".field div").forEach((cell) => {
        cell.textContent = "";
    });
    currentPlayer = "X";
}
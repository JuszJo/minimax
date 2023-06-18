const board = document.getElementById('grid');
const squares = document.getElementsByClassName('square');

const squaresArray = Array.from(squares);

squaresArray.forEach(square => square.addEventListener('click', handleSquareClick))

function handleSquareClick() {
    console.log(this);
}

function minimax(board, player) {
    // code goes here
}
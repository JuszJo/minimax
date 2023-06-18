const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
]

const squares = document.getElementsByClassName('square');
const moves = ['X', 'O'];
const minMovesToWin = 5;
let movesTaken = 0;

const squaresArray = Array.from(squares);

squaresArray.forEach(square => square.addEventListener('click', handleSquareClick))


function addMoveToBoard(move, id) {
    const row = Math.ceil(id / 3);

    const index = id % 3 == 0 ? 2 : id % 3 - 1;

    board[row - 1][index] = move;
}

function addMoveToHTMLBoard(element, move) {
    element.innerHTML = `
        <div class="move-div">   
            <h2>${move}</h2>
        </div>
    `;
}

function checkWin() {

}

function handleSquareClick() {
    const move = moves.splice(0, 1)[0];

    addMoveToBoard(move, this.id)

    console.log(board);

    addMoveToHTMLBoard(this, move)

    checkWin()

    ++movesTaken;

    moves.push(move);
}

function minimax(board, player) {
    // code goes here
}
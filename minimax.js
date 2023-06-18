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

    if(board[row - 1][index] == 0) {
        board[row - 1][index] = move;

        ++movesTaken;

        moves.splice(0, 1);

        moves.push(move);
    }
}

function addMoveToHTMLBoard(element, move) {
    if(!element.ariaChecked) {
        element.innerHTML = `
            <div class="move-div">   
                <h2>${move}</h2>
            </div>
        `;

        element.ariaChecked = true;
    }
}

function checkRowWin() {
    const row1 = board[0];
    const row2 = board[1];
    const row3 = board[2];

    let row1Win = false;
    let row2Win = false;
    let row3Win = false;

    row1Win = row1.every(move => move != 0 && move == row1[0])
    row2Win = row2.every(move => move != 0 && move == row2[0])
    row3Win = row3.every(move => move != 0 && move == row3[0])

    console.log(row1, row2, row3);
    console.log(row1Win, row2Win, row3Win);

}

function checkColWin() {

}

function checkWin() {
    if(movesTaken >= minMovesToWin) {
        checkRowWin()
        checkColWin()
    }
}

function handleSquareClick() {
    const move = moves.slice(0, 1)[0];

    addMoveToBoard(move, this.id)

    addMoveToHTMLBoard(this, move)

    checkWin()
}

function minimax(board, player) {
    // code goes here
}
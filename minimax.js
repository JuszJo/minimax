const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0]
];

const squares = document.getElementsByClassName('square');
const moves = ['X', 'O'];
const minMovesToWin = 5;
let movesTaken = 0;
let win = null;

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

    row1Win = row1.every(move => move != 0 && move == row1[0]);
    row2Win = row2.every(move => move != 0 && move == row2[0]);
    row3Win = row3.every(move => move != 0 && move == row3[0]);

    // console.log(row1, row2, row3);
    // console.log(row1Win, row2Win, row3Win);

    if(row1Win) return row1;
    else if(row2Win) return row2;
    else if(row3Win) return row3;
    else return null;
}

function checkColWin() {
    const col1 = [board[0][0], board[1][0], board[2][0]];
    const col2 = [board[0][1], board[1][1], board[2][1]];
    const col3 = [board[0][2], board[1][2], board[2][2]];

    let col1Win = false;
    let col2Win = false;
    let col3Win = false;

    col1Win = col1.every(move => move != 0 && move == col1[0]);
    col2Win = col2.every(move => move != 0 && move == col2[0]);
    col3Win = col3.every(move => move != 0 && move == col3[0]);

    if(col1Win) return col1;
    else if(col2Win) return col2;
    else if(col3Win) return col3;
    else return null;

    // console.log(col1, col2, col3);
    // console.log(col1Win, col2Win, col3Win);
}

function checkCrossWin() {
    const cross1 = [board[0][0], board[1][1], board[2][2]];
    const cross2 = [board[0][2], board[1][1], board[2][0]];

    let cross1Win = false;
    let cross2Win = false;
    
    cross1Win = cross1.every(move => move != 0 && move == cross1[0]);
    cross2Win = cross2.every(move => move != 0 && move == cross2[0]);
    
    // console.log(cross1, cross2);
    // console.log(cross1Win, cross2Win);
    if(cross1Win) return cross1;
    else if(cross2Win) return cross2;
    else return null;
}

function checkWin() {
    if(movesTaken >= minMovesToWin) {
        const row = checkRowWin();
        const col = checkColWin();
        const cross = checkCrossWin();

        // console.log(row, col, cross);

        if(row) win = row;
        else if(col) win = col;
        else if(cross) win = cross;
    }
}

function endGame() {
    
}

function handleSquareClick() {
    const move = moves.slice(0, 1)[0];

    addMoveToBoard(move, this.id);

    addMoveToHTMLBoard(this, move);

    checkWin();

    if(win) endGame();
}

function minimax(board, player) {
    // code goes here
}
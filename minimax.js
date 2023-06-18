const board = document.getElementById('grid');
const squares = document.getElementsByClassName('square');
const moves = ['X', 'O'];


const squaresArray = Array.from(squares);

squaresArray.forEach(square => square.addEventListener('click', handleSquareClick))

function addMoveToHTML(element, move) {
    element.innerHTML = `
        <div class="move-div">   
            <h2>${move}</h2>
        </div>
    `;
}

function handleSquareClick() {
    const move = moves.splice(0, 1);

    addMoveToHTML(this, move)

    moves.push(move);
}

function minimax(board, player) {
    // code goes here
}
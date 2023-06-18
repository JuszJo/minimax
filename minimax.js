const board = document.getElementById('grid');
const squares = document.getElementsByClassName('square');
const moves = ['X', 'O'];


const squaresArray = Array.from(squares);

squaresArray.forEach(square => square.addEventListener('click', handleSquareClick))

function handleSquareClick() {
    const move = moves.splice(0, 1);

    this.innerHTML = `
        <div class="move-div">   
            <h2>${move}</h2>
        </div>
    `;

    moves.push(move);
}

function minimax(board, player) {
    // code goes here
}
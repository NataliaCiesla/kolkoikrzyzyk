let player1=document.createElement('div');
player1.className ="cross";

let player2=document.createElement('div');
player2.className='circle';

let currentRound=1;

const squaresBox=[...document.querySelectorAll('.cell')];
squaresBox.forEach(square=>square.addEventListener('click', move));

function move(a){
    let movePlayer=currentRound % 2 === 0 ? player2 : player1;
    a.target.appendChild(movePlayer.cloneNode());
    currentRound++;
}


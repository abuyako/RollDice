var scores, roundScore, activePlayer, dice;

scores = [0,0];
roundScore = 0;
activePlayer = 0;

dice = Math.floor(Math.random() *6 ) + 1;
document.querySelector('#current-0').textContent = dice;
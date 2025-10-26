const redWin = localStorage.getItem('redWin') === 'true';
const blueWin = localStorage.getItem('blueWin') === 'true';

const redScore = parseInt(localStorage.getItem('redScore')) || 0;
const blueScore = parseInt(localStorage.getItem('blueScore')) || 0;

const winnerTitle = document.getElementById('winnerTitle');
const finalScore = document.getElementById('finalScore');

if (blueWin) {
    winnerTitle.textContent = 'Blue Player Wins!';
    winnerTitle.className = 'text-7xl font-bold mb-4 text-blue-500';
    finalScore.textContent = `Final Score - Blue: ${blueScore}, Red: ${redScore}`;
    finalScore.className = 'text-4xl font-semibold mb-8 text-blue-600';
} else{
    winnerTitle.textContent = 'Red Player Wins!';
    winnerTitle.className = 'text-7xl font-bold mb-4 text-red-500';
    finalScore.textContent = `Final Score - Red: ${redScore}, Blue: ${blueScore}`;
    finalScore.className = 'text-4xl font-semibold mb-8 text-red-600';
}

document.getElementById('playAgainBtn').addEventListener('click', () => {
    localStorage.setItem('redScore', 0);
    localStorage.setItem('blueScore', 0);
    localStorage.setItem('currentGame', 1);
    localStorage.setItem('redWin', false);
    localStorage.setItem('blueWin', false);
    window.location.href = 'wordle.html';
});

document.getElementById('homeBtn').addEventListener('click', () => {
    localStorage.setItem('redScore', 0);
    localStorage.setItem('blueScore', 0);
    localStorage.setItem('currentGame', 1);
    localStorage.setItem('redWin', false);
    localStorage.setItem('blueWin', false);
    window.location.href = 'home.html';
});
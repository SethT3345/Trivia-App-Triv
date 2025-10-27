
document.addEventListener('DOMContentLoaded', () => {
    const score = localStorage.getItem('quizScore') || 0;
    const total = localStorage.getItem('quizTotal') || 0;
    const percentage = total > 0 ? Math.round((score / total) * 100) : 0;

    document.getElementById('scoreValue').textContent = score;
    document.getElementById('totalValue').textContent = total;
    document.getElementById('percentageValue').textContent = percentage + '%';
    const messageEl = document.getElementById('scoreMessage');
    if (percentage >= 100) {
        messageEl.textContent = 'Perfect Score! 🎉';
        messageEl.className = 'text-2xl font-bold text-green-600 mt-4';
    } else if (percentage >= 90) {
        messageEl.textContent = 'Outstanding! 🌟';
        messageEl.className = 'text-2xl font-bold text-green-500 mt-4';
    } else if (percentage >= 70) {
        messageEl.textContent = 'Great job! 👏';
        messageEl.className = 'text-2xl font-bold text-blue-600 mt-4';
    } else if (percentage >= 50) {
        messageEl.textContent = 'Good effort! 💪';
        messageEl.className = 'text-2xl font-bold text-yellow-600 mt-4';
    } else {
        messageEl.textContent = 'Keep practicing! 📚';
        messageEl.className = 'text-2xl font-bold text-orange-600 mt-4';
    }
});

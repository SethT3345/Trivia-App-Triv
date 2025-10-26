(function(){
  function resetTwoPlayerStateLocal(){
    // Clear ALL localStorage to ensure fresh start
    localStorage.clear();
  }

  const playSelectors = ['.two-player-play', '#playBtn', '#playAgainBtn', '#start2P'];

  playSelectors.forEach(sel => {
    document.addEventListener('click', (e) => {
      const btn = e.target.closest(sel);
      if (btn) {
        resetTwoPlayerStateLocal();
      }
    });
  });

  window.resetTwoPlayerState = resetTwoPlayerStateLocal;
})();
const WORDS = [
    'ABOUT', 'ABOVE', 'ABUSE', 'ACTOR', 'ACUTE', 'ADMIT', 'ADOPT', 'ADULT', 'AFTER', 'AGAIN',
    'AGENT', 'AGREE', 'AHEAD', 'ALARM', 'ALBUM', 'ALERT', 'ALIKE', 'ALIVE', 'ALLOW', 'ALONE',
    'ALONG', 'ALTER', 'AMONG', 'ANGER', 'ANGLE', 'ANGRY', 'APART', 'APPLE', 'APPLY', 'ARENA',
    'ARGUE', 'ARISE', 'ARRAY', 'ASIDE', 'ASSET', 'AUDIO', 'AVOID', 'AWARD', 'AWARE', 'BADLY',
    'BAKER', 'BASES', 'BASIC', 'BASIS', 'BEACH', 'BEGAN', 'BEGIN', 'BEGUN', 'BEING', 'BELOW',
    'BENCH', 'BILLY', 'BIRTH', 'BLACK', 'BLAME', 'BLIND', 'BLOCK', 'BLOOD', 'BOARD', 'BOOST',
    'BOOTH', 'BOUND', 'BRAIN', 'BRAND', 'BREAD', 'BREAK', 'BREED', 'BRIEF', 'BRING', 'BROAD',
    'BROKE', 'BROWN', 'BUILD', 'BUILT', 'BUYER', 'CABLE', 'CALIF', 'CARRY', 'CATCH', 'CAUSE',
    'CHAIN', 'CHAIR', 'CHART', 'CHASE', 'CHEAP', 'CHECK', 'CHEST', 'CHIEF', 'CHILD', 'CHINA',
    'CHOSE', 'CIVIL', 'CLAIM', 'CLASS', 'CLEAN', 'CLEAR', 'CLICK', 'CLOCK', 'CLOSE', 'COACH',
    'COAST', 'COULD', 'COUNT', 'COURT', 'COVER', 'CRAFT', 'CRASH', 'CRAZY', 'CREAM', 'CRIME',
    'CROSS', 'CROWD', 'CROWN', 'CRUDE', 'CYCLE', 'DAILY', 'DANCE', 'DATED', 'DEALT', 'DEATH',
    'DEBUT', 'DELAY', 'DEPTH', 'DOING', 'DOUBT', 'DOZEN', 'DRAFT', 'DRAMA', 'DRANK', 'DRAWN',
    'DREAM', 'DRESS', 'DRILL', 'DRINK', 'DRIVE', 'DROVE', 'DYING', 'EAGER', 'EARLY', 'EARTH',
    'EIGHT', 'ELITE', 'EMPTY', 'ENEMY', 'ENJOY', 'ENTER', 'ENTRY', 'EQUAL', 'ERROR', 'EVENT',
    'EVERY', 'EXACT', 'EXIST', 'EXTRA', 'FAITH', 'FALSE', 'FAULT', 'FIBER', 'FIELD', 'FIFTH',
    'FIFTY', 'FIGHT', 'FINAL', 'FIRST', 'FIXED', 'FLASH', 'FLEET', 'FLOOR', 'FLUID', 'FOCUS',
    'FORCE', 'FORTH', 'FORTY', 'FORUM', 'FOUND', 'FRAME', 'FRANK', 'FRAUD', 'FRESH', 'FRONT',
    'FRUIT', 'FULLY', 'FUNNY', 'GIANT', 'GIVEN', 'GLASS', 'GLOBE', 'GOING', 'GRACE', 'GRADE',
    'GRAND', 'GRANT', 'GRASS', 'GREAT', 'GREEN', 'GROSS', 'GROUP', 'GROWN', 'GUARD', 'GUESS',
    'GUEST', 'GUIDE', 'HAPPY', 'HARRY', 'HEART', 'HEAVY', 'HENCE', 'HENRY', 'HORSE', 'HOTEL',
    'HOUSE', 'HUMAN', 'IDEAL', 'IMAGE', 'INDEX', 'INNER', 'INPUT', 'ISSUE', 'JAPAN', 'JIMMY',
    'JOINT', 'JONES', 'JUDGE', 'KNOWN', 'LABEL', 'LARGE', 'LASER', 'LATER', 'LAUGH', 'LAYER',
    'LEARN', 'LEASE', 'LEAST', 'LEAVE', 'LEGAL', 'LEMON', 'LEVEL', 'LEWIS', 'LIGHT', 'LIMIT','TABLE', 
    'SOUND', 'CLOUD', 'FLAME', 'GRAIN', 'PLANT', 'WHITE', 'GREEN', 'PEACH', 'MANGO', 'BERRY', 'STONE', 'BRICK',
     'BRUSH', 'PAINT', 'BLUSH', 'STORM', 'NIGHT', 'UNDER', 'RIVER', 'OCEAN', 'STEEL', 'SWORD',
      'ANGEL', 'SMILE', 'SLEEP', 'TRUST', 'PEACE', 'MUSIC', 'PIANO', 'WATER', 'HONEY', 'SUGAR',
       'SPICE', 'WORLD', 'SPACE', 'STARS', 'WINDS', 'BLAZE', 'ROUGH', 'SHARP', 'SWEET', 'SALTY',
        'CRISP', 'SOLID', 'QUIET', 'BRAVE', 'LOYAL', 'NOBLE', 'MOSSY', 'LEAFY', 'ROCKY', 'SANDY', 'SHINY', 
        'FOGGY', 'DUSTY', 'HOPES', 'GOALS', 'SHINE', 'SPARK', 'FLARE', 'CHILL',
         'MUDDY', 'SNOWY', 'FIERY', 'SUNNY', 'RAINY', 'WINDY', 'FROST', 'FLAKE', 'MELTS', 'PLAIN', 'DESERT', 
         'BLOOM', 'TIGER', 'ZEBRA', 'CAMEL', 'EAGLE', 'RAVEN', 'ROBIN', 'MOUSE', 'SHEEP', 'GOATS', 'WHALE', 'SHARK',
          'CORAL', 'PEARL', 'SHELL', 'TORCH', 'JEWEL', 'ARROW', 'SPEAR', 'CHARM', 'MAGIC', 'WITCH', 'SAINT', 'MERCY', 
          'HONOR', 'TRUTH', 'PRIDE', 'ENVY', 'GREED', 'WRATH', 'UNITY', 'WATCH', 'CLASH', 'WOUND', 'NURSE', 'STORY', 'NOVEL',
           'BOOKS', 'PAGES', 'WORDS', 'WRITE', 'TEACH', 'STUDY', 'SCORE', 'TITLE', 'QUEEN', 'JOKER', 'REALM', 'TOWNS', 'ROADS',
            'TRAIL', 'SIGNS', 'WALLS', 'GATES', 'DOORS', 'LOCKS', 'KEYES', 'ROOFS', 'BEAMS', 'ROOMS', 'COUCH', 'PLATE', 'SPOON',
             'KNIFE', 'SIGHT', 'THINK', 'SHOUT', 'SPEAK', 'VOICE', 'PHOTO', 'COLOR', 'SHADE', 'TONEY', 'GRAPE', 'SNACK', 'SAUCE', 'ROAST', 
             'FRIED', 'BLEND', 'SHAKE', 'COCOA', 'SYRUP', 'MELON', 'GUAVA', 'DOUGH', 'PIZZA', 'PASTA', 'BACON', 'STEAK', 'GRILL', 'CURRY',
              'RAMEN', 'SALAD', 'ONION', 'OLIVE', 'BASIL', 'THYME', 'CANDY', 'FUDGE', 'DONUT', 'SODAS', 'STRAW', 'PAPER', 'RULER', 'PHONE',
               'MOUSE', 'CABLE', 'WIRES', 'BEATS', 'DRUMS', 'FLUTE', 'BRASS', 'CELLO', 'CHORD', 'CHOIR', 'MOVIE', 'PLOTS', 'POEMS', 'RANKS', 
               'FORGE', 'SHAPE', 'CARVE', 'MODEL', 'STONE', 'METAL', 'WOODS', 'BOLTS', 'SCREW', 'NAILS', 'HAMMER', 'GLUEY', 'BOXES', 'CRATE',
                'SHELF', 'FRAME', 'CHAIN', 'TORCH', 'SMOKE', 'ASHES', 'FLOOD', 'WAVES', 'DIVER', 'CLIFF', 'CAVES', 'MOUNT', 'TREES', 'ROOTS',
                 'VINES', 'FLORA', 'FAUNA', 'BEAST', 'EAGLE', 'RAVEN', 'SNAKE', 'FROGS', 'FISHY', 'PEARL', 'STARS', 'MOONS', 'FIRES', 'RULES',
];

let targetWord;
let currentGuess = '';
let currentRow = 0;
const MAX_GUESSES = 8;
let gameOver = false;
let currentGame = 1;
const maxGames = 5;
let redScore = 0;
let blueScore = 0;
let blueTurn = false;
let redTurn = false;
let blueWin = false
let redWin = false

document.addEventListener('DOMContentLoaded', () => {
    initGame();
});

function loadScores() {
    const savedRedScore = localStorage.getItem('redScore');
    const savedBlueScore = localStorage.getItem('blueScore');
    const savedCurrentGame = localStorage.getItem('currentGame');
    
    if (savedRedScore !== null) {
        redScore = parseInt(savedRedScore);
    }
    if (savedBlueScore !== null) {
        blueScore = parseInt(savedBlueScore);
    }
    if (savedCurrentGame !== null) {
        currentGame = parseInt(savedCurrentGame);
    }
    
    document.getElementById('redScore').textContent = redScore;
    document.getElementById('blueScore').textContent = blueScore;
}

function saveScores() {
    localStorage.setItem('redScore', redScore);
    localStorage.setItem('blueScore', blueScore);
    localStorage.setItem('currentGame', currentGame);
}

function initGame() {
    targetWord = WORDS[Math.floor(Math.random() * WORDS.length)];
    console.log('Target word:', targetWord);
    createGrid();
    setupKeyboard();
    loadScores();
    handleGame();
}

function createGrid() {
    const gameGrid = document.getElementById('gameGrid');
    gameGrid.innerHTML = '';
    
    for (let i = 0; i < MAX_GUESSES; i++) {
        const row = document.createElement('div');
        row.className = 'flex justify-center gap-2 mb-2';
        
        for (let j = 0; j < 5; j++) {
            const tile = document.createElement('div');
            tile.className = 'tile';
            tile.id = `tile-${i}-${j}`;
            row.appendChild(tile);
        }
        
        gameGrid.appendChild(row);
    }
}

function setupKeyboard() {
    const keyButtons = document.querySelectorAll('.key-btn');
    const enterBtn = document.getElementById('enterBtn');
    const backspaceBtn = document.getElementById('backspaceBtn');
    
    keyButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            if (!gameOver) handleKeyPress(btn.dataset.key);
        });
    });
    
    enterBtn.addEventListener('click', () => {
        if (!gameOver) submitGuess();
    });
    
    backspaceBtn.addEventListener('click', () => {
        if (!gameOver) handleBackspace();
    });
    
    document.addEventListener('keydown', (e) => {
        if (gameOver) return;
        
        if (e.key === 'Enter') {
            submitGuess();
        } else if (e.key === 'Backspace') {
            handleBackspace();
        } else if (/^[a-zA-Z]$/.test(e.key)) {
            handleKeyPress(e.key.toUpperCase());
        }
    });
}

function handleKeyPress(letter) {
    if (currentGuess.length < 5) {
        currentGuess += letter;
        updateGrid();
    }
}

function handleBackspace() {
    if (currentGuess.length > 0) {
        currentGuess = currentGuess.slice(0, -1);
        updateGrid();
    }
}

function updateGrid() {
    for (let i = 0; i < 5; i++) {
        const tile = document.getElementById(`tile-${currentRow}-${i}`);
        if (i < currentGuess.length) {
            tile.textContent = currentGuess[i];
            tile.classList.add('tile-filled');
        } else {
            tile.textContent = '';
            tile.classList.remove('tile-filled');
        }
        
        if (blueTurn) {
            tile.style.backgroundColor = '#1a65c8ff';
            tile.style.borderColor = '#b3b9c2ff';
        } else if (redTurn) {
            tile.style.backgroundColor = '#ef2222ff';
            tile.style.borderColor = '#ab9696ff';
        }
    }
}

function submitGuess() {
    if (currentGuess.length !== 5) {
        showMessage('Not enough letters');
        return;
    }
    
    checkGuess();
}

function checkGuess() {
    const result = [];
    const targetLetters = targetWord.split('');
    const guessLetters = currentGuess.split('');
    
    for (let i = 0; i < 5; i++) {
        if (guessLetters[i] === targetLetters[i]) {
            result[i] = 'correct';
            targetLetters[i] = null;
        }
    }
    
    for (let i = 0; i < 5; i++) {
        if (result[i] === 'correct') continue;
        
        const index = targetLetters.indexOf(guessLetters[i]);
        if (index !== -1) {
            result[i] = 'present';
            targetLetters[index] = null;
        } else {
            result[i] = 'absent';
        }
    }
    
    for (let i = 0; i < 5; i++) {
        const tile = document.getElementById(`tile-${currentRow}-${i}`);
        setTimeout(() => {
            tile.style.backgroundColor = '';
            
            tile.classList.add('flip');
            
            if (result[i] === 'correct') {
                tile.style.backgroundColor = '#10b981';
            } else if (result[i] === 'present') {
                tile.style.backgroundColor = '#eab308';
            } else {
                tile.style.backgroundColor = '#4b5563';
            }
            
            if (blueTurn) {
                tile.style.borderColor = '#3b82f6';
                tile.style.borderWidth = '3px';
            } else if (redTurn) {
                tile.style.borderColor = '#ef4444';
                tile.style.borderWidth = '3px';
            }
            
            tile.style.color = 'white';
            
            updateKeyboardButton(guessLetters[i], result[i]);
        }, i * 300);
    }
    
    setTimeout(() => {
   
        if (currentGuess === targetWord) {
            if (blueTurn) {
                blueScore += 1;
            } else if (redTurn) {
                redScore += 1;
            }
        }
        
        document.getElementById('redScore').textContent = redScore;
        document.getElementById('blueScore').textContent = blueScore;
        
        saveScores();
        
        if (blueScore >= 3) {
            blueWin = true;
            localStorage.setItem('blueWin', 'true');
            localStorage.setItem('redWin', 'false');
            setTimeout(() => {
                window.location.href = "wordleendgame.html";
            }, 1000);
            return;
        }
        if (redScore >= 3) {
            redWin = true;
            localStorage.setItem('redWin', 'true');
            localStorage.setItem('blueWin', 'false');
            setTimeout(() => {
                window.location.href = "wordleendgame.html";
            }, 1000);
            return;
        }
        
        if (currentGuess === targetWord) {
            endGame(true);
        } else if (currentRow === MAX_GUESSES - 1) {
            endGame(false);
        } else {
            currentRow++;
            currentGuess = '';
            handleGame();
        }
    }, 1500);
}

function updateKeyboardButton(letter, status) {
    const keyButton = document.querySelector(`[data-key="${letter}"]`);
    if (!keyButton) return;
    
    const currentStatus = keyButton.dataset.status;
    
    if (currentStatus === 'correct') return;
    if (currentStatus === 'present' && status === 'absent') return;
    
    keyButton.classList.remove('bg-gray-300', 'hover:bg-gray-400', 'bg-gray-600', 'hover:bg-gray-700', 'bg-yellow-500', 'hover:bg-yellow-600', 'bg-green-500', 'hover:bg-green-600');
    keyButton.classList.remove('text-gray-800');
    keyButton.classList.add('text-white');
    
    if (status === 'correct') {
        keyButton.classList.add('bg-green-500', 'hover:bg-green-600');
        keyButton.dataset.status = 'correct';
    } else if (status === 'present') {
        keyButton.classList.add('bg-yellow-500', 'hover:bg-yellow-600');
        keyButton.dataset.status = 'present';
    } else if (status === 'absent') {
        keyButton.classList.add('bg-gray-600', 'hover:bg-gray-700');
        keyButton.dataset.status = 'absent';
    }
}

function showMessage(text) {
    const message = document.getElementById('message');
    message.textContent = text;
    setTimeout(() => {
        message.textContent = '';
    }, 2000);
}

function endGame(won) {
    gameOver = true;
    currentGame += 1;
    saveScores(); 
    
    setTimeout(() => {
        const modal = document.getElementById('gameOverModal');
        const title = document.getElementById('gameOverTitle');
        const message = document.getElementById('gameOverMessage');
        
        if (won) {
            if (blueTurn === true) {
                title.textContent = `Blue Won! Blue Score: ${blueScore}, Red Score: ${redScore}`;
                message.textContent = `You guessed it in ${currentRow + 1} tries!`;
            } else if (redTurn === true) {
                title.textContent = `Red Won! Blue Score: ${blueScore}, Red Score: ${redScore}`;
                message.textContent = `You guessed it in ${currentRow + 1} tries!`;
            }
        } else {
            title.textContent = 'Game Over No one Won';
            message.textContent = `The word was: ${targetWord}`;
        }
        
        modal.classList.remove('hidden');
    }, 2000);
}

const urlParams = new URLSearchParams(window.location.search);
if (urlParams.get('reset') === 'true') {
  localStorage.setItem('redScore', '0');
  localStorage.setItem('blueScore', '0');
  localStorage.setItem('redWin', 'false');
  localStorage.setItem('blueWin', 'false');
  window.history.replaceState({}, '', 'wordle.html');
}

function handleGame(){
    if (currentGame > 5){
        window.location.href = "wordleendgame.html";
        return;
    }
    
    if (currentGame % 2 === 1) {
        if (currentRow % 2 === 0) {
            blueTurn = true;
            redTurn = false;
        } else {
            blueTurn = false;
            redTurn = true;
        }
    } else {
        if (currentRow % 2 === 0) {
            blueTurn = false;
            redTurn = true;
        } else {
            blueTurn = true;
            redTurn = false;
        }
    }
    
    const turnIndicator = document.getElementById('turnIndicator');
    if (blueTurn) {
        turnIndicator.textContent = "Blue Player's Turn";
        turnIndicator.className = "text-3xl font-bold text-blue-500";
    } else {
        turnIndicator.textContent = "Red Player's Turn";
        turnIndicator.className = "text-3xl font-bold text-red-500";
    }
    
    colorCurrentRow();
    
    console.log('Game:', currentGame, 'Row:', currentRow, 'Blue:', blueTurn, 'Red:', redTurn);
}

function colorCurrentRow() {
    for (let i = 0; i < 5; i++) {
        const tile = document.getElementById(`tile-${currentRow}-${i}`);
        if (blueTurn) {
            tile.style.backgroundColor = '#2382ffff';
            tile.style.borderColor = '#f6f6f6ff';
        } else if (redTurn) {
            tile.style.backgroundColor = '#f81717ff';
            tile.style.borderColor = '#b0b0b0ff';
        }
    }
}

function announceWinner() {
    gameOver = true;
    
    setTimeout(() => {
        const modal = document.getElementById('gameOverModal');
        const title = document.getElementById('gameOverTitle');
        const message = document.getElementById('gameOverMessage');
        
        if (blueScore >= 3) {
            title.textContent = '🎉 Blue Player Wins!';
            message.textContent = `Final Score - Blue: ${blueScore}, Red: ${redScore}`;
            title.className = 'text-3xl font-bold text-center mb-4 text-blue-500';
        } else {
            title.textContent = '🎉 Red Player Wins!';
            message.textContent = `Final Score - Red: ${redScore}, Blue: ${blueScore}`;
            title.className = 'text-3xl font-bold text-center mb-4 text-red-500';
        }
        
        localStorage.setItem('redScore', 0);
        localStorage.setItem('blueScore', 0);
        localStorage.setItem('currentGame', 1);
        
        modal.classList.remove('hidden');
    }, 2000);
}

document.getElementById('playAgainBtn').addEventListener('click', () => {
    location.reload();
});

function gohp(){
    window.location.href = "index.html";
}
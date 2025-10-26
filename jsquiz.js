class DoubleLinkedNode {
    constructor(q){
        this.q = q
        this.next = null;
        this.prev = null;
        this.answer = null
    }
}

class DoubleLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.current = null;
        this.length = 0
    }
    AddQuestion(q){
        const newNode = new DoubleLinkedNode(q);
        if(this.head == null){
            this.head = this.tail = this.current = newNode;
        }else{
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
    }

    goNext() {
        if(this.current && this.current.next) {
            this.current = this.current.next;
            return true;
        }
        return false;
    }

    goPrev() {
		if (this.current && this.current.prev) {
			this.current = this.current.prev;
			return true;
		}
		return false;
	}
    currentIndex(){
        let idx = 0;
        let node = this.head;
        while(node && node != this.current){
            node = node.next;
            idx++;
        }
        return idx
    }
}


const QList = new DoubleLinkedList();

const questions = [
  {
    text: "Which keyword creates a block-scoped variable that can be reassigned?",
    choices: ["var", "let", "const", "function"],
    correctIndex: 1
  },
  {
    text: "Which array method returns a new array containing only elements that pass a test?",
    choices: ["map()", "filter()", "forEach()", "reduce()"],
    correctIndex: 1
  },
  {
    text: "What does `===` do that `==` does not?",
    choices: [
      "Performs type coercion before comparison",
      "Performs a deep object comparison",
      "Compares without type coercion (strict equality)",
      "Only compares numbers"
    ],
    correctIndex: 2
  },
  {
    text: "Which of these creates a shallow copy of an array?",
    choices: ["arr.push(...items)", "arr.slice()", "arr.join()", "arr.indexOf()"],
    correctIndex: 1
  },
  {
    text: "What will `typeof null` return in JavaScript?",
    choices: ["'null'", "'object'", "'undefined'", "'number'"],
    correctIndex: 1
  },
  {
    text: "Which method schedules a function to run after a delay (asynchronously)?",
    choices: ["setTimeout()", "requestAnimationFrame()", "dispatchEvent()", "setIntervalSync()"],
    correctIndex: 0
  },
  {
    text: "Which statement about arrow functions is true?",
    choices: [
      "They bind their own `this` value",
      "They do not bind their own `this` value",
      "They can be used as constructors with `new`",
      "They always create a new scope for `arguments`"
    ],
    correctIndex: 1
  },
  {
    text: "Which DOM API returns a single element by CSS selector?",
    choices: ["document.getElementsByClassName()", "document.querySelector()", "document.getElementByIdAll()", "document.querySelectorAll('single')"],
    correctIndex: 1
  },
  {
    text: "Which array method reduces an array to a single value?",
    choices: ["reduce()", "map()", "filter()", "some()"],
    correctIndex: 0
  },
  {
    text: "Which operator spreads elements of an iterable into a new array or function call?",
    choices: ["...", "??", "&&", "::"],
    correctIndex: 0
  },
  {
    text: "How do you create a resolved Promise with value 42?",
    choices: ["new Promise(42)", "Promise.resolve(42)", "Promise.then(42)", "Promise.create(42)"],
    correctIndex: 1
  },
  {
    text: "What is event delegation used for?",
    choices: [
      "Delegating long-running tasks to web workers",
      "Attaching one handler to a parent to manage many child events",
      "Preventing default browser events",
      "Cloning events between elements"
    ],
    correctIndex: 1
  }
];
questions.forEach(q => QList.AddQuestion(q));

document.addEventListener('DOMContentLoaded', () => {
	const qText = document.getElementById('questionText');
	const choiceSpans = document.querySelectorAll('[data-choice-index]');
	const choiceInputs = document.querySelectorAll('input[name="choice"]');
	const currentIndexEl = document.getElementById('currentIndex');
	const totalQuestionsEl = document.getElementById('totalQuestions');
	const prevBtn = document.getElementById('prevBtn');
	const nextBtn = document.getElementById('nextBtn');
	const submitBtn = document.getElementById('submitBtn');
	const progressBar = document.getElementById('progressBar');



    function RenderCurrent(){
        const node = QList.current;
        const idx = QList.currentIndex();
		qText.textContent = node.q.text;
		currentIndexEl.textContent = idx + 1;
		totalQuestionsEl.textContent = QList.length;

		choiceSpans.forEach((span, i) => {
			span.textContent = node.q.choices[i] || '';
		});
		

		choiceInputs.forEach((input, i) => {
			input.checked = node.answer === i;
		});
		
		prevBtn.disabled = idx === 0;
		const atLast = idx === QList.length - 1;
		nextBtn.classList.toggle('hidden', atLast);
		submitBtn.classList.toggle('hidden', !atLast);

		updateProgress();
	}
	
    function getSelectedChoiceIndex() {
		const checked = document.querySelector('input[name="choice"]:checked');
		return checked ? parseInt(checked.value, 10) : -1;
	}
  function saveToNode() {
		const sel = getSelectedChoiceIndex();
		if (sel !== -1) {
			QList.current.answer = sel;
		}
	}
	
	function updateProgress() {
		let filled = 0;
		let node = QList.head;
		while (node) { if (node.answer !== null) filled++; node = node.next; }
		const percent = Math.round((filled / QList.length) * 100);
		progressBar.style.width = percent + '%';
	}
	
	prevBtn.addEventListener('click', () => {
		saveToNode();
		if (QList.goPrev()) RenderCurrent();
	});

	nextBtn.addEventListener('click', () => {
		const sel = getSelectedChoiceIndex();
		if (sel === -1) { alert('Please choose an answer'); return; }
		saveToNode();
		if (QList.goNext()) RenderCurrent();
	});

	submitBtn.addEventListener('click', () => {
		saveToNode();
		
		let score = 0;
		let node = QList.head;
		while (node) {
			if (node.answer === node.q.correctIndex) score++;
			node = node.next;
		}
		// Save score to localStorage
		localStorage.setItem('quizScore', score);
		localStorage.setItem('quizTotal', QList.length);
		window.location.href = "jsquizscore.html";
	});

	RenderCurrent();
});

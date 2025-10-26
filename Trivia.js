//linked list so the questions can flip through

class QuestionNode{
    constructor(question){
        this.question = question;
        this.prev = null;
        this.next = null;
    }
}

class Questions{
    constructor(){
        this.head = null;
        this.tail = null;
        this.currentNode = null;
    }
    add(question){
        const newQuestion = new QuestionNode(question);
    
        if(!this.head){
            this.head = newQuestion;
            this.tail = newQuestion;
            this.currentNode = newQuestion;
        }
        else {
            this.tail.next = newQuestion;
            newQuestion.prev = this.tail;
            this.tail = newQuestion;
        }
    }
    
    nextQuestion(){
        if (this.currentNode && this.currentNode.next){
            this.currentNode = this.currentNode.next
        }
        return this.currentNode.question;
    }
    
    prevQuestion(){
        if (this.currentNode && this.currentNode.prev) {
            this.currentNode = this.currentNode.prev;
        }
        return this.currentNode.question;
    }
}

// classes that make the questions

class Question{
    constructor(qn, prompt, answer){
        this.qn = qn;
        this.prompt = prompt;
        this.answer = answer;
    }
}

//basketball Quiz
let BQ1 = new Question(1, "Who is famous for wearing #24 on the LA Lakers? (Full Name)", "Kobe Bryant")
let BQ2 = new Question(2, "Which team has won the most NBA championships?", "Boston Celtics")
let BQ3 = new Question(3, "Who holds the record for most points scored in a single NBA game? (Full Name)", "Wilt Chamberlain")
let BQ4 = new Question(4, "What does NBA stand for?", "National Basketball Association")
let BQ5 = new Question(5, "Which player is known as 'The King'? (Full Name)", "LeBron James")
let BQ6 = new Question(6, "How many players are on the court for one team at a time?", "5")
let BQ7 = new Question(7, "Which team did Michael Jordan play for during most of his career?", "Chicago Bulls")
let BQ8 = new Question(8, "What is the diameter of a basketball hoop in inches?", "18")
let BQ9 = new Question(9, "Who was the first overall pick in the 2003 NBA Draft? (Full Name)", "LeBron James")
let BQ10 = new Question(10, "Which player wore #23 for the Chicago Bulls? (Full Name)", "Michael Jordan")

let basketballQuiz = new Questions;
basketballQuiz.add(BQ1)
basketballQuiz.add(BQ2)
basketballQuiz.add(BQ3)
basketballQuiz.add(BQ4)
basketballQuiz.add(BQ5)
basketballQuiz.add(BQ6)
basketballQuiz.add(BQ7)
basketballQuiz.add(BQ8)
basketballQuiz.add(BQ9)
basketballQuiz.add(BQ10)

function nextQ(){

    let root = basketballQuiz.currentNode;
    
    let i = basketballQuiz.currentNode.question.qn;
    
   
    window[`useranswer${i}`] = document.getElementById("answer").value;
    

    localStorage.setItem(`useranswer${i}`, document.getElementById("answer").value);

    let nextQuestion = basketballQuiz.nextQuestion();

    if(nextQuestion.qn === 10){
        document.getElementById("QuestionPage").innerHTML = `<div class="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full mx-4">
            <div class="text-center mb-8">
                <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Question ${nextQuestion.qn} of 10</span>
            </div>
            
            <div class="mb-8">
                <h2 class="text-4xl font-bold text-gray-800 text-center mb-6 leading-tight">
                    ${nextQuestion.prompt}
                </h2>
            </div>
            
            <div class="mb-8">
                <label for="answer" class="block text-lg font-medium text-gray-700 mb-3">Your Answer:</label>
                <input 
                    type="text" 
                    id="answer" 
                    name="answer"
                    placeholder="Type your answer here..."
                    class="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white"
                >
            </div>
            
            <div class="flex gap-4 justify-center">
                <button onclick="prevQ()" class="bg-gray-400 hover:bg-gray-500 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Previous
                </button>
                <button onclick="submit()" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Submit Test
                </button>
            </div>
        </div>`
    }
    else {
    document.getElementById("QuestionPage").innerHTML = `<div class="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full mx-4">
            <div class="text-center mb-8">
                <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Question ${nextQuestion.qn} of 10</span>
            </div>
            
            <div class="mb-8">
                <h2 class="text-4xl font-bold text-gray-800 text-center mb-6 leading-tight">
                    ${nextQuestion.prompt}
                </h2>
            </div>
            
            <div class="mb-8">
                <label for="answer" class="block text-lg font-medium text-gray-700 mb-3">Your Answer:</label>
                <input 
                    type="text" 
                    id="answer" 
                    name="answer"
                    placeholder="Type your answer here..."
                    class="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white"
                >
            </div>
            
            <div class="flex gap-4 justify-center">
                <button onclick="prevQ()" class="bg-gray-400 hover:bg-gray-500 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Previous
                </button>
                <button onclick="nextQ()" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Submit Answer
                </button>
                <button onclick="nextQNA()" class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Next
                </button>
            </div>
        </div>`
    }
}


function prevQ(){

    let root = basketballQuiz.currentNode;

    let prevQuestion = basketballQuiz.prevQuestion();

    if(prevQuestion.qn === 1){
        document.getElementById("QuestionPage").innerHTML = `<div class="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full mx-4">
            <div class="text-center mb-8">
                <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Question ${prevQuestion.qn} of 10</span>
            </div>
            
            <div class="mb-8">
                <h2 class="text-4xl font-bold text-gray-800 text-center mb-6 leading-tight">
                    ${prevQuestion.prompt}
                </h2>
            </div>
            
            <div class="mb-8">
                <label for="answer" class="block text-lg font-medium text-gray-700 mb-3">Your Answer:</label>
                <input 
                    type="text" 
                    id="answer" 
                    name="answer"
                    placeholder="Type your answer here..."
                    class="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white"
                >
            </div>
            
            <div class="flex gap-4 justify-center">
                <button onclick="nextQ()" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Submit Answer
                </button>
                <button onclick="nextQNA()" class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Next
                </button>
            </div>
        </div>`
    }
    else{
    document.getElementById("QuestionPage").innerHTML = `<div class="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full mx-4">
            <div class="text-center mb-8">
                <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Question ${prevQuestion.qn} of 10</span>
            </div>
            
            <div class="mb-8">
                <h2 class="text-4xl font-bold text-gray-800 text-center mb-6 leading-tight">
                    ${prevQuestion.prompt}
                </h2>
            </div>
            
            <div class="mb-8">
                <label for="answer" class="block text-lg font-medium text-gray-700 mb-3">Your Answer:</label>
                <input 
                    type="text" 
                    id="answer" 
                    name="answer"
                    placeholder="Type your answer here..."
                    class="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white"
                >
            </div>
            
            <div class="flex gap-4 justify-center">
                <button onclick="prevQ()" class="bg-gray-400 hover:bg-gray-500 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Previous
                </button>
                <button onclick="nextQ()" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Submit Answer
                </button>
                <button onclick="nextQNA()" class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Next
                </button>
            </div>
        </div>`
    }
}


function nextQNA(){

    let root = basketballQuiz.currentNode;

    let nextQuestion = basketballQuiz.nextQuestion();

    if(nextQuestion.qn === 10){
        document.getElementById("QuestionPage").innerHTML = `<div class="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full mx-4">
            <div class="text-center mb-8">
                <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Question ${nextQuestion.qn} of 10</span>
            </div>
            
            <div class="mb-8">
                <h2 class="text-4xl font-bold text-gray-800 text-center mb-6 leading-tight">
                    ${nextQuestion.prompt}
                </h2>
            </div>
            
            <div class="mb-8">
                <label for="answer" class="block text-lg font-medium text-gray-700 mb-3">Your Answer:</label>
                <input 
                    type="text" 
                    id="answer" 
                    name="answer"
                    placeholder="Type your answer here..."
                    class="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white"
                >
            </div>
            
            <div class="flex gap-4 justify-center">
                <button onclick="prevQ()" class="bg-gray-400 hover:bg-gray-500 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Previous
                </button>
                <button onclick="submit()" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Submit Test
                </button>
            </div>
        </div>`
    }
    else {
    document.getElementById("QuestionPage").innerHTML = `<div class="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full mx-4">
            <div class="text-center mb-8">
                <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Question ${nextQuestion.qn} of 10</span>
            </div>
            
            <div class="mb-8">
                <h2 class="text-4xl font-bold text-gray-800 text-center mb-6 leading-tight">
                    ${nextQuestion.prompt}
                </h2>
            </div>
            
            <div class="mb-8">
                <label for="answer" class="block text-lg font-medium text-gray-700 mb-3">Your Answer:</label>
                <input 
                    type="text" 
                    id="answer" 
                    name="answer"
                    placeholder="Type your answer here..."
                    class="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white"
                >
            </div>
            
            <div class="flex gap-4 justify-center">
                <button onclick="prevQ()" class="bg-gray-400 hover:bg-gray-500 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Previous
                </button>
                <button onclick="nextQ()" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Submit Answer
                </button>
                <button onclick="nextQNA()" class="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Next
                </button>
            </div>
        </div>`
    }
}

function submit(){
    // Save the current answer before calculating score
    let currentAnswer = document.getElementById("answer").value;
    if(currentAnswer) {
        localStorage.setItem('useranswer10', currentAnswer);
        window.useranswer10 = currentAnswer;
    }
    
    let score = 0;
    let questions = [BQ1, BQ2, BQ3, BQ4, BQ5, BQ6, BQ7, BQ8, BQ9, BQ10];

    for(let i = 1; i <= 10; i++){
        let userAnswer = localStorage.getItem(`useranswer${i}`);
        let correctAnswer = questions[i-1].answer;
        
        if(userAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase()){
            score += 1;
        }
    }
    
    document.getElementById("QuestionPage").innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full mx-4">
            <div class="text-center mb-8">
                <h1 class="text-5xl font-bold text-gray-800 mb-4">Quiz Complete!</h1>
                <div class="text-6xl font-bold ${score >= 7 ? 'text-green-600' : score >= 5 ? 'text-yellow-600' : 'text-red-600'} mb-4">
                    ${score}/10
                </div>
                <p class="text-xl text-gray-600">
                    ${score >= 9 ? 'Excellent!' : score >= 7 ? 'Great job!' : score >= 5 ? 'Good effort!' : 'Keep practicing!'}
                </p>
            </div>
            
            <div class="text-center">
                <button onclick="location.reload()" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Take Quiz Again
                </button>
            </div>
        </div>
    `;
    
    console.log(`Your score: ${score}/10`);
    return score;
}

function gohp(){
    window.location.href = "index.html";
}
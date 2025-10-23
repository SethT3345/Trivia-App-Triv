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

// Question class definition
class Question{
    constructor(qn, prompt, answer){
        this.qn = qn;
        this.prompt = prompt;
        this.answer = answer;
    }
}

let pyoQuiz = new Questions;
let qi; 
let totalQuestions;

addEventListener('load', function(){
    qi = localStorage.getItem('qi'); 
    totalQuestions = parseInt(qi) - 1;

    let quizId = localStorage.getItem("currentQuizId");
    let quizName = JSON.parse(localStorage.getItem('userQuizName') || '"Untitled Quiz"');

    console.log("Loading quiz - qi:", qi);

    for(i = 1; i < qi; i++){
        let questionData = localStorage.getItem(`q${i}`);
        console.log(`Loading question ${i}:`, questionData);
        
        if(questionData) {
            let parsedData = JSON.parse(questionData);
            window[`uq${i}`] = new Question(parsedData.qn, parsedData.prompt, parsedData.answer);
            pyoQuiz.add(window[`uq${i}`]);
        }
    }
    
    console.log("Question class instances created! Try typing uq1 in console");
    console.log("pyoQuiz.currentNode:", pyoQuiz.currentNode);

    if(!pyoQuiz.currentNode) {
        document.getElementById("QuestionPage").innerHTML = `<div class="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full mx-4">
            <div class="text-center">
                <h1 class="text-4xl font-bold text-red-600 mb-4">No Questions Found!</h1>
                <p class="text-lg text-gray-600 mb-6">It looks like no questions were loaded for this quiz.</p>
                <button onclick="window.location.href='myo.html'" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Create New Quiz
                </button>
            </div>
        </div>`;
        return;
    }

     document.getElementById("QuestionPage").innerHTML = `<div class="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full mx-4">
            <div class="text-center mb-6">
                <h1 class="text-3xl font-bold text-gray-800 mb-4">${quizName}</h1>
                <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Question ${pyoQuiz.currentNode.question.qn} of ${totalQuestions}</span>
            </div>
            
            <div class="mb-8">
                <h2 class="text-4xl font-bold text-gray-800 text-center mb-6 leading-tight">
                    ${pyoQuiz.currentNode.question.prompt}
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
});

function nextQ(){
    console.log("nextQ called");
    console.log("Current node:", pyoQuiz.currentNode);
    
    let root = pyoQuiz.currentNode;
    let quizName = JSON.parse(localStorage.getItem('userQuizName') || '"Untitled Quiz"');
    
    let i = pyoQuiz.currentNode.question.qn;
    console.log("Current question number:", i);
    
    window[`useranswer${i}`] = document.getElementById("answer").value;
    localStorage.setItem(`useranswer${i}`, document.getElementById("answer").value);

    let nextQuestion = pyoQuiz.nextQuestion();
    console.log("Next question:", nextQuestion);
    console.log("qi value:", qi, "type:", typeof qi);

    if(nextQuestion.qn == totalQuestions){
        document.getElementById("QuestionPage").innerHTML = `<div class="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full mx-4">
            <div class="text-center mb-6">
                <h1 class="text-3xl font-bold text-gray-800 mb-4">${quizName}</h1>
                <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Question ${nextQuestion.qn} of ${totalQuestions}</span>
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
                <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Question ${nextQuestion.qn} of ${totalQuestions}</span>
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

    let root = pyoQuiz.currentNode;
    let quizName = JSON.parse(localStorage.getItem('userQuizName') || '"Untitled Quiz"');

    let prevQuestion = pyoQuiz.prevQuestion();

    if(prevQuestion.qn === 1){
        document.getElementById("QuestionPage").innerHTML = `<div class="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full mx-4">
            <div class="text-center mb-6">
                <h1 class="text-3xl font-bold text-gray-800 mb-4">${quizName}</h1>
                <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Question ${prevQuestion.qn} of ${totalQuestions}</span>
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
            <div class="text-center mb-6">
                <h1 class="text-3xl font-bold text-gray-800 mb-4">${quizName}</h1>
                <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Question ${prevQuestion.qn} of ${totalQuestions}</span>
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

    let root = pyoQuiz.currentNode;
    let quizName = JSON.parse(localStorage.getItem('userQuizName') || '"Untitled Quiz"');

    let nextQuestion = pyoQuiz.nextQuestion();

    if(nextQuestion.qn == totalQuestions){
        document.getElementById("QuestionPage").innerHTML = `<div class="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full mx-4">
            <div class="text-center mb-6">
                <h1 class="text-3xl font-bold text-gray-800 mb-4">${quizName}</h1>
                <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Question ${nextQuestion.qn} of ${totalQuestions}</span>
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
                <span class="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">Question ${nextQuestion.qn} of ${totalQuestions}</span>
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
    
    let currentAnswer = document.getElementById("answer").value;
    let totalQuestions = parseInt(localStorage.getItem("qi"));
    
    if(currentAnswer) {
        localStorage.setItem(`useranswer${totalQuestions - 1}`, currentAnswer);
        window[`useranswer${totalQuestions - 1}`] = currentAnswer;
    }
    
    let score = 0;

    for(let i = 1; i < totalQuestions; i++){
        let userAnswer = localStorage.getItem(`useranswer${i}`);
        let correctAnswer = window[`uq${i}`] ? window[`uq${i}`].answer : null;
        
        if(userAnswer && correctAnswer && userAnswer.toLowerCase() === correctAnswer.toLowerCase()){
            score += 1;
        }
    }
    
    document.getElementById("QuestionPage").innerHTML = `
        <div class="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full mx-4">
            <div class="text-center mb-8">
                <h1 class="text-5xl font-bold text-gray-800 mb-4">Quiz Complete!</h1>
                <div class="text-6xl font-bold text-gray-600 mb-4">
                    ${score}/${totalQuestions - 1}
                </div>
                <p class="text-xl text-gray-600">
                    Thanks For Playing!
                </p>
            </div>
            
            <div class="text-center flex gap-4 justify-center">
                <button class="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Back to Homepage
                </button>
                <button onclick="location.reload()" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                    Take Quiz Again
                </button>
            </div>
        </div>
    `;
    
    console.log(`Your score: ${score}/${totalQuestions}`);
    return score;
}


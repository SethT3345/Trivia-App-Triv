let qi = 1;
localStorage.setItem("qi", qi);

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

class Question{
    constructor(qn, prompt, answer){
        this.qn = qn;
        this.prompt = prompt;
        this.answer = answer;
    }
}

function newQ(){
    let userQuizName = document.getElementById("newQuizNameInput").value;

    let ac = false;

    localStorage.setItem('ac', ac);

    localStorage.setItem('userQuizName', JSON.stringify(userQuizName));

    document.getElementById("EnterPage").innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full mx-4">
            <div class="text-center mb-8">
                <h1 class="text-4xl font-bold text-gray-800 mb-4">Create Your Own Question</h1>
                <p class="text-lg text-gray-600">Add a custom question to the quiz</p>
            </div>
            
            <form id="questionForm" class="space-y-6">
                <div>
                    <label for="questionPrompt" class="block text-lg font-medium text-gray-700 mb-3">Question Prompt:</label>
                    <textarea 
                        id="questionPrompt"
                        name="questionPrompt"
                        placeholder="Enter your question here..."
                        rows="3"
                        class="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                        required
                    ></textarea>
                </div>
                
                <div>
                    <label for="correctAnswer" class="block text-lg font-medium text-gray-700 mb-3">Correct Answer:</label>
                    <input 
                        type="text" 
                        id="correctAnswer" 
                        name="correctAnswer"
                        placeholder="Enter the correct answer..."
                        class="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white"
                        required
                    >
                </div>
                
                <div class="flex gap-4 justify-center pt-4">
                    <button type="button" onclick="clearForm()" class="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Clear
                    </button>
                    <button onclick="AddUQ()" type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Add Question
                    </button>
                </div>
            </form>
    </div>`;
}

function AddUQ(){
    let UserQuestionPrompt = document.getElementById("questionPrompt").value;
    let UserQuestionAnswer = document.getElementById("correctAnswer").value;

    let currentQi = localStorage.getItem("qi");
    let question = new Question(currentQi, UserQuestionPrompt, UserQuestionAnswer);
    window[`q${currentQi}`] = question;
    localStorage.setItem(`q${currentQi}`, JSON.stringify(question));

    qi += 1;
    localStorage.setItem("qi", qi);

    document.getElementById("EnterPage").innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full mx-4">
            <div class="text-center mb-8">
                <h1 class="text-4xl font-bold text-gray-800 mb-4">Create Your Own Question</h1>
                <p class="text-lg text-gray-600">Add a custom question to the quiz</p>
            </div>
            
            <form id="questionForm" class="space-y-6">
                <div>
                    <label for="questionPrompt" class="block text-lg font-medium text-gray-700 mb-3">Question Prompt:</label>
                    <textarea 
                        id="questionPrompt"
                        name="questionPrompt"
                        placeholder="Enter your question here..."
                        rows="3"
                        class="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                        required
                    ></textarea>
                </div>
                
                <div>
                    <label for="correctAnswer" class="block text-lg font-medium text-gray-700 mb-3">Correct Answer:</label>
                    <input 
                        type="text" 
                        id="correctAnswer" 
                        name="correctAnswer"
                        placeholder="Enter the correct answer..."
                        class="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white"
                        required
                    >
                </div>
                
                <div class="flex gap-4 justify-center pt-4">
                    <button type="button" onclick="clearForm()" class="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Clear
                    </button>
                    <button onclick="AddUQ()" type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Add Question
                    </button>
                    <button type="button" onclick="submituq()" class="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Add Question & Submit
                    </button>
                    
                </div>
            </form>
    </div>`;
}

function submituq(){
    let UserQuestionPrompt = document.getElementById("questionPrompt").value;
    let UserQuestionAnswer = document.getElementById("correctAnswer").value;

    let currentQi = localStorage.getItem("qi");
    let question = new Question(currentQi, UserQuestionPrompt, UserQuestionAnswer);
    window[`q${currentQi}`] = question;
    localStorage.setItem(`q${currentQi}`, JSON.stringify(question));

    qi += 1;
    localStorage.setItem("qi", qi);

    document.getElementById("EnterPage").innerHTML = `
    <div class="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full mx-4">
        <div class="text-center mb-8">
            <h1 class="text-4xl font-bold text-green-600 mb-4">🎉 Quiz Created Successfully!</h1>
            <p class="text-xl text-gray-700 mb-2">Thanks for making a quiz!</p>
            <p class="text-lg text-gray-600">Your custom quiz has been saved and is ready to play.</p>
        </div>
        
        <div class="flex gap-6 justify-center pt-6">
            <button type="button" class="bg-gray-600 hover:bg-gray-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Go Back to Homepage
            </button>
            <button type="button" onclick="pcc()" class="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                Play Your Quiz
            </button>
        </div>
    </div>`;

}

function pcc(){
    window.location.href = "pyo.html";
}

/*
<div class="bg-white rounded-2xl shadow-2xl p-12 max-w-2xl w-full mx-4">
            <div class="text-center mb-8">
                <h1 class="text-4xl font-bold text-gray-800 mb-4">Create Your Own Question</h1>
                <p class="text-lg text-gray-600">Add a custom question to the quiz</p>
            </div>
            
            <form id="questionForm" class="space-y-6">
                <div>
                    <label for="questionPrompt" class="block text-lg font-medium text-gray-700 mb-3">Question Prompt:</label>
                    <textarea 
                        id="questionPrompt"
                        name="questionPrompt"
                        placeholder="Enter your question here..."
                        rows="3"
                        class="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white resize-none"
                        required
                    ></textarea>
                </div>
                
                <div>
                    <label for="correctAnswer" class="block text-lg font-medium text-gray-700 mb-3">Correct Answer:</label>
                    <input 
                        type="text" 
                        id="correctAnswer" 
                        name="correctAnswer"
                        placeholder="Enter the correct answer..."
                        class="w-full px-6 py-4 text-lg border-2 border-gray-300 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none transition-all duration-300 bg-gray-50 hover:bg-white"
                        required
                    >
                </div>
                
                <div class="flex gap-4 justify-center pt-4">
                    <button type="button" onclick="clearForm()" class="bg-gray-500 hover:bg-gray-600 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Clear
                    </button>
                    <button onclick="AddUQ()" type="submit" class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
                        Add Question
                    </button>
                </div>
            </form>
*/


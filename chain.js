class DoubleLinkedNode {
    constructor(q){
        this.question = q.question
        this.next = null;
        this.prev = null;
        this.answer = q.answer
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

const chainQuestions = [
  {
    question: "Which band made the famous song 'Bohemian Rhapsody'?",
    answer: "Queen"
  },
  {
    question: "Who was the lead singer of Queen?",
    answer: "Freddie Mercury"
  },
  {
    question: "In what year did Freddie Mercury tragically die?",
    answer: "1991"
  },
  {
    question: "Which band released their first album in 1991?",
    answer: "Pearl Jam"
  },
  {
    question: "How many Grammys does Pearl Jam have?",
    answer: "2"
  },
  {
    question: "Which pop star also has 2 Grammys?",
    answer: "Ariana Grande"
  },
  {
    question: "Which video game featured an Ariana Grande concert?",
    answer: "Fortnite"
  },
  {
    question: "Which artist had the biggest Fortnite concert?",
    answer: "Travis Scott"
  },
  {
    question: "Who did Travis Scott collaborate with on 'Sicko Mode'?",
    answer: "Drake"
  },
  {
    question: "Which artist did Drake recently have beef with?",
    answer: "Kendrick Lamar"
  },
  {
    question: "What is Kendrick Lamar's height?",
    answer: "5'5"
  },
  {
    question: "Which artist is one inch shorter than Kendrick Lamar?",
    answer: "Lil Uzi Vert"
  },
  {
    question: "According to Lil Uzi Vert, when he stands on his money he's what height?",
    answer: "6'6"
  },
  {
    question: "Which NBA legend that wears 23 is 6'6 tall?",
    answer: "Michael Jordan"
  },
  {
    question: "Which rapper/DJ also played in the NBA?",
    answer: "Shaquille O'Neal"
  },
  {
    question: "His NBA dynamic duo has been name dropped in rap songs more than anyone else out of any Athlete?",
    answer: "Kobe Bryant"
  },
  {
    question: "What number draft pick was Kobe Bryant?",
    answer: "13"
  },
  {
    question: "Which artist has 13 studio albums?",
    answer: "Jay-Z"
  },
  {
    question: "Who is Jay-Z married to?",
    answer: "Beyonce"
  },
  {
    question: "She has the most ___?",
    answer: "Grammys"
  },
  {
    question: "Who holds the record for most Grammys won in one night?",
    answer: "Michael Jackson"
  },
  {
    question: "Who held an iconic show in 1993 at the?",
    answer: "Superbowl"
  },
  {
    question: "Who won last year's Super Bowl?",
    answer: "The Eagles"
  },
  {
    question: "Which team did the Eagles beat in that Super Bowl?",
    answer: "The Chiefs"
  },
  {
    question: "Whose star tight end is Engaged to?",
    answer: "Taylor Swift"
  },
  {
    question: "How many studio albums does Taylor Swift have?",
    answer: "12"
  },
  {
    question: "Which band has 12 members?",
    answer: "Treasure"
  },
  {
    question: "Which artist has a popular song called 'Treasure'?",
    answer: "Bruno Mars"
  },
  {
    question: "Which artist sued Bruno Mars?",
    answer: "Miley Cyrus"
  },
  {
    question: "Miley Cyrus was a coach on which TV show?",
    answer: "The Voice"
  },
  {
    question: "Which other artist was also a coach on The Voice?",
    answer: "Alicia Keys"
  },
  {
    question: "Alicia Keys was featured on which song?",
    answer: "City of Gods"
  },
  {
    question: "Which album is 'City of Gods' from?",
    answer: "Donda"
  },
  {
    question: "Who created the album 'Donda'?",
    answer: "Kanye West"
  }
];

document.addEventListener('DOMContentLoaded', function() {
    const QuestionText = document.getElementById("question");
    const QList = new DoubleLinkedList();
    chainQuestions.forEach(q => QList.AddQuestion(q));
    if (QList.current) {
        QuestionText.textContent = QList.current.question;
    }
    const answerButtons = document.getElementsByClassName("answer");
    let score = 0;
    
    console.log("Found", answerButtons.length, "answer buttons");
    
    Array.from(answerButtons).forEach((button) => {
        button.addEventListener("click", function () {
            const answer = button.textContent.trim();
            const correctAnswer = QList.current?.answer;
            this.disabled = true;
            this.classList.add('opacity-50', 'cursor-not-allowed');
            const colorClasses = ['bg-red-500', 'bg-orange-500', 'bg-yellow-500', 'bg-green-500', 
                                   'bg-blue-500', 'bg-indigo-500', 'bg-purple-500', 'bg-pink-500'];
            colorClasses.forEach(cls => this.classList.remove(cls));
            this.classList.add('bg-gray-500');
            
            console.log("Raw button text:", `'${button.textContent}'`);
            console.log("Trimmed answer:", `'${answer}'`);
            console.log("Correct answer:", `'${correctAnswer}'`);
            console.log("Match:", answer === correctAnswer);
            setTimeout(() => {
                if (answer === correctAnswer) {
                    score += 1;
                    console.log("✅ Correct! Score:", score);
                    if (QList.currentIndex() === QList.length - 1) {
                        localStorage.setItem('quizScore', score);
                        localStorage.setItem('quizTotal', QList.length);
                        window.location.href = "jsquizscore.html";
                    } else {
                        QList.goNext();
                        if (QList.current) {
                            QuestionText.textContent = QList.current.question;
                        }
                    }
                } else {
                    console.log("❌ Wrong answer");
                    localStorage.setItem('quizScore', score);
                    localStorage.setItem('quizTotal', QList.length);
                    window.location.href = "failed.html";
                }
            }, 500);
        });
    });
});

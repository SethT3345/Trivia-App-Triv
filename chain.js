const QuestionText = document.getElementById("question");
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
            QuestionText.textContent = this.current.question;
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
            QuestionText.textContent = this.current.question;
            return true;
        }
        return false;
    }

    goPrev() {
		if (this.current && this.current.prev) {
			this.current = this.current.prev;
            QuestionText.textContent = this.current.question;
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


const answerButtons = document.getElementsByClassName("answer");

Array.from(answerButtons).forEach((button) => {
  button.addEventListener("click", function () {
    const answer = button.textContent;
    const correctAnswer = QList.current?.answer
    console.log("Answer button clicked!", answer === correctAnswer);
    if (answer === correctAnswer){
        QList.goNext();
    }else{
        alert("Wrong")
    }
  });
});
console.log("Loaded", answerButtons)

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
    question: "Which NBA legend is 6'6\" tall?",
    answer: "Michael Jordan"
  },
  {
    question: "Which rapper/DJ also played in the NBA?",
    answer: "Shaquille O'Neal"
  },
  {
    question: "Which NBA duo has been name-dropped in rap songs more than any other?",
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
    answer: "Beyoncé"
  },
  {
    question: "Who has the most Grammy awards of all time?",
    answer: "Beyoncé"
  },
  {
    question: "Who holds the record for most Grammys won in one night?",
    answer: "Michael Jackson"
  },
  {
    question: "Which artist had an iconic Super Bowl halftime performance?",
    answer: "Michael Jackson"
  },
  {
    question: "Who won last year's Super Bowl?",
    answer: "The Eagles"
  },
  {
    question: "Which team did the Eagles beat in that Super Bowl?",
    answer: "Chiefs"
  },
  {
    question: "Which Chiefs tight end is engaged to Taylor Swift?",
    answer: "Travis Kelce"
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
chainQuestions.forEach(q => QList.AddQuestion(q))

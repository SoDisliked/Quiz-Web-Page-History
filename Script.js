const startButtom = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButtom.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    console.log('Started')
    startButtom.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
   resetState()
   showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  showQuestion.innerText = question.question 
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text 
    button.classList.add('btn')
    if (answer.correct) {
        button.dataset.correct = answer.correct 
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
   const selectedButton = e.target
   const correct = selectedButton.dataset.correct
   setStatusClass(document.body, correct)
   Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
   })
   if (shuffledQuestions.length > currentQuestionIndex + 1 {
    nextButton.classList.remove('hide')
   } else {
    startButton.innerText = "Recommencer"
    startButtoN.classList.remove('hide')
   })
   
}

function setStatusClass(element, correct) {
    clearStatusClass(element) 
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = {
    {
        question: "Qui a été le nouveau président chilien après le coup d'état de 1973 orchestré par la CIA?"
        answers: {
            { text: 'Augustino Pinochet', correct: true },
            { text: 'Salvador Alliede', correct: false },
        }
    },
    {
        question: "Quel dictateur dirigeait l'URSS lors de la période de la Détente entre les USA et l'URSS?"
        answers: {
            { text: 'Leonid Brechniv', correct: false },
            { text: 'Nikita Khrutchev', correct: true },
        }
    },

}





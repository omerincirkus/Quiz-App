const question = document.getElementById('question')
const choices = Array.from(document.getElementsByClassName('choice-text'))

let currentQuestion = {}
let acceptingAnswer = true
let score = 0
let questionCounter = 0
let availableQuestions = {}


let questions = [
    {
        question: "Inside which element do we put the js",
        choice1: "<script>",
        choice2: "ds",
        choice3: "sda",
        choice4: 121,
        answer: 1
    },
    {
        question: "Inside which element do we put the js",
        choice1: "<script>",
        choice2: "ds",
        choice3: "sda",
        choice4: 121,
        answer: 3
    },
    {
        question: "Inside which element do we put the js",
        choice1: "<script>",
        choice2: "ds",
        choice3: "sda",
        choice4: 121,
        answer: 4
    },
]

//Constants
const CORRECT_BONUS = 10
const MAX_QUESTIONS = 3

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    console.log(availableQuestions)
}

startGame()

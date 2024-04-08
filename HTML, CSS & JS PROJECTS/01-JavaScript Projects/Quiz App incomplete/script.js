const questions = [
    {
        question: 'Capital city of Pakistan?',
        answers: [
            { text: 'Islamabad', correct: true },
            { text: 'Karachi', correct: false },
            { text: 'Sialkot', correct: false },
            { text: 'Lahore', correct: false }
        ]
    },
    {
        question: 'Capital city of India?',
        answers: [
            { text: 'Delhi', correct: true },
            { text: 'Lucknow', correct: false },
            { text: 'Mumbai', correct: false },
            { text: 'Goa', correct: false }
        ]
    },
    {
        question: 'Which one is the biggest animal?',
        answers: [
            { text: 'Zebra', correct: false },
            { text: 'Elephant', correct: true },
            { text: 'Lion', correct: false },
            { text: 'None', correct: false }
        ]
    }
];



let total_score=questions.length;
console.log(total_score);
let user_score=0;
let startbtn=document.querySelector('.start');

let question=document.querySelector('.question');
let choices=document.querySelectorAll('.choice');

console.log(question);
console.log(choices);


startbtn.addEventListener('click',()=>{
    startQuiz();
});

let currentQuestionIndex=0;


function startQuiz(){
    console.log('quiz started!!');
    
    showQuestion(currentQuestionIndex); 
        

}

function showQuestion(currentQuestionIndex){
    let quiz=document.querySelector('.quiz');
    quiz.style.display='block';
    startbtn.style.display='none';

    question.innerHTML=questions[currentQuestionIndex].question;
//     choices[0].innerHTML=questions[currentQuestionIndex].answers[0].text;
//     choices[1].innerHTML=questions[currentQuestionIndex].answers[1].text;
//     choices[2].innerHTML=questions[currentQuestionIndex].answers[2].text;
//     choices[3].innerHTML=questions[currentQuestionIndex].answers[3].text;
// 
    for(let i=0;i<choices.length;i++){
        choices[i].innerHTML=questions[currentQuestionIndex].answers[i].text;       
    }
}








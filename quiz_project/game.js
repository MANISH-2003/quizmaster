const question = document.querySelector('#question');
const choices = Array.from(document.querySelectorAll('.choicetext'));
const progresstext = document.querySelector('#progresstext');
const scoretext = document.querySelector('#score');
const progressbarfull = document.querySelector('#progressbarfull');


let currentquestion = {}
let acceptinganswer = true
let score = 0
let questioncounter = 0
let availablequestions = []
let questions=[
    {
        question:'what is the captial city of france',
        choice1:'london',
        choice2:'paris',
        choice3:'rome',
        choice4:'berlin',
        answer:2,   
    },
    {
        question:'who wrote the play romeo and julite',
        choice1:'william shakespeare',
        choice2:'jane austen',
        choice3:'charles dickens',
        choice4:'marks twain',
        answer:1,   
    },{
        question:'Which planet is known as the "Red Planet"?',
        choice1:'Venus',
        choice2:'Mars',
        choice3:'Jupiter',
        choice4:'Saturn',
        answer:2,   
    },{
        question:'What is the worlds longest river?',
        choice1:'Amazon River',
        choice2:'Nile River',
        choice3:'Mississippi River',
        choice4:'Yangtze River',
        answer:2,   
    },{
        question:'What is the chemical symbol for gold?',
        choice1:'Ag',
        choice2:'Fe',
        choice3:'Au',
        choice4:'Cu',
        answer:3,   
    },
    {
        question:'What is the capital city of Japan?',
        choice1:'Tokyo',
        choice2:'Beijing',
        choice3:'Seoul',
        choice4:'Bangkok',
        answer:1,   
    },
    {
        question:'What is the largest mammal in the world?',
        choice1:'African Elephant',
        choice2:'Blue Whale',
        choice3:'Giraffe',
        choice4:'Polar Bear',
        answer:2,   
    },
    {
        question:'What is the chemical symbol for water?',
        choice1:'O2',
        choice2:'H2O',
        choice3:'CO2',
        choice4:'NaCl',
        answer:2,   
    },
    {
        question:'What is the tallest mountain in the world?',
        choice1:'Mount Kilimanjaro',
        choice2:'Mount Everest',
        choice3:'Mount McKinley (Denali)',
        choice4:'Mount Fuji',
        answer:2,   
    },
    {
        question:'Which continent is known as the "Dark Continent"?',
        choice1:'Africa',
        choice2:'Asia',
        choice3:'South America',
        choice4:'Antarctica',
        answer:2,   
    },
    

];

const SCOREPOINTS=10
const MAXQUESTIONS=5

startgame = () => {
    questioncounter = 0;
    score = 0;
    availablequestions = [...questions];
    getnewquestion();
}
getnewquestion=()=>{
    if(availablequestions.length===0 || questioncounter>(MAXQUESTIONS-1)){
        localStorage.setItem('mostrecentscore',score)
       return window.location.assign(".end.html");
    }
    
    questioncounter++
    progresstext.innerText=`QUESTION ${questioncounter} OF ${MAXQUESTIONS}`
    progressbarfull.style.width=`${(questioncounter/MAXQUESTIONS)*100}%`

    const questionindex=Math.floor(Math.random()*availablequestions.length)
    currentquestion=availablequestions[questionindex]
    question.innerText=currentquestion.question

    choices.forEach(choice=>{
        const number=choice.dataset['number']
        choice.innerText=currentquestion['choice'+number]
    })

    availablequestions.splice(questionindex,1)

    acceptinganswer=true
}
choices.forEach(choice=>{
    choice.addEventListener('click',e=>{
        if(!acceptinganswer) return

        acceptinganswer=false
        const selectedchoice=e.target
        const selectedanswer=selectedchoice.dataset['number']

        let classtoapply=selectedanswer==currentquestion.answer?'correct':'incorrect'

        if(classtoapply==='correct'){
            incrementscore(SCOREPOINTS)
        }
        selectedchoice.parentElement.classList.add(classtoapply);


        setTimeout(()=>{
        selectedchoice.parentElement.classList.remove(classtoapply)
        getnewquestion()
        },1000)
        
    })
})
incrementscore=num=>{
    score+=num
    scoretext.innerText=score
}
startgame()
 
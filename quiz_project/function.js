const startbtn =document.querySelector('.startbtn');
const usernameinfo =document.querySelector('.usernameinfo');
const exitbtn=document.querySelector('.exitbtn');
const main =document.querySelector('.main');
const continubtn =document.querySelector('.continubtn');
const quizcontainer =document.querySelector('.quizcontainer');
const quizbox =document.querySelector('.quizbox');
const resultbox =document.querySelector('.resultbox');
startbtn.onclick =()=>{
    usernameinfo.classList.add('active');
    main.classList.add('active');
}
exitbtn.onclick =()=>{
    usernameinfo.classList.remove('active');
    main.classList.remove('active');
}
continubtn.onclick =()=>{
    quizcontainer.classList.add('active');
    usernameinfo.classList.remove('active');
    main.classList.remove('active');
    quizbox.classList.add('active');
    
}


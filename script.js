let question = document.querySelector(".question");

// take label tages
let first_Answer = document.querySelector("#A");
let second_Answer = document.querySelector("#B");
let third_Answer = document.querySelector("#C");
let fourth_Answer = document.querySelector("#D");
// take label tages

let submit = document.querySelector("#submit"); // submit button
let form = document.querySelector("form"); //whole form 

let questionList = 0; //specify when click submmit button also change question and answers
let correctAnswer = 0; // if you submit correct answer this variable is increase;

let inputValues = document.getElementsByClassName("answer") //take all current answers

const quizData = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        A: "&lt javascript &gt",
        B: "&lt js &gt",
        C: "&lt scripting &gt",
        D: "&lt script &gt",
        corect: "D"
    },
    {
        question: "What is the correct JavaScript syntax to change the content of the HTML element below?",
        A: "#demo.innerHTML = \"Hello World!\" ",
        B: "document.getElementById(\"demo\").innerHTML = \"Hello World!\" ",
        C: "document.getElementByName(\"p\").innerHTML = \"Hello World!\"",
        D: "document.getElement(\"p\").innerHTML = \"Hello World!\" ",
        corect: "B"
    },

    {
        question: "Where is the correct place to insert a JavaScript?",
        A: "Both the &lt head &gt section and the &lt body &gt section are correct  ",
        B: "The &lt head &gt section ",
        C: "The &lt body &gt section",
        D: "The &lt header &gt section",
        corect: "A"
    },

    {
        question: "What is the correct syntax for referring to an external script called \"xxx.js\"?",
        A: "&lt script href=\"xxx.js\" &gt  ",
        B: "&lt script src=\"xxx.js\" &gt   ",
        C: "&lt script name=\"xxx.js\" &gt",
        D: "&lt script src=\"xxx\" &gt",
        corect: "B"
    },

    {
        question: "How do you create a function in JavaScript?",
        A: "function = myFunction()",
        B: "function:myFunction()",
        C: "function myFunction()",
        D: "def myFunction()",
        corect: "C"
    }
]


console.log(quizData.length + "<= object")
console.log(questionList + " current cuestion")

submit.addEventListener("click", (e) => {


    e.preventDefault()
    /* 
        * Array.from we use to convert inputValues to arrays, and use map method
            - then when user choose answer it become true.
            - then check if answer's value is same as correct value we increase correctAnswer variable.

    */
    Array.from(inputValues , x =>  {
        if(x.checked == true){
            x.value == quizData[questionList].corect ? correctAnswer++ : console.log("incorect");
        }
    })

    questionList++ 
    change_question()
})




function change_question() {
    form.reset()
    console.log(quizData.length + "<= object")
    console.log(questionList + " current cuestion")

    if(quizData.length > questionList){
        question.innerHTML = quizData[questionList].question;
        first_Answer.innerHTML = quizData[questionList].A;
        second_Answer.innerHTML = quizData[questionList].B;
        third_Answer.innerHTML = quizData[questionList].C;
        fourth_Answer.innerHTML = quizData[questionList].D;
    }else{
        alert(`correct answer ${correctAnswer} of ${questionList}. if you want to start again click ok`)
        window.location.reload();
    }
    
}

change_question()



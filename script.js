

const questions=[
    {
        question: "Which is largest animal in the world ?",
        answer:[
            { text: "Shark" ,correct: false},
            { text: "Blue whale" ,correct:true},
            { text: "Elephant" ,correct: false},
            { text: "Loin" ,correct: false}
        ]
    },
    {
        question: "Who created Bitcoin?",
        answer:[
            {text:"Satoshi Nakamoto",correct:true},
            {text:"Bipin chandra pal",correct:false},
            {text:"Amirt Dharohar",correct:false},
            {text:"Shaktikanta Das",correct:false}
        ]
    },
    {
        question:"What is the name of the largest ocean in the world?",
        answer:[
            {text:"Atlantic" ,correct:false},
            {text:"Indian" ,correct:false},
            {text:"Arctic",correct:false},
            {text:"Pacific", correct:true}
        ]
    },
    {
        question:"What is the name of the smallest country in the world by area?",
        answer:[
            {text:"Vatican city" ,correct:true},
            {text:"Nepal",correct:false},
            {text:"Bhutan",correct:false},
            {text:"China" ,correct:false}
        ]
    },
    {
        question:"What is the name of the poorest country in the world?",
        answer:[
            {text:"South Sudan",correct:true},
            {text:"Burundi",correct:false},
            {text:"Pakistan",correct:false},
            {text:"Nepal",correct:false}
        ]
    },
    {
        question:"What is the largest lake in India?",
        answer:[
            {text:"Wular Lake",correct:true},
            {text:"Bhopal Lake",correct:false},
            {text:"Shivaji Sagar Lake",correct:false},
            {text:"Indira Sagar lake",correct:false}
        ]
    },
    {
        question:"What is the least developed state in India?",
        answer:[
            {text:"Bihar",correct:false},
            {text:"Uttar Pradesh",correct:true},
            {text:"Kerala",correct:false},
            {text:"Maharashtra " ,correct:false}
        ]
    },
    {
        question:"What is the richest state in India?",
        answer:[
            {text:"Bihar",correct:false},
            {text:"Uttar Pradesh",correct:false},
            {text:"Kerala",correct:false},
            {text:"Maharashtra " ,correct:true}
        ]
    },
    {
        question:"What is the current unemployment rate in India?",
        answer:[
            {text:"7.4%",correct:false},
            {text:"7.6%",correct:false},
            {text:"7.8%",correct:true},
            {text:"8%",correct:false}
        ]
    },
    {
        question:"What is the name of the most population country in the world?",
        answer:[
            {text:"South Sudan",correct:false},
            {text:"China",correct:false},
            {text:"India",correct:true},
            {text:"Russia",correct:false}
        ]
    }
    // {
    //     question:"Who heads the RBI?",
    //     answer:[
    //         {text:"Prime Minister",correct:false},
    //         {text:"President",correct:false},
    //         {text:"Governor",correct:true},
    //         {text:"Vice-President",correct:false}
    //     ]
    // }
]

const header=document.querySelector(".header")
const questionElement=document.querySelector("#question");
const optionbtn =document.querySelectorAll(".btn");
const nextbtn=document.querySelector(".nextbtn button");
const allbtn =document.querySelector(".option ")

const result=document.querySelector(".result");
const resultscore=document.querySelector(".result span");
const resultbutton=document.querySelector(".result button");

console.log(result);
console.log(resultscore);
console.log(resultbutton);

// console.log(questionElement);
// console.log(optionbtn);
// console.log(nextbtn);
// console.log(allbtn);

let currentQuestionIndex = 0;
let score =0;


function startQuiz(a,b){
    currentQuestionIndex=a;
    score=b;
   
    // nextbtn.innerHTML="Next";
    showQuestion();
}

function showQuestion(){
    
    header.style.display="block";
    result.style.display="none";
    let currentQuestion =questions[currentQuestionIndex];
    // console.log(currentQuestion);
    let QuestionNO=currentQuestionIndex + 1;
    // console.log(QuestionNO);
    questionElement.innerText= `${QuestionNO} . ${currentQuestion.question}`;
    // console.log(questionElement);
    

    allbtn.innerText="";
    
    

    currentQuestion.answer.forEach(answer=>{
   


        resetState();
        
        const button =document.createElement("button");
        // console.log(button);
        button.innerHTML =answer.text;
        button.classList.add("btn");
        // allbtn.replaceChild=button;
        // allbtn.remove("button");
        allbtn.appendChild(button);

        // allbtn.prependChild(button);
   
        // console.log(button)

        // console.log(allbtn)

        
        // console.log(answer);
        // console.log(answer);
        if(answer.correct){
            button.dataset.correct=answer.correct;
            // console.log(button);
        }
        button.addEventListener("click",selectAnswer);
        // console.log(score);
        // console.log(currentQuestionIndex);
        
        
    });
};

function selectAnswer(e){
    const selectedBtn =e.target;
    // console.log(selectedBtn)
    const isCorrect =selectedBtn.dataset.correct ==="true";
    // console.log(isCorrect);
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++; 
        currentQuestionIndex++; 
           
    }
    else{
        selectedBtn.classList.add("incorrect");
        currentQuestionIndex++; 
    }
    Array.from(allbtn.children).forEach(button=>{
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
            
            console.log(button);
        }
        button.disabled= true;
        
    });
    nextbtn.style.display="block";
  
    console.log("score",score);
    console.log("Question number",currentQuestionIndex);
    if(currentQuestionIndex === 10){
       
        showresult();
    }
    nextbtn.addEventListener("click",showQuestion);
  

}

function resetState(){
    // optionbtn.style.display="none";
}

function showresult(){
    nextbtn.innerText="Submit";
        console.log(nextbtn);
        nextbtn.addEventListener("click",()=>{
            header.style.display="none";
            result.style.display="block";
            result.style.display="flex",justifyContent="center",alignItems="center";
            resultscore.innerText=score;
            // resultbutton.addEventListener("click",startQuiz(0,0));
        })
}

startQuiz(currentQuestionIndex,score);


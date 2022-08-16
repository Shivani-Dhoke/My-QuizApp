const QuizDB = [

    {
    question: "Q1: JavaScript is the programming language of the __.",
    a: "Desktop",
    b: "Web",
    c: "Mobile",
    d: "Server",
    ans: "ans2"
    },

    {
    question: "Q2: Which of the following methods is used to access HTML elements using Javascript?",
    a: "getElementById()",
    b: "getElementByClassName()",
    c: "Above a and b",
    d: "None of the above",
    ans: "ans3"
    },

    {
    question: "Q3: Which of the following keywords is used to define a variable in Javascript?",
    a: "head",
    b: "var",
    c: "let",
    d: "Above b and c",
    ans: "ans4"
    },

    {
    question: "Q4: Which of the following methods can be used to display data in some form using Javascript?",
    a: "document.write()",
    b: "console.log()",
    c: "window.alert()",
    d: "All of the above",
    ans: "ans4"
    },
    {
    question: "Q5: Which property is used to define the HTML content to an HTML element with a specific id?",
    a: "innerText",
    b: "innerHtml",
    c: "elementText",
    d: "innerContent",
    ans: "ans2"
    }
];
 const question = document.querySelector('.question');
 const option1 = document.querySelector('#option1');
 const option2 = document.querySelector('#option2');
 const option3 = document.querySelector('#option3');
 const option4 = document.querySelector('#option4');
 const next = document.querySelector('#next');
 const showScore = document.querySelector('#showScore');
 const options = document.querySelectorAll('.option');

let i = 0;
let score = 0;

 const loadQuestion = () => {
        // const questionList = QuizDB[i];

        question.innerText = QuizDB[i].question;

        option1.innerText = QuizDB[i].a;
        option2.innerText = QuizDB[i].b;
        option3.innerText = QuizDB[i].c;
        option4.innerText = QuizDB[i].d;
 } 
 loadQuestion();

let getCheckAnswer = () =>{
      let option;
      options.forEach((curAnswerElem) => {
        if( curAnswerElem.checked){
            option = curAnswerElem.id;

        }
      });
      return option;


}
next.addEventListener('click', () =>{
     const checkedAnswer = getCheckAnswer(); //getCheckedAnswer is a function
     console.log(checkedAnswer);
     if(checkedAnswer===QuizDB[i].ans){
        score++;
     }
     i++;
     if(i<QuizDB.length){
        loadQuestion();
     }
     else{
        showScore.innerHTML = `
        <h3>You scored ${score}/${QuizDB.length} ✌️</h3>
        <button class="btn" onclick="location.reload()">Reload</button>        
        `;
        showScore.classList.remove('scoreArea');
     }



});
const quizDB = [
  {
    question: "Q1: Inside which HTML element do we put the JavaScript?",
    A: "<script>",
    B: "<javascript>",
    C: "<scripting>",
    D: "<js>",
    ans: "ans1",
  },
  {
    question: "Q2: Where is the correct place to insert a JavaScript??",
    A: " The <body> section",
    B: " The <head> section",
    C: " Both the <head> section and the <body> section are correct",
    D: " Both the <head> section and the <body> section are incorrect",
    ans: "ans3",
  },
  {
    question:
      "Q3: What is the correct syntax for referring to an external script called 'xxx.js'?",
    A: " <script src='xxx.js'>",
    B: " <script href='xxx.js'>",
    C: " <script name='xxx.js'>",
    D: " <script name href='xxx.js'>",
    ans: "ans1",
  },
  {
    question: "Q4: How do you write 'Hello World' in an alert box?",
    A: " msg('Hello World');",
    B: " alertBox('Hello World');",
    C: " alert('Hello World');",
    D: " msgBox('Hello World');",
    ans: "ans3",
  },
  {
    question: "Q5: How do you create a function in JavaScript?",
    A: " function = myFunction()",
    B: " function myFunction()",
    C: " function:myFunction()",
    D: " function::myFunction()",
    ans: "ans2",
  },
  {
    question: "Q6:How to write an IF statement in JavaScript?",
    A: " if i = 5 then",
    B: " if i == 5 then",
    C: " if i = 5",
    D: " if (i == 5)",
    ans: "ans4",
  },
  {
    question:
      "Q7: How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
    A: " if i =! 5 then",
    B: " if (i != 5)",
    C: " if i <> 5",
    D: " if (i <> 5)",
    ans: "ans2",
  },
  {
    question: "Q8: How does a WHILE loop start?",
    A: " while (i <= 10; i++)",
    B: " while i = 1 to 10",
    C: " while (i <= 10)",
    D: " while (i <==> 10)",
    ans: "ans3",
  },
  {
    question: "Q9:How does a FOR loop start?",
    A: " for i = 1 to 5",
    B: " for (i <= 5; i++)",
    C: " for (i = 0; i <= 5)",
    D: " for (i = 0; i <= 5; i++)",
    ans: "ans4",
  },
  {
    question: "Q10:How can you add a comment in a JavaScript?",
    A: " <!--This is a comment-->",
    B: " 'This is a comment",
    C: " //This is a comment",
    D: "??This is a comment",
    ans: "ans3",
  },
  {
    question:
      "Q11: Which of the following is the correct syntax to redirect a URL using JavaScript?",
    A: "document.location='http://www.w3docs.com';",
    B: "navigator.location='http://www.w3docs.com';",
    C: "window.location='http://www.w3docs.com';",
    D: "browser.location='http://www.w3docs.com';",
    ans: "ans3",
  },
  {
    question: "Q12: How do you declare a new date in JavaScript?",
    A: "var date = Date();",
    B: "var date = date('now');",
    C: "var date = new Date();",
    D: "var date = date().current();",
    ans: "ans3",
  },
  {
    question: "Q13: Which one of the following is correct?",
    A: "i =+ 1;",
    B: "i += 1;",
    C: "i = i++1;",
    D: "+i+;",
    ans: "ans2",
  },
  {
    question: "Q14: How do you open a new window with JavaScript?",
    A: "window.open(...);",
    B: "window.new(...);",
    C: "open(new window());",
    D: "window.open_new(...);",
    ans: "ans2",
  },
  {
    question:
      "Q15:Which function is used to load the next URL in the history list?",
    A: "window.history.next();",
    B: "window.history.load_next();",
    C: "window.history.forward();",
    D: "window.history.load_forward();",
    ans: "ans1",
  },
  {
    question:
      "Q16:Which of the following events occurs when the user clicks on an HTML element?",
    A: "onchange",
    B: "onmouseover",
    C: "onmouseclick",
    D: "onclick",
    ans: "ans4",
  },
  {
    question: "Q17:How do you create a JavaScript array?",
    A: "var fruits = 'banana', 'apple', 'peach';",
    B: "var fruits = ['banana', 'apple', 'peach'];",
    C: "var fruits = (1:'banana', 2:'apple', 3:'peach');",
    D: "var fruits = 1 = ('banana'), 2 = ('apple'), 3 = ('peach');",
    ans: "ans2",
  },
  {
    question: "Q18: The JavaScript Date is fundamentally specified as ___",
    A: "The number of milliseconds elapsed since January 1, 1970",
    B: "The number of picoseconds elapsed since January 1, 1970",
    C: "The number of minutes elapsed since January 1, 1980",
    D: "The number of days that have elapsed since January 1, 1980",
    ans: "ans1",
  },
  {
    question:
      "Q19: Which of the following is the correct way to write “Welcome to W3docs” on the web page?",
    A: "document.write(“Welcome to W3docs”);",
    B: "system.out.println(“Welcome to W3docs”);",
    C: "print(“Welcome to W3docs”);",
    D: "response.write(“Welcome to W3docs”);",
    ans: "ans1",
  },
  {
    question: "Q20:let stringToNum=parseInt(“123ab”)",
    A: "123",
    B: "Exception",
    C: "123ab",
    D: "NaN",
    ans: "ans4",
  },
];

const question= document.querySelector(".question")
const option1= document.querySelector("#option1")
const option2= document.querySelector("#option2")
const option3= document.querySelector("#option3")
const option4= document.querySelector("#option4")
const submit=document.querySelector("#submit")
const answers=document.querySelectorAll(".answer")
const showScore=document.querySelector("#showScore")

let questionCount=0;
let score=0;
const loadQuestion=()=>{
 const questionList= quizDB[questionCount];
 question.innerText = questionList.question;
  option1.innerText = questionList.A;
  option2.innerText = questionList.B;
  option3.innerText = questionList.C;
  option4.innerText = questionList.D;
}

loadQuestion();

  const getcheckAnswer=()=>{
    let answer;

    answers.forEach( (curAnsElem)=> {
      if(curAnsElem.checked){
        answer=curAnsElem.id;
      }
    });
    return answer;

  }

const deSelectAll=()=>{
  answers.forEach((curAnsElem)=> curAnsElem.checked=false)
}


submit.addEventListener('click',()=>{
  const checkedAnswers = getcheckAnswer();
  console.log(checkedAnswers)
  if(checkedAnswers==quizDB[questionCount].ans){
    score++;
  };
  questionCount++;
  deSelectAll();
 
   if(questionCount<quizDB.length){
    loadQuestion();
    }else{
      showScore.innerHTML=`
      <h3> You Scored ${score}/${quizDB.length}</h3>
      <button class="btn" onclick="location.reload()">Reload</button>
      `;
      showScore.classList.remove('scoreArea');
  }
})
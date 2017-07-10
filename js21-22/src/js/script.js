
let questions=[
{
    "text": "2+2:",
    "answers": ["4",
          "6",
          "3"],
    "correctAnswer": 0 // нумерация ответов с нуля!
},
{
    "text": "Кто такой Гагарин",
    "answers": ["Боец",
          "Космонавт",
          "Врач"],
    "correctAnswer": 1
},
{
    "text": "2+2*2",
    "answers": ["6",
          "8",
          "Нету верного решения"],
    "correctAnswer": 0
}
];

localStorage.setItem('questions', JSON.stringify(questions));
localStorage.getItem('questions');

let yourAns = Array;
let score = 0;

let  Engine =(question, answer) =>yourAns[question]=answer;

function Score(){
   let answerText = "Результаты:\n";
   for(let i = 0; i < yourAns.length; ++i){
    let num = i+1;
    answerText=answerText+"\n    Вопрос №"+ num +"";
    if(yourAns[i]!=questions[i].correctAnswer){
        answerText=answerText+"Не верно " ;
      }
        else{
        answerText=answerText+": Верно!";
        ++score;
        }
       }

   answerText=answerText+"\nВсего правильных ответов: "+score+"\n";
   alert(answerText);
   yourAns = [];
   score = 0;
   clearForm("quiz");


}
function clearForm(name) {
   let f = document.forms[name];
   for(let i = 0; i < f.elements.length; ++i) {
    if(f.elements[i].checked)
        f.elements[i].checked = false;
}
}

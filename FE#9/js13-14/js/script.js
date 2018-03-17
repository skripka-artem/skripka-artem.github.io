
var questions=[
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

var yourAns = new Array;
var score = 0;

function Engine(question, answer) {
  yourAns[question]=answer;
}
function Score(){
   var answerText = "Результаты:\n";
   for(var i = 0; i < yourAns.length; ++i){
    var num = i+1;
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
   var f = document.forms[name];
   for(var i = 0; i < f.elements.length; ++i) {
    if(f.elements[i].checked)
        f.elements[i].checked = false;
}
}

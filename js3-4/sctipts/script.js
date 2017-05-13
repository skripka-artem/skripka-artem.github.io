(function  () {
  'use string';

    var conteiner = document.createElement('div');
    conteiner.classList.add('conteiner');
    var body=document.querySelector('.body');
    body.appendChild(conteiner);

    var question = document.createElement('p');
    question.innerHTML='1.Вопрос №1';
    var div=document.querySelector('.conteiner');
    div.appendChild(question);

    var form = document.createElement('form');
    form.classList.add('form');
    var div=document.querySelector('.conteiner');
    div.appendChild(form);

    var checkbox = document.createElement('div');
    checkbox.classList.add('checkbox')
    var form=document.querySelector('.form');
    form.appendChild(checkbox);

    var label = document.createElement('label');
    label.innerHTML='Вариант ответ №1';
    var form=document.querySelector('.form');
    checkbox.appendChild(label);

    var input = document.createElement("input");
   input.setAttribute('type','checkbox')
    var form=document.querySelector('.form');
    label.appendChild(input);

    var label2 = document.createElement('label');
    label2.innerHTML='Вариант ответ №2';
    var form=document.querySelector('.form');
    checkbox.appendChild(label2);

    var input2 = document.createElement("input");
    input2.setAttribute('type','checkbox')
    var form=document.querySelector('.form');
    label2.appendChild(input2);

    var label3 = document.createElement('label');
    label3.innerHTML='Вариант ответ №3';
    var form=document.querySelector('.form');
    checkbox.appendChild(label3);

    var input3 = document.createElement("input");
    input3.setAttribute('type','checkbox')
    var form=document.querySelector('.form');
    label3.appendChild(input3);
})();

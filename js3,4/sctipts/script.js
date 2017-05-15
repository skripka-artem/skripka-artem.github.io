(function  () {
  'use strict';
    var test = {
        data: {
            title: 'Тест по какой-то теме',
            questions: [
                {
                    title: 'Вопрос #1',
                    answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3']
                },
                {
                    title: 'Вопрос #2',
                    answers: ['Вариант овтета 1', 'Вариант овтета 2', 'Вариант овтета 3', 'Вариант овтета 4']
                },
                {
                    title: 'Вопрос #3',
                    answers: ['Вариант овтета 1', 'Вариант овтета 2']
                }
            ]
        },
        createForm: function  () {

            var form = document.createElement('form');
            form.classList.add('form');

            var formTitle = document.createElement('h1');
            formTitle.classList.add('form-title');
            formTitle.innerHTML = this.data.title;
            form.appendChild(formTitle);

          for (var i=0; i<this.data.questions[i].answers.length; i++) {
            var li = document.createElement('li');
            li.innerHTML = this.data.questions[i].title;
            form.appendChild(li);

            for (var k = 0; k<this.data.questions[i].answers[0].length; k++) {
              var answer  = document.createElement('li');
              answer.innerHTML = this.data.questions[i].answers[k];
              li.appendChild(answer);
            }
          }
            return form;



        },
        init: function () {

            var body = document.body;

            body.appendChild(this.createForm());

        }


    };

    test.init();


})();

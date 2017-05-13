(function  () {
  'use strict';
    var test = {
        data: {
            title: 'Тест по какой-то теме',
            questions: [
                {
                    title1: 'Вопрос #1',
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

            return form;

        },
        init: function () {

            var body = document.body;

            body.appendChild(this.createForm());

        },
        createQuestions: function  () {

            var question = document.createElement('p');
            question.classList.add('question');
            question.innerHTML = this.data.questions.title ;

            this.createForm().appendChild(question);

            return question;
        },
        init1: function () {

            var form = document.body;

            form.appendChild(this.createQuestions());
        }

    };

    test.init();
    test.init1();

})();

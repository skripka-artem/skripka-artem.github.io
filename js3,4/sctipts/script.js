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

            var questions = document.createElement('p');
            questions.classList.add('question');
            questions.innerHTML = quest;
            for (var quest in test.data.questions) {
                console.log(test.data.questions[quest].title);
                for (var i=0,  max=test.data.questions[quest]; i<max;i++ ){
                    console.log(test.data.questions[quest][i].title)

                }
            }


            form.appendChild(questions);
            return form;



        },
        init: function () {

            var body = document.body;

            body.appendChild(this.createForm());

        }


    };

    test.init();


})();

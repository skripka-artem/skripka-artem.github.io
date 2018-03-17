(function () {
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
    generateHtml: function () {
      var questionsArr = [];
        for (var i = 0, length = this.data.questions.length; i < length; i++) {
        var questionTag = createQuestionTag(this.data.questions[i].title);
        var labelTag = createLabelTag(this.data.questions[i].title, this.data.questions[i].answers);
        var formTag = joinQuestionToLabel(questionTag, labelTag);
        questionsArr.push(formTag);
      }
      var form = createForm(questionsArr);
      document.body.innerHTML = form;
      function createForm(arr) {
        var code = arr[0];
        var button = createButton('Проверить  результат');
        for (var i = 1, length = arr.length; i < length; i++) {
          code += arr[i];
        }
        return '<form action="" method="POST">' + code + button + '</form>';
      }
      function joinQuestionToLabel(question, label) {
        return question + label;
      }
      function createTitleTag(text) {
        var div = document.createElement('div');
        div.innerText = text;
        return div;
      }
      function createQuestionTag(question) {
        return '<p class="question">' + question + '</p>';
      }
      function createLabelTag(questionName, arr) {
        var newArr = '<input type="checkbox"' + questionName + '0"><span>' + arr[0] + '</span><br>';
        var code;
        for (var i = 1, length = arr.length; i < length; i++) {
          code = '<input type="checkbox"' + questionName + i + '"><span>' + arr[i] + '</span><br>';
          newArr += code;
        }
        return '<label>' + newArr + '</label>';
      }
      function createButton(text) {
        return '<button type="submit" style="display: block; margin-top: 50px;">' + text + '</button>';
      }
    }
  };
  test.generateHtml();
})();

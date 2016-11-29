let createElement = (type, content = '', className = '') => {
  let el = document.createElement(type);
  el.innerHTML = content;
  el.className = className;

  return el;
};

// Questions
let questions = [{
  elementId: 'questionOne',
  fn: e => {
    // QuestionOne
    e.preventDefault();
    require.ensure([], () => {
      let QuestionOne = require('./question-one'),
        questionOne = new QuestionOne(),
        answer = document.getElementById('answerOne');

      answer.innerHTML = '';
      answer.appendChild(createElement('h4', 'Answer 1'));
      answer.appendChild(createElement('div', questionOne.getSqlCode()));
    });
  }
}, {
  elementId: 'questionTwo',
  fn: e => {
    // QuestionTwo
    e.preventDefault();
    require.ensure([], () => {
      let QuestionTwo = require('./question-two'),
        code = document.getElementById('codeField').value,
        questionTwo = new QuestionTwo(),
        answer = document.getElementById('answerTwo');

      answer.innerHTML = '';
      answer.appendChild(createElement('h4', 'Answer 2'));
      answer.appendChild(createElement('div', questionTwo.getFormattedHtml(code)));
    });
  }
}, {
  elementId: 'questionThree',
  fn: e => {
    // QuestionThree
    e.preventDefault();
    require.ensure([], () => {
      let QuestionThree = require('./question-three'),
        questionThree = new QuestionThree(),
        arr = ['a', 'b', 'c', 'd', 'e', 'f'],
        answer = document.getElementById('answerThree');

      answer.innerHTML = '';
      answer.appendChild(createElement('h4', 'Answer 3'));
      answer.appendChild(createElement('div', questionThree.getFormattedHtml(arr)));
    });
  }
}, {
  elementId: 'questionFour',
  fn: e => {
    // QuestionFour
    e.preventDefault();
    require.ensure([], () => {
      let QuestionFour = require('./question-four'),
        questionFour = new QuestionFour(),
        shapesObj = questionFour.shapes(),
        answer = document.getElementById('answerFour'),
        ul = createElement('ul'),
        proccessResponse = (data) => {
          let allRows = data
            .split(/\r?\n|\r/)
            .filter(function(str) {
              return str;
            });

          ul.innerHTML = '';

          if (!allRows.length) {
            return ul.appendChild(createElement('li', 'The CSV file is empty.', 'error'));
          }

          return allRows.forEach(row => {
            let rowItem = row.split(','),
              name = rowItem[0],
              sideLength = +rowItem[1],
              shape = shapesObj[name];

            if (shape && sideLength) {
              ul.appendChild(createElement('li', shape(sideLength).output()));
            }
          });
        };

      answer.innerHTML = '';
      answer.appendChild(createElement('h4', 'Answer 4'));
      ul.appendChild(createElement('li', 'Loading...'));
      answer.appendChild(ul);
      questionFour.ajax('GET', '/public/file.csv', proccessResponse);
    });
  }
}];

// Set questions
questions.forEach(q => {
  document
    .getElementById(q.elementId)
    .addEventListener('click', q.fn);
});

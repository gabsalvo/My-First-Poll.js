'use strict';
const answerPoll = document.querySelector('.poll');
let i = 0;
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write Option Number)`
      )
    );
    if (answer >= 0 && answer <= 3) {
      this.answers[answer] = i + 1;
    } else {
      const wrong = alert('Wrong answer! Try again by pressing OK');
      this.registerNewAnswer();
    }
    console.log(poll.answers);
  },
};
poll.registerNewAnswer();

answerPoll.addEventListener('click', poll.registerNewAnswer.bind(poll));

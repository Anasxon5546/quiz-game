// HTML elements
const appName = document.createElement('h2');
const line = document.createElement('hr');
const quizDisplay = document.createElement('p');
const container = document.querySelector('.container');
let index = 1;
let score = 0;

// Quiz data
const quizzes = {
  quiz1: {
    question: '1. What is the capital of France?',
    options: ['Berlin', 'Madrid', 'Paris', 'Rome'],
    answer: 'Paris'
  },
  quiz2: {
    question: '2. Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Saturn', 'Venus'],
    answer: 'Mars'
  },
  quiz3: {
    question: '3. Who painted the Mona Lisa?',
    options: ['Vincent van Gogh', 'Leonardo da Vinci', 'Pablo Picasso', 'Claude Monet'],
    answer: 'Leonardo da Vinci'
  },
  quiz4: {
    question: '4. What is the largest mammal in the world?',
    options: ['Elephant', 'Giraffe', 'Blue whale', 'Hippopotamus'],
    answer: 'Blue whale'
  },
  quiz5: {
    question: '5. What is the capital of Japan?',
    options: ['Tokyo', 'Beijing', 'Seoul', 'Bangkok'],
    answer: 'Tokyo'
  },
};

// Function to display the current quiz
function displayQuiz() {
  appName.textContent = 'simple quiz';
  container.appendChild(appName);
  container.appendChild(line);
  quizDisplay.textContent = quizzes[`quiz${index}`].question;
  container.appendChild(quizDisplay);
  for (let i = 0; i < 4; i++) {
  let options = document.createElement('button');
  options.textContent = quizzes[`quiz${index}`].options[i];
  container.appendChild(options);

  options.addEventListener('click', () => {
    if (options.textContent === quizzes[`quiz${index}`].answer) {
      options.style.background = 'green';
      score++;
    } else {
      options.style.background = 'red';
      document.querySelectorAll('button').forEach(button => {
        if (button.textContent === quizzes[`quiz${index}`].answer) {
          button.style.background = 'green';
        }
      });
    }

    document.querySelectorAll('button').forEach(button => {
      button.disabled = true;
    });

    if (index < Object.keys(quizzes).length) {
      let nextButton = document.createElement('button');
      nextButton.textContent = 'Next';
      nextButton.classList.add('next-button');
      container.appendChild(nextButton);

      nextButton.addEventListener('click', () => {
        index++;
        container.innerHTML = '';
        displayQuiz();
      });
    } else {
      endQuiz();
    }
  });
}
}

// Function to display end of quiz and play again functionality
function endQuiz() {
  quizDisplay.textContent = `You scored ${score} out of ${Object.keys(quizzes).length}`;

  let playAgainButton = document.createElement('button');
  playAgainButton.textContent = 'PLAY AGAIN';
  playAgainButton.classList.add('play-again');
  playAgainButton.addEventListener('click', () => {
    index = 1;
    score = 0;
    container.innerHTML = '';
    displayQuiz();
  });

  container.appendChild(playAgainButton);
}

displayQuiz();

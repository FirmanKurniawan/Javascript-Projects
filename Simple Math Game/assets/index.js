window.onload = () => {
  generateQuestions();
};

const questionText = document.getElementById("question");
const optionNodes = Array.from(document.getElementsByClassName("option"));

const generateQuestions = () => {
  let question =
    Math.round(Math.random() * 20 + 1) +
    ["+", "-", "*"][Math.round(Math.random()*10 % 2)] +
    Math.round(Math.random() * 20 + 1);

  let answer = eval(question);
  let option = [answer, answer + 1, answer - 1, answer + 10];
  option = shuffleArray(option);

  questionText.innerText = question
  optionNodes.forEach((e, i) => {
    e.style.background = "#4e4eff";
    e.innerHTML = option[i];
    e.id = option[i];
    e.onclick = () => {
      validateAnswer(option[i]);
    };
  });
};

const validateAnswer = (id) => {
  let answer = eval(questionText.innerText);
  id === answer ? correctAnswer(id) : wrongAnswer(id);
  setTimeout(() => generateQuestions(), 500);
};

const correctAnswer = (id) => {
  document.getElementById(id).style.background = "#00ebb8";
};

const wrongAnswer = (id) => {
  document.getElementById(id).style.background = "#ff207d";
};

const shuffleArray = (arr) => {
  return arr
    .map((val) => ({ val, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ val }) => val);
};

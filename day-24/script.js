const quizForm = document.querySelector("#quiz__form");
const quizQuestion = document.querySelector("#quiz__question");
const quizContainer = document.querySelector("#quiz__container");

const QUIZ_API_ENDPOINT = "http://jservice.io/api/random";

let questionData = {};

const loadQuestion = async () => {
  try {
    const response = await fetch(QUIZ_API_ENDPOINT).then((res) => res.json());

    questionData = response[0];
    quizQuestion.innerHTML = questionData.question;
  } catch (err) {
    quizForm.innerHTML = "Something went wrong 🤕⚡️⚡️";
  }
  quizForm.style.filter = "blur(0)";
};

quizForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const quizAnswer = e.target.querySelector("#quiz__answer").value;

  if (!quizAnswer) return;

  quizContainer.style.display = "none";

  if (
    quizAnswer.toLowerCase() ===
    questionData.answer.replace(/<\/?[^>]+(>|$)/g, "").toLowerCase()
  ) {
    quizForm.innerHTML = "<h3>Yay! You got it right 🥳</h3>";
  } else {
    quizForm.innerHTML = "<h3>Sorry! Wrong answer 🥲</h3>";
  }
  setTimeout(() => window.location.reload(), 2000);
});

window.addEventListener("load", loadQuestion);

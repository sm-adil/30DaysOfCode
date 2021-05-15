const feedbackForm = document.querySelector("#feedback__form");
const feedbackFormButton = document.querySelector("#feedback__form button");

const saveFeedback = (e) => {
  e.preventDefault();
  const selectedFeedBack = document.querySelector(
    'input[name="feedback"]:checked'
  );

  if (!selectedFeedBack) return;

  // can be a aync post request to a API endpoint
  // for now adding a temporary delay and storing data in localStorage

  feedbackFormButton.disabled = true;
  feedbackFormButton.innerText = "Sending...";
  setTimeout(() => {
    localStorage.setItem("feedback", selectedFeedBack.value);
    feedbackFormButton.innerText = "Thanks for sharing your feedback ✔";
  }, 3000);
};

feedbackForm.addEventListener("submit", saveFeedback);

const toastToggle = document.querySelector("#toast-toggle");

const toastMessages = [
  "Did you know 🤔?",
  "Uh oh, something went wrong🤯",
  "Yay! Everything worked!😇",
];

const toastColor = ["#FBD38D", "#FEB2B2", "#9AE6B4"];

toastToggle.addEventListener("click", () => {
  const toastContainer = document.querySelector(".toast-container");
  const toast = document.createElement("span");
  toast.className = "toast";
  toast.innerText = `${
    toastMessages[Math.floor(Math.random() * toastMessages.length)]
  }`;
  toast.style.background =
    toastColor[Math.floor(Math.random() * toastMessages.length)];

  toastContainer.appendChild(toast);
  setTimeout(() => {
    const toast = document.querySelector(".toast");
    toast.remove();
  }, 5000);
});

window.addEventListener("load", () => {
  const toastContainer = document.createElement("div");
  toastContainer.className = "toast-container";

  document.body.appendChild(toastContainer);
});

const dragElement = document.querySelector("#drag-element");
const dropContainers = document.querySelectorAll(".drop-container");

let dragged;

document.addEventListener(
  "dragstart",
  (e) => {
    dragged = e.target;
    e.target.style.opacity = 0.5;
  },
  false
);

document.addEventListener(
  "dragend",
  function (event) {
    event.target.style.opacity = "";
  },
  false
);

document.addEventListener(
  "dragover",
  function (event) {
    event.preventDefault();
    if (event.target.className === "dropzone") {
      event.target.style.opacity = 0.5;
    }
  },
  false
);

document.addEventListener(
  "dragenter",
  function (event) {
    if (event.target.className == "dropzone") {
      event.target.style.background = "#27211f";
    }
  },
  false
);

document.addEventListener(
  "dragleave",
  function (event) {
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
      event.target.style.opacity = "";
    }
  },
  false
);

document.addEventListener(
  "drop",
  function (event) {
    event.preventDefault();
    if (event.target.className == "dropzone") {
      event.target.style.background = "";
      event.target.style.opacity = "";

      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  },
  false
);

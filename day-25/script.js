const emojiPicker = document.querySelector("#emoji__picker");

const emojis = [
  "😂",
  "😲",
  "😍",
  "🥲",
  "👏",
  "🔥",
  "🎉",
  "💯",
  "❤️",
  "🤣",
  "🥰",
  "😘",
  "😭",
  "😊",
];

const popupEmoji = (e) => {
  for (let i = 0; i <= Math.floor(Math.random() * 100) + 1; i++) {
    const body = document.body;
    const span = document.createElement("span");
    span.className = "emoji";
    span.innerText = e.target.innerText;

    span.style.left = Math.random() * body.offsetWidth - 100 + "px";
    span.style.top = Math.random() * body.offsetHeight - 100 + "px";

    body.appendChild(span);

    setTimeout(() => span.remove(), 3000);
  }
};

const loadEmojis = () => {
  const emojiContainer = document.createElement("div");
  emojiContainer.className = "emoji__container";
  emojiContainer.style.top =
    emojiPicker.getBoundingClientRect().top - 125 + "px";

  const emojiHolder = document.createElement("div");
  emojiHolder.className = "emoji__holder";
  emojis.forEach((emoji) => {
    const emojiButton = document.createElement("button");
    emojiButton.innerText = emoji;
    emojiButton.addEventListener("click", popupEmoji);
    emojiHolder.appendChild(emojiButton);
  });

  emojiContainer.appendChild(emojiHolder);

  const pointer = document.createElement("div");
  pointer.className = "emoji__pointer";
  emojiContainer.appendChild(pointer);

  emojiPicker.insertAdjacentElement("afterend", emojiContainer);
};

window.addEventListener("load", loadEmojis);

emojiPicker.addEventListener("click", () => {
  const emojiContainer = document.querySelector(".emoji__container");

  emojiContainer.classList.toggle("open");
});

const timelineContainer = document.querySelector("#timeline__container");

const timelineList = [
  "Born 👶🏼🍼",
  "Became a Pokémon Master 🔥",
  "First Computer 🖥️",
  "Learned How To Program 🤓",
  "Landed First Internship 👨‍💻",
  "Started Tutoring Programming 📝",
];

renderTimeLineInput = () => {
  const form = document.createElement("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const newTimeline = e.target.querySelector(".timeline__input").value;
    timelineList.push(newTimeline);

    renderTimeline();
  });

  form.innerHTML = `
    <span class="timeline__list__dot"></span>
    <input placeholder="add new timeline..." class="timeline__input" />
  `;

  timelineContainer.appendChild(form);
};

const renderTimeline = () => {
  const list = [];
  timelineList
    .slice()
    .reverse()
    .forEach((timeline) => {
      const li = document.createElement("li");
      li.className = "timeline__list";
      li.innerHTML = `
      <span class="timeline__list__line"></span>
      <span class="timeline__list__dot"></span>
      <p class="timeline__list__content">${timeline}</p>
    `;

      list.push(li);
    });

  timelineContainer.replaceChildren(...list);
  renderTimeLineInput();
};

renderTimeline();

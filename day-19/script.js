const form = document.querySelector("form");
const formInput = document.querySelector("form input");
const formButton = document.querySelector("form button");

let linkTobeShorten = "";
const API_ENDPOINT = "https://api.shrtco.de/v2/shorten";

formInput.addEventListener("keyup", (e) => {
  if (!e.target.value) return (formButton.disabled = true);

  formButton.disabled = false;
  linkTobeShorten = e.target.value;
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  formButton.disabled = true;
  formButton.innerText = "Shortening...";
  const response = await fetch(`${API_ENDPOINT}?url=${linkTobeShorten}`).then(
    (res) => res.json()
  );

  if (!response.ok) return (form.innerHTML = `<h2>${response.error}</h2>`);

  const a = document.createElement("a");
  a.target = "_blank"
  a.rel = "noopener noreferrer"
  a.href = response.result.full_short_link2
  a.innerText = response.result.full_short_link2
  form.appendChild(a)

  formButton.innerText = "Shorten my link";
  formButton.disabled = false;
});

const searchBox = document.querySelector(".search__box");
const searchList = document.querySelector(".search__list");

const users = ["Robert", "Karius", "John Doe", "Jane Doe", "Mary Phillips"];

const loadList = () => {
  users.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = user;

    searchList.appendChild(li);
  });
};

const filterList = (e) => {
  const updatedUsersList = users.filter((user) =>
    user.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );

  const list = [];
  updatedUsersList.forEach((user) => {
    const li = document.createElement("li");
    li.innerText = user;

    list.push(li);
  });
  searchList.replaceChildren(...list);
};

window.addEventListener("load", loadList);
searchBox.addEventListener("keyup", filterList);

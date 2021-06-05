const menuButton = document.querySelector("#menu__button");

const menuOptions = [
  "Download",
  "Create a copy",
  "Mark as draft",
  "Attend workshop",
];

const toggleMenu = (e) => {
  const menu = e.target.querySelector("#menu");

  menuButton.innerText = "Open Menu ↓";
  if (menu) return menu.remove();

  menuButton.innerText = "Close Menu ↑";
  const menuList = document.createElement("ul");
  menuList.id = "menu";

  menuOptions.forEach((option) => {
    const menuItem = document.createElement("li");
    menuItem.id = `menu-item-${option}`;
    menuItem.innerText = option;
    menuItem.tabIndex = 0;

    menuList.appendChild(menuItem);
  });

  menuButton.appendChild(menuList);
};

menuButton.addEventListener("click", toggleMenu);

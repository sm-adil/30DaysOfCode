const tabsNav = document.querySelector(".tabs__nav");
const tabsNavtab = document.querySelectorAll(".tabs__navtab");
const tabsPanels = document.querySelectorAll(".tabs__tabpanel");

tabsNav.addEventListener("click", (e) => {
  if (!e.target.value) return;

  tabsNavtab.forEach((nav) => {
    nav.classList.remove("tabs__navtab-active");
  });
  tabsPanels.forEach((panel) => {
    panel.classList.remove("tabs__tabpanel-active");

    if (panel.id === e.target.value) {
      e.target.classList.add("tabs__navtab-active");
      return panel.classList.add("tabs__tabpanel-active");
    }
  });
});

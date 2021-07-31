const openDrawer = document.querySelector("#open-drawer");
const closeDrawer = document.querySelector("#close-drawer");
const drawer = document.querySelector(".drawer");

const toggleDrawer = () => {
  closeDrawer.focus();
  drawer.classList.toggle("open");
};

openDrawer.addEventListener("click", toggleDrawer);
closeDrawer.addEventListener("click", toggleDrawer);

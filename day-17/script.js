const cookieContainer = document.querySelector("#cookie__container");
const cookieCloseButton = document.querySelector("#cookie__close__button");

const isCookieAvailable = (cookie) => {
  const match = document.cookie.match(
    new RegExp("(^| )" + cookie + "=([^;]+)")
  );

  return Boolean(match ? match[2] : "");
};

const setBrowserCookie = () => {
  document.cookie = "showCookiePopup=true; samesite=strict";
  cookieContainer.style.bottom = "-30rem";
};

const showCookiePopup = () => {
  if (isCookieAvailable("showCookiePopup")) return;

  setTimeout(() => {
    cookieContainer.style.bottom = "1rem";
  }, 1000);
};

window.addEventListener("load", showCookiePopup);
cookieCloseButton.addEventListener("click", setBrowserCookie);

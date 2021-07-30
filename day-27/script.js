const likeHeartFill = document.querySelector("#like-heart-fill");
const likeHeartButton = document.querySelector("#like-heart-button");

let likeCount = 0;
const likeStepper = [17, 12, 8, 1, 0];

likeHeartButton.addEventListener("click", () => {
  if (likeCount >= 5) return;

  likeHeartFill.style.transform = `translateY(${likeStepper[likeCount + 1]}px)`;
  likeCount++;
});

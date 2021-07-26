const wordsNode = document.querySelector("#words-node");

const highlightWords = (wordsNode, highlightArr = []) => {
  const wordsArr = wordsNode.innerText.split(" ");

  highlightArr.forEach((text) => {
    wordsArr.map((word) => {
      if (word === text) {
        wordsArr[
          wordsArr.indexOf(text)
        ] = `<span class='highlight'>${text}</span>`;
      }
    });

    return (wordsNode.innerHTML = wordsArr.join(" "));
  });
};

highlightWords(wordsNode, [
  "space",
  "Business",
  "Conversational",
  "technologically",
  "paradigm",
  "proposal",
  "cross",
  "sabers",
  "personal",
  "rehydrate",
]);

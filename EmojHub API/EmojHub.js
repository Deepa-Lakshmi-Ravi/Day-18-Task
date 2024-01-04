const getEmoj = async () => {
  const response = await fetch("https://emojihub.yurace.pro/api/random");
  const emoj = await response.json();
  displayEmoj(emoj);
};

const displayEmoj = (emoj) => {
  const emojicontainer = document.createElement("div");

  emojicontainer.style.border = "1px solid";
  emojicontainer.style.borderRadius = "5px";
  emojicontainer.style.padding = "8px";
  emojicontainer.style.textAlign = "center";
  emojicontainer.style.display = "inline-block";

  emojicontainer.innerHTML = `<h3>${emoj.name}</h3>
        <p>Category: ${emoj.category}</p>
        <p>Group: ${emoj.group}</p>
        <p>HtmlCode: ${emoj.htmlCode[0]}</p>
        <p>UniCode: ${emoj.unicode[0]}</p>`;
  document.body.appendChild(emojicontainer);
};

const textAreaEl = document.querySelector("#markup-textarea");
const extractBtnEl = document.querySelector("#markup-btn");
const paragraphEl = document.querySelector("#output-window");

function extractCssClass() {
  const markup = textAreaEl.value;
  const arrayMarkup = markup.split(">");
  const filteredArray = arrayMarkup.filter((item) =>
    item.includes("className")
  );
  const getIndexClassName = filteredArray.map((item) =>
    item.indexOf("className={")
  );
  const getString = filteredArray.map((item, index) =>
    item.slice(getIndexClassName[index])
  );
  const getIndexLastScope = getString.map((item) => item.indexOf("}"));
  const getReactClass = getString.map((item, index) =>
    item.slice(11, getIndexLastScope[index])
  );
  const getPointIndex = getReactClass.map((item) => item.indexOf(".") + 1);
  const getClass = getReactClass.map((item, index) =>
    item.slice(getPointIndex[index])
  );
  const getCssClass = getClass.map((item) => `.${item}{}`);
  const convertToString = getCssClass.join("<br />");
  paragraphEl.innerHTML = convertToString;
}

extractBtnEl.addEventListener("click", extractCssClass);

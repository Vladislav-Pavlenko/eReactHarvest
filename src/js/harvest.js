const textAreaEl = document.querySelector("#markup-textarea");
const extractBtnEl = document.querySelector("#markup-btn");
const paragraphEl = document.querySelector("#output-window");

function extractCssClass() {
  //User markup
  const markup = textAreaEl.value;
  //Convert markup for array
  const arrayMarkup = markup.split(">");
  //Checking if the string contains the 'className' attribute
  const filteredArray = arrayMarkup.filter((item) =>
    item.includes("className")
  );
  //Get index 'className' attribute
  const IndexClassName = filteredArray.map((item) =>
    item.indexOf("className={")
  );
  //We get a string with the name of the class
  const classNameString = filteredArray.map((item, index) =>
    item.slice(IndexClassName[index])
  );
  //We get the index of the last curly bracket
  const indexLastScope = classNameString.map((item) => item.indexOf("}"));
  //Getting the react class
  const reactClass = classNameString.map((item, index) =>
    item.slice(11, indexLastScope[index])
  );
  //Getting the point index
  const pointIndex = reactClass.map((item) => item.indexOf(".") + 1);
  //Getting the css class
  const cssClass = reactClass.map((item, index) =>
    item.slice(pointIndex[index])
  );
  //Filter classes for identical ones
  const filterCssClass = [...new Set(cssClass)];
  //Create a template for using the class in css
  const templateCssClass = filterCssClass.map((item) => `.${item}{}`);
  //Add <br/> so that each class is searched from a new line
  const convertToString = templateCssClass.join("<br />");
  //Insert css classes in the paragraph
  paragraphEl.innerHTML = convertToString;
}

extractBtnEl.addEventListener("click", extractCssClass);

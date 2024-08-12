const resetButton = document.querySelector("#reset-btn");
const textarea = document.querySelector("#markup-textarea");

function resetTextarea() {
  textarea.value = "";
}

resetButton.addEventListener("click", resetTextarea);

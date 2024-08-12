import iziToast from "izitoast";
const pasteButton = document.querySelector("#paste-btn");
const pasteTextarea = document.querySelector("#markup-textarea");

pasteButton.addEventListener("click", function () {
  navigator.clipboard
    .readText()
    .then((text) => {
      pasteTextarea.value = text;
    })
    .catch((err) => {
      console.error(err);
      iziToast.show({
        title: "Hey",
        titleColor: "white",
        message: `Sorry, I couldn't insert your jsx, there was an error: ${err}`,
        messageColor: "white",
        backgroundColor: "red",
        maxWidth: "400px",
        class: "toast",
      });
    });
});

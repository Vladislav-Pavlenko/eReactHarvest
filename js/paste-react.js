import iziToast from "izitoast";
const pasteButton = document.querySelector("#paste-btn");
const pasteTextarea = document.querySelector("#markup-textarea");

pasteButton.addEventListener("click", function () {
  navigator.clipboard
    .readText()
    .then((text) => {
      pasteTextarea.value = text;
      iziToast.show({
        title: "Hey",
        titleColor: "white",
        message: "Your CSS has been successfully copied to the clipboard",
        messageColor: "white",
        backgroundColor: "#07cd0a",
        maxWidth: "400px",
        class: "toast",
      });
    })
    .catch((err) => {
      console.error("Не вдалося вставити текст з буферу обміну: ", err);
      iziToast.show({
        title: "Hey",
        titleColor: "white",
        message: err,
        messageColor: "white",
        backgroundColor: "red",
        maxWidth: "400px",
        class: "toast",
      });
    });
});

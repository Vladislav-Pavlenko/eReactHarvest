const textElement = document.querySelector("#output-window");
const copyBtn = document.querySelector("#copy-btn");

const handleClick = () => {
  const text = textElement.innerText || textElement.textContent;
  navigator.clipboard
    .writeText(text)
    .then(() => {
      // iziToast.show({
      //   title: "Hey",
      //   titleColor: "white",
      //   message: "Your CSS has been successfully copied to the clipboard",
      //   messageColor: "white",
      //   backgroundColor: "#07cd0a",
      //   maxWidth: "400px",
      //   class: "toast",
      // });
    })
    .catch((err) => {
      // iziToast.show({
      //   title: "Hey",
      //   titleColor: "white",
      //   message: err,
      //   messageColor: "white",
      //   backgroundColor: "red",
      //   maxWidth: "400px",
      //   class: "toast",
      // });
    });
};

copyBtn.addEventListener("click", handleClick);

const form = document.getElementById("form");
const input = document.querySelectorAll("input");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (
    input[0].value === "" ||
    input[1].value === "" ||
    input[2].value === "" ||
    input[3].value === ""
  ) {
    document.documentElement.style.setProperty(
      "--input-color",
      "hsl(0, 100%, 74%)"
    );
    input[0].classList.add("info");
    input[1].classList.add("info");
    input[2].classList.add("info");
    input[3].classList.add("info");
  } else {
    document.documentElement.style.setProperty(
      "--input-color",
      "hsl(246, 25%, 77%)"
    );
    input[0].classList.remove("info");
    input[1].classList.remove("info");
    input[2].classList.remove("info");
    input[3].classList.remove("info");
  }
});

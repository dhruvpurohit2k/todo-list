import '../asset/styles/modal.css';

let modal = document.querySelector("dialog");

function createModal() {
  createModalOptions();
}
function createModalOptions() {
  let options = modal.querySelector("#options");
  let optionContainer = document.createElement("ul");
  optionContainer.classList.add("options")
  let optionItem = document.createElement("li");
  optionItem.innerHTML = "TO DO";
  optionContainer.appendChild(optionItem.cloneNode(true));
  optionItem.innerHTML = "Project";
  optionContainer.appendChild(optionItem.cloneNode(true));
  optionItem.innerHTML = "NOTES";
  optionContainer.appendChild(optionItem.cloneNode(true));
  options.appendChild(optionContainer);
}

export { createModal };
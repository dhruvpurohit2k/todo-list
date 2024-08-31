import '../asset/styles/modal.css';

let modal = document.querySelector("dialog");
let selectedpriority = -1;
function createModal() {
  createModalOptions();
  createPriorityitems();
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
function createPriorityitems() {
  let prioritySection = document.querySelector("#priority");
  let button = document.createElement("button");
  button.classList.add("priorityButton");
  button.innerHTML = "LOW";
  prioritySection.appendChild(button.cloneNode(true));
  button.innerHTML = "MID";
  prioritySection.appendChild(button.cloneNode(true));
  button.innerHTML = "HIGH";
  prioritySection.appendChild(button.cloneNode(true));


}
function setButtonPriority() {
  let buttons = modal.querySelectorAll(".priorityButton");

}
export { createModal };
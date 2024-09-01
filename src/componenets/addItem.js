import '../asset/styles/modal.css';

let modal = document.querySelector("dialog");
let selectedpriority = 1;
let selectedoptions = 0;
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
  updateOptions(options.querySelectorAll("li"));
}
function createPriorityitems() {
  let prioritySection = document.querySelector("#priority");
  let button = document.createElement("button");
  button.classList.add("priorityButton");
  button.innerHTML = "LOW";
  prioritySection.appendChild(button.cloneNode(true));
  button.innerHTML = "MID";
  button.classList.add("prioritySelected");
  prioritySection.appendChild(button.cloneNode(true));
  button.innerHTML = "HIGH";
  button.classList.remove("prioritySelected");
  prioritySection.appendChild(button.cloneNode(true));
  setButtonPriority();

}
function setButtonPriority() {
  let buttons = modal.querySelectorAll(".priorityButton");
  buttons.forEach((button, index, buttons) => {
    button.addEventListener("click", () => {
      updatePriority(buttons, index);
    });
  });
}

function updatePriority(buttons, index) {
  buttons[selectedpriority].classList.remove("prioritySelected");
  buttons[index].classList.add("prioritySelected");
  selectedpriority = index;
}

function updateOptions(options) {
  options.forEach((option, index, options) => {
    option.addEventListener("click", () => {
      changeOption(index);
    })
  })
}

function changeOption(index) {
  if (index == 0) { createTodoSection(); }
  if (index == 1) { createProjects(); }
  if (index == 2) { createNotes(); }
}

function createTodoSection() {
  document.querySelector("#priority").classList.remove("hidden");
  let form = document.querySelector("form");
  form.innerHTML = "";
  form.className = "";
  form.classList.add("toDoForm");
  let label = document.createElement("label");
  let input = document.createElement("input");

  label.setAttribute("for", "toDoHeading");
  label.innerHTML = "TO DO : ";
  input.setAttribute("type", "text");
  input.setAttribute("name", "toDoHeading");
  form.appendChild(label.cloneNode(true));
  form.appendChild(input.cloneNode(true));

  label.innerHTML = "Description : ";
  label.setAttribute("for", "toDoDesription");
  let textArea = document.createElement("textarea");
  textArea.setAttribute("name", "toDoDescription");
  textArea.setAttribute("rows", 2);
  textArea.setAttribute("maxlength", 100);
  form.appendChild(label.cloneNode(true));
  form.appendChild(textArea.cloneNode(true));

  label.innerHTML = "Due Date : ";
  label.setAttribute("for", "dueDate");
  input.setAttribute("type", "datetime-local");
  input.setAttribute("name", "dueDate");
  form.appendChild(label.cloneNode(true));
  form.appendChild(input.cloneNode(true));

  let button = document.createElement("button");
  button.innerHTML = "SUBMIT";
  form.appendChild(button);
}

function createProjects() {
  let form = document.querySelector("form");
  form.innerHTML = "";
  form.className = "projectForm";
  let label = document.createElement("label");
  label.setAttribute("for", "projectTitle");
  label.innerHTML = "PROJECT TITLE : "
  let input = document.createElement("input");
  input.setAttribute("name", "projectTitle");
  form.appendChild(label);
  form.appendChild(input);
  let button = document.createElement("button");
  button.innerHTML = "SUBMIT";
  form.appendChild(button);
  document.querySelector("#priority").classList.add("hidden");
}

function createNotes() {
  let form = document.querySelector("form");
  form.innerHTML = "";
  form.className = "notesForm";
  let headding = document.createElement("input");
  headding.placeholder = "Heading...";
  let textarea = document.createElement("textarea");
  form.appendChild(headding);
  form.appendChild(textarea);
  let button = document.createElement("button");
  button.innerHTML = "SUBMIT";
  form.appendChild(button);
  document.querySelector("#priority").classList.add("hidden");
}

export { createModal };
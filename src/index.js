import './style.css';
import { makeToDoCard } from './card';
import { renderHome } from './home';
import { updateSideBar } from './sidebar';

let data = new Array();
let home = document.querySelector("#home");
let makecard = document.querySelector("#createListItem");
let modal = document.querySelector("dialog");
let main = document.querySelector("main");
let modalAddListItem = document.querySelector("#addListItem");
let modalListItems = document.querySelector("#listItems");
let labelCount = 1;
makecard.addEventListener("click", () => {
  modalListItems.innerHTML = "";
  labelCount = 0;
  addModalListItem();
  modal.showModal();


})
modalAddListItem.addEventListener("click", () => {
  addModalListItem();
})

function addModalListItem() {
  let lable = document.createElement("label");
  lable.setAttribute("for", `listItem${++labelCount}`);
  lable.innerHTML = `Item ${labelCount} :`;
  let input = document.createElement("input");
  input.setAttribute("type", "text");
  input.setAttribute("name", `listItem${labelCount}`);
  modalListItems.appendChild(lable);
  modalListItems.appendChild(input);
  modalListItems.scrollTop = modalListItems.scrollHeight;
}
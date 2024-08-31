import './asset/styles/style.css';
import { rederSideBar } from "./componenets/sidebar";
import { createModal } from './componenets/addItem';

rederSideBar();
let createListItem = document.querySelector(".addItemButton");
createModal();
createListItem.addEventListener("click", () => {
  createModal();
})



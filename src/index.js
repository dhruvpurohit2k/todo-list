import './asset/styles/style.css';
import { rederSideBar } from "./componenets/sidebar";
import { createModal } from './componenets/addItem';

rederSideBar();
createModal();
let createListItem = document.querySelector(".addItemButton");
createListItem.addEventListener("click", () => {
})



import './asset/styles/style.css';
import { renderSideBar } from "./componenets/sidebar";
import { createModal, resetModal } from './componenets/addItem';

renderSideBar();
createModal();

document.addEventListener("keydown", (e) => {
  if (e.key == "Escape") {
    e.preventDefault();
    resetModal();
    document.querySelector("dialog").classList.add("hidden");
  }
  if (e.key == "Enter") {
    e.preventDefault();
  }
})



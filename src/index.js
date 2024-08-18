import './style.css';
import { makeToDoCard } from './card';
import { renderHome } from './home';
import { updateSideBar } from './sidebar';

let data = new Array();
let makecard = document.querySelector("#createListItem");
let modal = document.querySelector("dialog");
let main = document.querySelector("main");
let anEntery = {
  "title": "List item",
  "description": "This is a test list",
  "dueDate": "Tomorrow",
  "items": [
    "Item1",
    "Item1",
    "Item1",
    "Item1",
    "Item1",
  ]
}
let anEntery2 = {
  "title": "List item2",
  "description": "This is a test list",
  "dueDate": "Tomorrow",
  "items": [
    "Item1",
    "Item1",
    "Item1",
    "Item1",
    "Item1",
  ]
}

let Entries = [anEntery, anEntery2];
updateSideBar(Entries);
// renderHome(Entries);

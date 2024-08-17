import './style.css';
import { makeToDoCard } from './card';


let data = new Array();

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

let card = makeToDoCard(anEntery);

let main = document.querySelector("main");
main.appendChild(card);


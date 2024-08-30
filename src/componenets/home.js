import { makeToDoCard } from "./card";
export function renderHome(ListOfEntries) {
  let main = document.querySelector("main");
  main.innerHTML = "";
  ListOfEntries.forEach(entry => {
    let card = makeToDoCard(entry);
    main.appendChild(card);
  });
}
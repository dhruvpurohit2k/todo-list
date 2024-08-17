function makeToDoCard(details) {
  let card = document.createElement("div");
  let title = document.createElement("p");
  title.classList.add("title");
  let description = document.createElement("p");
  description.classList.add("description");
  let duedate = document.createElement("p");
  duedate.classList.add("duedate");
  title.innerHTML = details.title;
  description.innerHTML = details.description;
  duedate.innerHTML = details.dueDate;
  card.classList.add("card");
  card.appendChild(title);
  card.appendChild(description);
  card.appendChild(duedate);
  return card;
}

export { makeToDoCard }
import '../asset/styles/sidebar.css'
import { projects } from './data';
let upcomingSection = ["TODAY", "TOMORROW", "THIS WEEK"];
function renderSideBar() {
  let sidebar = document.querySelector("sidebar");
  sidebar.innerHTML = "";
  makeUpcoming(sidebar);
  makeProject(sidebar);
  makeNotes(sidebar);
  projectsView(sidebar);
  let add = document.createElement("button");
  add.innerHTML = "ADD ITEM";
  add.classList.add("addItemButton");
  sidebar.append(add);
  add.addEventListener("click", () => {
    document.querySelector("dialog").classList.remove("hidden");
  })
}
function makeUpcoming(sidebar) {
  let listcontainer = document.createElement("ul");
  listcontainer.classList.add("upcoming");
  let listItem = document.createElement("li");
  upcomingSection.forEach((item) => {
    listItem.innerHTML = item;
    listcontainer.appendChild(listItem.cloneNode(true));
  })
  sidebar.appendChild(listcontainer);
}
function makeProject(sidebar) {
  let sectionHeading = document.createElement("p");
  sectionHeading.classList.add("sectionHeading");
  sectionHeading.innerText = "PROJECTS";
  let listcontainer = document.createElement("ul");
  listcontainer.classList.add("projects");
  let listItem = document.createElement("li");
  projects.forEach((item) => {
    listItem.innerHTML = item.name;
    listcontainer.appendChild(listItem.cloneNode(true));
  })
  sidebar.append(sectionHeading);
  sidebar.appendChild(listcontainer);
}

function makeNotes(sidebar) {
  let notes = document.createElement("p");
  notes.classList.add("notes");
  notes.innerHTML = "NOTES";
  sidebar.appendChild(notes);
}

function projectsView(sidebar) {
  let projects = sidebar.querySelectorAll(".projects li");
  projects.forEach((project) => {
    project.addEventListener("click", () => {
      console.log(project.innerHTML);
    })
  })
}
export { renderSideBar }
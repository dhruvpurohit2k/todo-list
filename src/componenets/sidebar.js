import '../asset/styles/sidebar.css'

let upcomingSection = ["TODAY", "TOMORROW", "THIS WEEK"];
let projects = ["TODO-LIST-SITE"];
function rederSideBar() {
  let sidebar = document.querySelector("sidebar");
  makeUpcoming(sidebar);
  makeProject(sidebar);
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
    listItem.innerHTML = item;
    listcontainer.appendChild(listItem.cloneNode(true));
  })
  sidebar.append(sectionHeading);
  sidebar.appendChild(listcontainer);
}
export { rederSideBar }
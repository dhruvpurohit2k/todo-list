export function updateSideBar(Entries) {
  let sidebaritems = document.querySelector("#sidebaritems");
  Entries.forEach(element => {
    let li = document.createElement("li");
    li.innerText = element.title;
    sidebaritems.appendChild(li);
  });
}
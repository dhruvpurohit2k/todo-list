export function updateSideBar(Entries) {
  let sidebaritems = document.querySelector("#sidebaritems");
  Entries.forEach(element => {
    let li = document.createElement("li");
    li.innerText = element.title;
    sidebaritems.appendChild(li.cloneNode(true));
    sidebaritems.appendChild(li.cloneNode(true));
    sidebaritems.appendChild(li.cloneNode(true));
    sidebaritems.appendChild(li.cloneNode(true));
  });
  addListenerToSideBar(sidebaritems);
}

function addListenerToSideBar(sidebar) {
  let Items = sidebar.querySelectorAll("li");
  Items.forEach(ele => {
    ele.addEventListener("click", () => {
      alert("Clicked item" + ele.innerText)
    });
  })
}
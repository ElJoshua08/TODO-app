// Elements
const list_template = document.querySelector("#list_template").content;
const list_clone = document.importNode(list_template, true);

const item_template = document.querySelector("#item_template");
const item_clone = document.importNode(item_template.content, true);

const add_list_btn = document.querySelector(".add-list");
const adding_container = document.querySelector(".adding");
const typing_container = document.querySelector(".typing");

// Variables
const lists = [];

// Functions
function getListContent(list) {
  let list_content = list.firstElementChild.children[1];
  return list_content;
}

add_list_btn.addEventListener("click", function () {
  adding_container.classList.remove("active");
  typing_container.classList.add("active");

  typing_container.lastElementChild.addEventListener("click", addNewList);
});

function addNewList() {
  const newList = list_clone.firstElementChild.cloneNode(true);

  newList.lastElementChild.addEventListener("click", function() {
    addNewItem(newList)
  })

  newList.firstElementChild.children[0].innerHTML =
  typing_container.firstElementChild.value;

  add_list_btn.classList.remove("active");
  document.body.appendChild(newList);
  lists.push(newList);
}

function addNewItem(list) {
  const newItem = item_clone.firstElementChild.cloneNode(true)
  const list_content = list.firstElementChild.children[1]

  list_content.appendChild(newItem)

  console.log(list_content)
}

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

// This adds a click listener to the add icon in the input box
typing_container.lastElementChild.addEventListener("click", addNewList);

adding_container.addEventListener("click", function () {
  // This toggles between the click box and the input box
  typing_container.classList.add("active");
  typing_container.querySelector(".add-list-input").focus()
  adding_container.classList.remove("active");
});

// This functions creates a new list with the input box name
function addNewList() {
  // Creates the list clone
  const newList = list_clone.firstElementChild.cloneNode(true);
  const list_name = newList.querySelector(".list-name");
  const add_task_button = newList.querySelector(".add-item-button");
  const add_task_check = newList.querySelector(".add-item-check");

  console.log(add_task_button);

  // Sets the list title to the value of the input in the input box
  list_name.innerHTML = typing_container.firstElementChild.value;

  // Adds and event listener to the task adder button in the list
  add_task_button.addEventListener("click", function () {
    addNewItemClick(newList);
  });

  add_task_check.addEventListener("click", function () {
    addNewItemType(newList);
  });

  // Inserts the list into the DOM
  document.body.appendChild(newList);

  // Makes the list visible after 1 second
  setTimeout(() => {
    newList.classList.add("active");
  }, 500);

  // Hides the input box
  typing_container.classList.remove("active");

  // Adds the list to the lists array
  lists.push(newList);
}

function addNewItemClick(list) {
  // Targets all the elements
  const add_item_adding = list.querySelector(".add-item-adding");
  const add_item_typing = list.querySelector(".add-item-typing");
  const add_item_input = list.querySelector(".add-item-input");
  add_item_input.focus();


  add_item_adding.classList.remove("active");
  add_item_typing.classList.add("active");
}

function addNewItemType(list) {
  // Targets all the elements
  const newItem = item_clone.firstElementChild.cloneNode(true);
  const add_item_adding = list.querySelector(".add-item-adding");
  const add_item_typing = list.querySelector(".add-item-typing");
  const add_item_input = list.querySelector(".add-item-input");
  add_item_input.focus()

  const list_content = list.querySelector(".list-content");
  const itemName = newItem.querySelector(".item-name");

  const item_check_btn = newItem.querySelector(".check");
  const item_delete_btn = newItem.querySelector(".delete");

  // Sets the item name to the input value
  // if it is not empty, otherwise sets an error message instead
  if (add_item_input.value != "") {
    itemName.innerHTML = add_item_input.value;
    list_content.appendChild(newItem);
    add_item_input.value = "";
  } else {
    alert("You need to put a name");
    return;
  }

  item_check_btn.addEventListener("click", function () {
    checkItem(newItem);
  });
  item_delete_btn.addEventListener("click", function () {
    deleteItem(list, newItem);
  });

  add_item_adding.classList.add("active");
  add_item_typing.classList.remove("active");
}

function checkItem(item) {
  const check_btn = item.querySelector(".check")

  console.log(check_btn)

  if (check_btn.classList.contains("fa-check")) {
    check_btn.classList.remove("fa-check");
    check_btn.classList.add("fa-x");
  } else {
    check_btn.classList.add("fa-check");
    check_btn.classList.remove("fa-x");
  }
  item.classList.toggle("checked");
}

function deleteItem(list, item) {
  const list_content = list.querySelector(".list-content");

  list_content.removeChild(item);
}

// Elements
const list_template = document.querySelector("#list_template").content;
const list_clone = document.importNode(list_template, true);

const item_template = document.querySelector("#item_template");
const item_clone = document.importNode(item_template.content, true);

const add_list_btn = document.querySelector(".add-list");
const adding_container = document.querySelector(".adding");
const typing_container = document.querySelector(".typing");

const root = document.documentElement;

// Variables
const lists = [];
let list_color = 1;

// This adds a click listener to the add icon in the input box
adding_container.addEventListener("click", function () {
  toggleAddContainer();
  pickListColor();
});

typing_container
  .querySelector(".add-list-button")
  .addEventListener("click", addNewList);

// Toggle between click and input container
function toggleAddContainer() {
  // This toggles between the click box and the input box
  typing_container.classList.add("active");
  typing_container.querySelector(".add-list-input").focus();
  adding_container.classList.remove("active");
}

// This chooses the list color
function pickListColor() {
  const list_color_buttons = typing_container.querySelectorAll(".color");

  list_color_buttons.forEach((button) => {
    button.addEventListener("click", function () {
      list_color_buttons.forEach((button_2) => {
        button_2.classList.remove("active");
      });
      this.classList.add("active");

      list_color = this.dataset.color;
      setListColor();
    });
  });
}

function setListColor() {
  if (list_color == 1) {
    // Verde pistacho
    root.style.setProperty("--item", "#8baa7f");
    root.style.setProperty("--item-check", "#81cd64");
    root.style.setProperty("--item-edit", "#649751");
    root.style.setProperty("--item-edit-shadow", "#4d6f40");
    root.style.setProperty("--card-background", "#aebda9");
    root.style.setProperty("--card-shadow", "#708768");
    root.style.setProperty("--button-container", "#2a6912");
    root.style.setProperty("--add", "#4ff00");
    root.style.setProperty("--check", "#b5f99b");
    root.style.setProperty("--edit", "#bdff1e");
    root.style.setProperty("--delete", "#bd7100");
    root.style.setProperty("--text", "#ffffff");
    root.style.setProperty("--placeholder", "#d5d39b");
    root.style.setProperty("--add-item", "#43513e");
  } else if (list_color == 2) {
    // Azul turquesa
    root.style.setProperty("--item", "#2dc3d6");
    root.style.setProperty("--item-check", "#00e2ff");
    root.style.setProperty("--item-edit", "#129cad");
    root.style.setProperty("--item-edit-shadow", "#005f6b");
    root.style.setProperty("--card-background", "#a1e8f1");
    root.style.setProperty("--card-shadow", "#63b7c1");
    root.style.setProperty("--button-container", "#086e7b");
    root.style.setProperty("--add", "#bcffff0");
    root.style.setProperty("--check", "#00ffc9");
    root.style.setProperty("--edit", "#ffffff");
    root.style.setProperty("--delete", "#00a394");
    root.style.setProperty("--text", "#ffffff");
    root.style.setProperty("--placeholder", "#9bffe3");
    root.style.setProperty("--add-item", "#026d7b");
  } else if (list_color == 3) {
    // Morado claro
    root.style.setProperty("--item", "#9e4ea3");
    root.style.setProperty("--item-check", "#bb7dc0");
    root.style.setProperty("--item-edit", "#862b92");
    root.style.setProperty("--item-edit-shadow", "#005f6b");
    root.style.setProperty("--card-background", "#e1cee2");
    root.style.setProperty("--card-shadow", "#c6aadb");
    root.style.setProperty("--button-container", "#086e7b");
    root.style.setProperty("--add", "#bcffff0");
    root.style.setProperty("--check", "#ff00cf");
    root.style.setProperty("--edit", "#eb85ff");
    root.style.setProperty("--delete", "#9100a3");
    root.style.setProperty("--text", "#ffffff");
    root.style.setProperty("--placeholder", "#c167b2");
    root.style.setProperty("--add-item", "#570d70");
  } else if (list_color == 4) {
    // Naranja claro
    root.style.setProperty("--item", "#e66f43");
    root.style.setProperty("--item-check", "#ee8813");
    root.style.setProperty("--item-edit", "#a75c0f");
    root.style.setProperty("--item-edit-shadow", "#a13504");
    root.style.setProperty("--card-background", "#ffa46f");
    root.style.setProperty("--card-shadow", "#dd8551");
    root.style.setProperty("--button-container", "#bb420a");
    root.style.setProperty("--add", "#ffb1370");
    root.style.setProperty("--check", "#ff8800");
    root.style.setProperty("--edit", "#ffc889");
    root.style.setProperty("--delete", "#d78321");
    root.style.setProperty("--text", "#ffffff");
    root.style.setProperty("--placeholder", "#c77630");
    root.style.setProperty("--add-item", "#95350a");
  } else if (list_color == 5) {
    // Gris
    root.style.setProperty("--item", "#a3a3a3");
    root.style.setProperty("--item-check", "#e7e7e7");
    root.style.setProperty("--item-edit", "#707070");
    root.style.setProperty("--item-edit-shadow", "#3b3b3b");
    root.style.setProperty("--card-background", "#c9c9c9");
    root.style.setProperty("--card-shadow", "#7d7d7d");
    root.style.setProperty("--button-container", "#373737");
    root.style.setProperty("--add", "#ffffff0");
    root.style.setProperty("--check", "#ffffff");
    root.style.setProperty("--edit", "#c7c7c7");
    root.style.setProperty("--delete", "#777777");
    root.style.setProperty("--text", "#ffffff");
    root.style.setProperty("--placeholder", "#ababab");
    root.style.setProperty("--add-item", "#434343");
  } else if (list_color == 6) {
    // Rosa
    root.style.setProperty("--item", "#f50087");
    root.style.setProperty("--item-check", "#fd6c9e");
    root.style.setProperty("--item-edit", "#b91e79");
    root.style.setProperty("--item-edit-shadow", "#932064");
    root.style.setProperty("--card-background", "#ffb5cd");
    root.style.setProperty("--card-shadow", "#bb7f92");
    root.style.setProperty("--button-container", "#9b0350");
    root.style.setProperty("--add", "#fffff0");
    root.style.setProperty("--check", "#fb3fb6");
    root.style.setProperty("--edit", "#c34497");
    root.style.setProperty("--delete", "#ff0000");
    root.style.setProperty("--text", "#ffffff");
    root.style.setProperty("--placeholder", "#ff5caf");
    root.style.setProperty("--add-item", "#831054");
  }
}

// This functions creates a new list with the input box name
function addNewList() {
  // Targets all the elements
  const newList = list_clone.firstElementChild.cloneNode(true);
  const list_name = newList.querySelector(".list-name");
  const typing_container_input =
    typing_container.querySelector(".add-list-input");

  const add_task_button = newList.querySelector(".add-item-button");

  const list_edit_button = newList.querySelector(".list-edit");
  const list_edit_input = newList.querySelector(".list-edit-input");
  const delete_list_button = newList.querySelector(".list-delete");

  const add_task_check = newList.querySelector(".add-item-check");
  const add_item_input = newList.querySelector(".add-item-input");

  // Sets the list title to the value of the input in the input box
  // Everything else is under this condition cuz the card actives even
  // When the condition isnt true
  if (typing_container_input.value != "") {
    list_name.innerHTML = typing_container_input.value;

    // Sets the list color to the value of the list color picker
    newList.dataset.color = list_color;

    console.log(newList.dataset.color);

    // Adds and event listener to the task adder button in the list
    add_task_button.addEventListener("click", function () {
      addNewItemClick(newList);
      add_item_input.focus();
    });

    add_task_check.addEventListener("click", function () {
      addNewItemType(newList);
    });

    // Edit list name on button click
    list_edit_button.addEventListener("click", function () {
      editList(newList);
      list_edit_input.focus();
    });

    // Deletes the list on button click
    delete_list_button.addEventListener("click", function () {
      deleteList(newList);
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
  } else {
    alert("You need to put a valid name");
    typing_container_input.focus();
  }
}

// Edits list name and colors on click
function editList(list) {
  const list_edit_container = list.querySelector(".list-edit-container");
  const list_edit_button = list.querySelector(".list-edit-button");
  const list_edit_input = list.querySelector(".list-edit-input");
  const list_name = list.querySelector(".list-name");

  list_edit_input.value = list_name.innerHTML;

  list.style.transform = `translateY(${list_edit_container.offsetHeight}px)`;
  list_edit_container.classList.add("active");

  list_edit_button.addEventListener("click", function () {
    if (!list_edit_input.value) {
      alert("you need to put a valid name");
    } else {
      list_name.innerHTML = list_edit_input.value;
      list_edit_container.classList.remove("active");

      setTimeout(() => {
        list.style.transform = `translateY(0px)`;
      }, 2000);
    }
  });
}

// Deltes the list from the doom and from the array
function deleteList(list) {
  list.style.animation = "listDelete 2.4s ease";

  setTimeout(() => {
    document.body.removeChild(list);
  }, 2400);

  lists.pop();

  if (!list) {
  }
}

// Add new items on click
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
  add_item_input.focus();

  const list_content = list.querySelector(".list-content");
  const itemName = newItem.querySelector(".item-name");

  const item_check_btn = newItem.querySelector(".check");
  const item_edit_btn = newItem.querySelector(".edit");
  const item_edit_input = newItem.querySelector(".edit-item-input");
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

  //Checks the item when clicking the check button
  item_check_btn.addEventListener("click", function () {
    checkItem(newItem);
  });

  // Edits item when clicking the edit button
  item_edit_btn.addEventListener("click", function () {
    editItem(newItem);
    item_edit_input.focus();
  });

  // Deletes item when clicking the delete button
  item_delete_btn.addEventListener("click", function () {
    deleteItem(list, newItem);
  });

  add_item_adding.classList.add("active");
  add_item_typing.classList.remove("active");
}

function checkItem(item) {
  const check_btn = item.querySelector(".check");

  if (check_btn.classList.contains("fa-check")) {
    check_btn.classList.remove("fa-check");
    check_btn.classList.add("fa-x");
  } else {
    check_btn.classList.add("fa-check");
    check_btn.classList.remove("fa-x");
  }
  item.classList.toggle("checked");
}

function editItem(item) {
  const edit_item_container = item.querySelector(".edit-item-container");
  const edit_item_check_btn = item.querySelector(".edit-item-button");
  const edit_item_input = item.querySelector(".edit-item-input");
  const item_name = item.querySelector(".item-name");

  edit_item_input.value = item_name.innerHTML;

  edit_item_container.classList.add("active");

  edit_item_check_btn.addEventListener("click", function () {
    if (!edit_item_input.value) {
      alert("Please enter a valid name");
    } else {
      item_name.innerHTML = edit_item_input.value;
      edit_item_container.classList.remove("active");
    }
  });
}

function deleteItem(list, item) {
  const list_content = list.querySelector(".list-content");

  item.style.animation = "itemDisappear 1.3s ease";
  item.style.animationFillMode = "forwards";

  setTimeout(() => {
    list_content.removeChild(item);
  }, 1250);
}

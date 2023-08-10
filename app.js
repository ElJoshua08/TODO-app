const list_items = document.getElementById("list-container");
const add_item = document.getElementById("item-add");

const body = document.querySelector("body");

add_item.addEventListener("click", addItem);

console.log(document);

function addItem() {
  let item = document.createElement("li");
  let input = document.createElement("input");
  input.placeholder = "Write new task here";
  let text = document.createElement("h1");
  let btns = document.createElement("div");
  let check = document.createElement("i");
  let uncheck = document.createElement("i");
  let end_write = document.createElement("i");

  item.classList.add("item", "task_write");

  input.classList.add("task_input");

  end_write.classList.add("fa-solid", "fa-check", "btn", "end_task__btn");

  check.classList.add("fa-solid", "fa-check");
  check.id = "done";

  check.addEventListener("click", checkFunc);
  uncheck.addEventListener("click", deleteItemFunc);

  uncheck.classList.add("fa-solid", "fa-trash");
  uncheck.id = "undone";

  btns.appendChild(check);
  btns.appendChild(uncheck);

  btns.classList.add("btns");

  if (item.classList.contains("task_write")) {
    item.appendChild(input);
    item.appendChild(end_write);

    end_write.onclick = (e) => {
      item.classList.remove("task_write");
      text.innerHTML = input.value;
      item.appendChild(text);
      item.appendChild(btns);

      if (text.scrollWidth > item.clientWidth - 115) {
        text.classList.add("scroll");
      }

      item.removeChild(input);
      item.removeChild(end_write);
    };
  }

  list_items.appendChild(item);
}

function checkFunc() {
  let item = this.parentElement.parentElement;
  item.classList.add("complete");
}

function deleteItemFunc() {
  let item = this.parentElement.parentElement;
  let items_container = item.parentElement;

  if (item.classList.contains("complete")) {
    item.classList.remove("complete");
  } else {
    items_container.removeChild(item);
  }
}

// Toggle theme
let theme_state = 0;

function changeTheme() {
  if (theme_state == 0) {
    body.classList.replace("light_theme", "dark_theme");
    theme_state = 1;
  } else {
    body.classList.replace("dark_theme", "light_theme");
    theme_state = 0;
  }
}

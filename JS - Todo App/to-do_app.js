(function () {
  function createAppTitle(title) {
    let appTitle = document.createElement('h2');
    appTitle.innerHTML = title;
    return appTitle
  }

  function createTodoItemForm() {
    let form = document.createElement('form');
    let input = document.createElement('input');
    let buttonWrapper = document.createElement('div');
    let button = document.createElement('button');

    form.classList.add('input-group', "mb-3");
    input.classList.add('form-control');
    input.placeholder = "Введите название дела";
    buttonWrapper.classList.add('input-group-append');
    button.classList.add('btn', 'btn-primary');
    button.textContent = 'Добавить дело';
    button.disabled = true;
    
    buttonWrapper.append(button);
    form.append(input);
    form.append(buttonWrapper);

    return {
      form,
      input,
      button
    };
  }

  function createTodoList() {
    let list = document.createElement('ul');
    list.classList.add('list-group');
    return list;
  }

  // Clear Button (optional)
  document.getElementById('clear-storage').addEventListener('click', function () {
  localStorage.clear()
  window.location.reload()
  })

  // Setting local storage
  let localStorageArray = []

  function createTodoItem(name, state, pageURL) {
    let item = document.createElement('li');
    let buttonGroup = document.createElement('div');
    let doneButton = document.createElement('button');
    let deleteButton = document.createElement('button');

    item.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
    item.textContent = name;

    buttonGroup.classList.add('btn-group', 'btn-grup-sm');
    doneButton.classList.add('btn', 'btn-success')
    doneButton.textContent = "Готово";
    deleteButton.classList.add('btn', 'btn-danger');
    deleteButton.textContent = "Удалить";

    buttonGroup.append(doneButton)
    buttonGroup.append(deleteButton);
    item.append(buttonGroup)

    if (state == true) {
      item.classList.add("list-group-item-success");
    }

    // Adding item to LS
    localStorageArray.push({name:name, state: state})
    localStorage.setItem(JSON.stringify(pageURL), JSON.stringify(localStorageArray));

    // Adding buttons functionality
   (function (key) {
      doneButton.addEventListener('click', function() {
        item.classList.toggle('list-group-item-success')
        for (let i in localStorageArray) {
          if (localStorageArray[i].name == key) {
            let splicedPiece = localStorageArray.splice(i,1)
            localStorageArray.splice(i, 0, {name: splicedPiece[0].name, state: !splicedPiece[0].state})
            localStorage.setItem(JSON.stringify(pageURL), JSON.stringify(localStorageArray));
          } 
        }
      });
      deleteButton.addEventListener('click', function () {

        if (confirm('Вы уверены')) {     
          for (let i in localStorageArray) {
            if (localStorageArray[i].name == name) {
              localStorageArray.splice(i,1)
            }
            localStorage.setItem(JSON.stringify(document.URL), JSON.stringify(localStorageArray));
          }
          item.remove();
        }
      })
    }(name))

    return {
      item,
      doneButton,
      deleteButton
    }
  }

  function appTodo(container, title, casesList, pageURL) {
    let todoAppTitle = createAppTitle(title);
    let todoItemForm = createTodoItemForm();
    let todoList = createTodoList();

    container.append(todoAppTitle);
    container.append(todoItemForm.form)
    container.append(todoList);

    // Button disabled

    todoItemForm.input.addEventListener('input', () => {
      if (todoItemForm.input.value.length == 0) {
        todoItemForm.button.disabled = true;
      } else {
        todoItemForm.button.disabled = false;
      }
    })
    
    if (localStorage.getItem(JSON.stringify(pageURL))) {
      let takeLocalStorageArray = JSON.parse(localStorage.getItem(JSON.stringify(pageURL)))
      for ( var i = 0, len = takeLocalStorageArray.length; i < len; ++i ) {
        let addItemFromLocalStorage = createTodoItem(takeLocalStorageArray[i].name, takeLocalStorageArray[i].state, pageURL)
        todoList.append(addItemFromLocalStorage.item);
      }
    } else if (localStorage.getItem(JSON.stringify(pageURL)) == null) {
      for (let caseItem in casesList) {
        let addCase = createTodoItem(casesList[caseItem].name, casesList[caseItem].state, pageURL)
        todoList.append(addCase.item)
      }
    }

    todoItemForm.form.addEventListener('submit', function(e) {
      e.preventDefault();

      if (!todoItemForm.input.value) {
        return
      }

      let todoItem = createTodoItem(todoItemForm.input.value, false, pageURL)

      todoList.append(todoItem.item)

      todoItemForm.input.value = '';
      todoItemForm.button.disabled = true;

    })
    
  }
  window.appTodo = appTodo;

})();
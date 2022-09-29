import "./style.css";
const DisplayItems = document.querySelector('.DisplayItems');
const Items = document.querySelector('.NewItem');
const ItemsContainer = [
  {
    id: 1,
    Description: 'Play FootBall',
    Completed: false,
  },
  {
    id: 2,
    Description: 'Watch Movies',
    Completed: false,
  },
  {
    id: 3,
    Description: 'Go for Party',
    Completed: false,
  },
  {
    id: 4,
    Description: 'morining section meeting',
    Completed: false,
  },
];
const Validate = () => {
  if (Items.value !== '') {
    return true;
  }
  return false;
};
const ShowAllItems = () => {
  DisplayItems.innerHTML = '';
  ItemsContainer.forEach((item, index) => {
    DisplayItems.innerHTML += `
       <div class="TodoList">
       <div class="form">
    <input type="checkbox" placeholder="..." class="cancelItem" id="${index}"> 
    <input type="text" class="list-items" value="${item.Description}" id="${index}">
   </div>
   <span class="RemoveItems" button id="${index}"><i  id="del+${index}" class="fa fa-trash" class="del" name="del" aria-hidden="true"></i><i id="edit+${index}" class="fas fa-ellipsis-v"></i></span>
   </div>
           `;
  });
};
const ShowItems = () => {
  DisplayItems.innerHTML = '';
  ItemsContainer.forEach((item, index) => {
    DisplayItems.innerHTML += `
       <div class="TodoList">
       <div class="form">
    <input type="checkbox" placeholder="..." class="cancelItem" id="${index}"> 
    <input type="text" class="list-items" value="${item.Description}" id="${index}">
   </div>
   <span class="RemoveItems" button id="${index}"><i  id="del+${index}" class="fa fa-trash" class="del" name="del" aria-hidden="true"></i><i id="edit+${index}" class="fas fa-ellipsis-v"></i></span>
   </div>
           `;
  });
};
const DisplayAllItems = () => {
  Items.addEventListener('keypress', (event) => {
    if (event.key == 'Enter') {
      if (Validate()) {
        ShowItems();
      }
    }
  });
};
const ChangeColor = () => {
  document.querySelectorAll('.list-items').forEach((container) => {
    container.addEventListener('focus', (event) => {
      document.querySelectorAll('.TodoList').forEach((Item, index) => {
        if (event.target.id === index) {
          Item.style.background = 'lightyellow';
          document.getElementById(`del+${index}`).style.visibility = 'visible';
          document.getElementById(`edit+${index}`).style.visibility = 'hidden';
        }
      });
    });
  });
  document.querySelectorAll('.list-items').forEach((container) => {
    container.addEventListener('focusout', (event) => {
      document.querySelectorAll('.TodoList').forEach((Item, index) => {
        if (event.target.id == index) {
          Item.style.background = 'white';
          document.getElementById(`del+${index}`).style.visibility = 'hidden';
          document.getElementById(`edit+${index}`).style.visibility = 'visible';
        }
      });
    });
  });
};

DisplayAllItems();
ShowAllItems();
ChangeColor();
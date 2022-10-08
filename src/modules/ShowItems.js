const DisplayItems=document.querySelector('.DisplayItems')
let ItemsContainer=[]

export default  function ShowItems() {
   //window.location.reload();
    DisplayItems.innerHTML='';
    const AllItems=JSON.parse(localStorage.getItem('Todo'))
    ItemsContainer=AllItems;
    AllItems.forEach((item,index) =>  {
      DisplayItems.innerHTML+= `
      <div class="TodoList">
      <div class="form">
   <input type="checkbox" placeholder="..." class="cancelItem" id="${index}" data-completed="${item.Completed}"> 
   <input type="text" class="list-items" value="${item.Description}" id="${index}" data-completed="${item.Completed}">
  </div>
  <span class="RemoveItems" button id="${index}"><i  id="del+${index}" class="fa fa-trash" class="del" name="del" aria-hidden="true"></i><i id="edit+${index}" class="fas fa-ellipsis-v"></i></span>
  </div>
          `  
      
     });   

 }
 
const ShowComplete = () =>{
   const ListItems=JSON.parse(localStorage.getItem('Todo'))
   ListItems.forEach((item)=>{
if(item.Completed){
    document.querySelectorAll('[data-completed="true"]').forEach((Item)=>{
        Item.style.textDecoration = "line-through";
        Item.checked=true
    })
}
   })
  }


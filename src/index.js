import "./style.css";
const DisplayItems=document.querySelector('.DisplayItems')
const GetItems=localStorage.getItem('Todo')
const DeleteItem=document.querySelectorAll('.RemoveItems')
// const DeleteItems=document.querySelector('.')
const Items=document.querySelector('.NewItem')
let ItemsContainer=[]
let holdItems={}

const Validate = () => {
if(Items.value !==''){
   return true;
}else{
   return false;
}
}

const ShowAllItems = () =>{
   DisplayItems.innerHTML='';
   if(GetItems !== null){
    const AllItems=JSON.parse(localStorage.getItem('Todo'))
    ItemsContainer=AllItems;
    AllItems.forEach((item,index) => {
       DisplayItems.innerHTML+= `
       <div class="TodoList">
       <div class="form">
    <input type="checkbox" placeholder="..." class="cancelItem" id="${index}"> 
    <input type="text" class="list-items" value="${item.Description}" id="${index}">
   </div>
   <span class="RemoveItems" button id="${index}"><i  id="del+${index}" class="fa fa-trash" class="del" name="del" aria-hidden="true"></i><i id="edit+${index}" class="fas fa-ellipsis-v"></i></span>
   </div>
           `  
    });
   }else{
       []
   }
}

const ShowItems = () => {
   window.location.reload();
   DisplayItems.innerHTML='';
   const AllItems=JSON.parse(localStorage.getItem('Todo'))
   ItemsContainer=AllItems;
   ItemsContainer.forEach((item,index) => {
   DisplayItems.innerHTML+= `
   <div class="TodoList">
   <div class="form">
<input type="checkbox" placeholder="..." class="cancelItem" id="${index}"> 
   <input type="text" class="list-items" value="${item.Description}" id="${index}">
</div>
   <span class="RemoveItems" button id="${index}"><i  id="del+${index}" class="fa fa-trash" aria-hidden="true"></i><i id="edit+${index}" class="fas fa-ellipsis-v"></i></span>
</div>` 
    });   
}

  


const SaveItems= ()=>{
holdItems = {
id:1,
Description:Items.value,
Completed:false
}
ItemsContainer.push(holdItems)
localStorage.setItem('Todo',JSON.stringify(ItemsContainer))
}

const DisplayAllItems = () =>{
   Items.addEventListener('keypress',(event)=>{
   if(event.key == 'Enter'){
       if(Validate()){
           SaveItems();
           ShowItems();
   }
   }
   })
}




DisplayAllItems();
ShowAllItems();
RemoveItem()
CancelTask()
UncheckTask()
ClearAllCompletedTask();
ChangeColor()
EditItems();


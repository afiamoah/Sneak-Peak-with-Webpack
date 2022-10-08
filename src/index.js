import "./style.css";
import {CompletedTrue ,CompletedFalse } from "./modules/ClearItems.js"
import {SortItems} from "./modules/idGenerator.js"
import EditItems from "./modules/EditTodo.js"
import ShowItems  from "./modules/ShowItems.js"

const DisplayItems=document.querySelector('.DisplayItems')
const GetItems=localStorage.getItem('Todo')
const DeleteItem=document.querySelectorAll('.RemoveItems')
// const DeleteItems=document.querySelector('.')
const Items=document.querySelector('.NewItem')
let ItemsContainer=[]
let holdItems={}
let Index=1
let count=1;
const Validate = () => {
if(Items.value !==''){
   return true;
}else{
   return false;
}
}

const GetCount = () => {
    const getCount = JSON.parse(localStorage.getItem('Todo'));
    if(getCount != null){
    count=count+getCount.length      
      return count;
    }else{
    count=Index;       
    }
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

const ShowAllItems = () =>{
   DisplayItems.innerHTML='';
   if(GetItems !== null){
    const AllItems=JSON.parse(localStorage.getItem('Todo'))
    ItemsContainer=AllItems;
    AllItems.forEach((item,index) => {
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
    
   }else{
       []
   }
}



const SaveItems= ()=>{
GetCount();
holdItems = {
id:count,
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
        window.location.reload()
           SaveItems();
           ShowItems();
   }
   }
   })
}


const RemoveItem= () =>{ 
   document.querySelectorAll('.RemoveItems').forEach((itemtoRemove)=>{
       itemtoRemove.addEventListener('click',(event)=>{
       const SelectedItem=event.target.id;
       const MyItems=ItemsContainer.filter((List,index)=>{
           if(SelectedItem != index){
           return List
           }
       })
       localStorage.setItem('Todo',JSON.stringify(MyItems))
       SortItems()
       ShowItems();
    window.location.reload();
       })
   })  
}





const CancelTask= () =>{  
document.querySelectorAll('.cancelItem').forEach((cancelledItem)=>{
cancelledItem.addEventListener('change',(event)=>{
   const SelectedItem=event.target.id;
   if(event.target.checked){
   document.querySelectorAll('.list-items').forEach((Item,index)=>{
   if(event.target.id == index){
   Item.style.textDecoration = "line-through"; 
   CompletedTrue(event)
   }
   })   
   };
   })
   })
   }

const UncheckTask= () =>{  
   document.querySelectorAll('.cancelItem').forEach((cancelledItem)=>{
   cancelledItem.addEventListener('change',(event)=>{
       const SelectedItem=event.target.id;
       if(!event.target.checked){
           document.querySelectorAll('.list-items').forEach((Item,index)=>{
           if(event.target.id == index){               
           Item.style.textDecoration = "none"; 
           CompletedFalse(event)      
   }
   })   
   };
   })
   })
   }

const ClearAllCompletedTask = () =>{
document.querySelector('.ClearAll').addEventListener('click',() =>{
   const AllList=JSON.parse(localStorage.getItem('Todo'));
   const MyItems=AllList.filter((List)=>{
       if(List.Completed !=true){
       return List
       }
   })
   localStorage.setItem('Todo',JSON.stringify(MyItems))
    SortItems();
   ShowItems();
   document.querySelector('.ClearAll').style.textDecoration= "line-through";
   })

   }
const ChangeColor = () =>{
   document.querySelectorAll('.list-items').forEach((container)=>{   
       container.addEventListener('focus',(event)=>{
           document.querySelectorAll('.TodoList').forEach((Item,index)=>{   
               if(event.target.id == index){          
               Item.style.background="lightyellow"
               document.getElementById(`del+${index}`).style.visibility="visible"
               document.getElementById(`edit+${index}`).style.visibility="hidden"

               }
       })

   })
})

document.querySelectorAll('.list-items').forEach((container)=>{   
   container.addEventListener('focusout',(event)=>{
       document.querySelectorAll('.TodoList').forEach((Item,index)=>{   
           if(event.target.id == index){          
           Item.style.background="white"
           document.getElementById(`del+${index}`).style.visibility="hidden"
           document.getElementById(`edit+${index}`).style.visibility="visible"
           
           }
   })

})
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
ShowComplete()
//https://github.com/rbreva/ToDoList/issues/2#issue-1392539855



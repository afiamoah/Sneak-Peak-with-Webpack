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
      ShowItems();
      })
  })  
}

const CompletedTrue = (event) =>{ 
  const getItem=JSON.parse(localStorage.getItem('Todo'));
  getItem.forEach((item,id) =>{
      if(event.target.id == id){
          item.Completed = true;
          return item
      }
    })
    localStorage.setItem('Todo',JSON.stringify(getItem))  

}

const CompletedFalse = (event) =>{ 
  const getItem=JSON.parse(localStorage.getItem('Todo'));
  getItem.forEach((item,id) =>{
      if(event.target.id == id){
          item.Completed = false;
          return item
      }
    })
    localStorage.setItem('Todo',JSON.stringify(getItem))  

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
    
    const EditItems= () =>{
       document.querySelectorAll('.list-items').forEach((container)=>{  
       container.addEventListener('keypress',(event)=>{
           if(event.key == 'Enter'){
            const MyItems = JSON.parse(localStorage.getItem('Todo'))
             MyItems.forEach((List,index)=>{
              if(event.target.id == index){
               List.Description = event.target.value;
               return List
              }
            })
            localStorage.setItem('Todo',JSON.stringify(MyItems))
            ShowItems();
           }
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


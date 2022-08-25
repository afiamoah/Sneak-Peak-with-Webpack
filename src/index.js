import './style.css'
let MyListItems = []
let countItems =[]
let HoldList = {}
let Allindex = []
const getItem = document.querySelector('#text');
const AllContainer = document.querySelector('.Todo-Container');
const Storage = localStorage.getItem('Todo');
const ListContainer=document.querySelector('.holdtodo');
let count=0;
const ClearAllItems = document.querySelector('.clear-test');
const completeData= document.querySelectorAll('[data-complete]');

const AddItems= (item) => {
        getItem.addEventListener('keypress',(event)=>{
           
            if (event.key === "Enter") {
                GetCount();
                event.preventDefault();
             ListContainer.innerHTML='';   
            if(Storage != null){
            let seeList=JSON.parse(localStorage.getItem('Todo'));
                MyListItems=seeList;
            }          
            HoldList ={
            id:count,
             Description: item.value,
             completed:false,
            }
            MyListItems.push(HoldList);
            localStorage.setItem('Todo',JSON.stringify(MyListItems))
            Display();
            }
          })   
}

const GetCount = () => {
  const getCount = JSON.parse(localStorage.getItem('Todo'));
  if(getCount != null){
    for(let i=0;i<getCount.length;i++){
        count=i+1;
    }
    return count;
  }
}

const Display = ()=> {
    count=0;
    ClearAllItems.style.textDecoration = "none"; 
    const getList=JSON.parse(localStorage.getItem('Todo'));
    getList.forEach((list,index)=>{
        const MyListContainer = document.createElement('div');
        MyListContainer.classList.add('TodoList');
        const ListItem=document.createElement('input');
        ListItem.type = "text";
        ListItem.classList.add('list-item')
        ListItem.setAttribute('data-complete',list.completed);
        ListItem.value=list.Description;
        const CheckBox = document.createElement('input');
        CheckBox.type = "checkbox";
        CheckBox.classList.add('CheckList');
        CheckBox.setAttribute('uncheck',false)
        CheckBox.setAttribute('onclick','')
        CheckBox.setAttribute('id',index)
        const DeleteButton = document.createElement('span');
        DeleteButton.classList.add('Remove');
        DeleteButton.innerHTML=`<i class="fa fa-trash" aria-hidden="true"></i>`;
        DeleteButton.style.visibility="hidden";
        DeleteButton.setAttribute('id',index+"del")
        DeleteButton.setAttribute('onclick','')
        const dots = document.createElement('span');
        dots.setAttribute('id',index+"edit")
        dots.innerHTML=`<i id="" class="fas fa-ellipsis-v"></i>`;
        MyListContainer.appendChild(CheckBox);
        MyListContainer.appendChild(ListItem);
        MyListContainer.appendChild(DeleteButton);
        MyListContainer.appendChild(dots);
        ListContainer.appendChild(MyListContainer)
        
    })
}


const ShowAllList=() =>{
    if(Storage != null){
        const getList=JSON.parse(localStorage.getItem('Todo'));
            getList.forEach((list,index)=>{
                const MyListContainer = document.createElement('div');
                MyListContainer.classList.add('TodoList');
                const ListItem=document.createElement('input');
                ListItem.type = "text";
                ListItem.classList.add('list-item')
                ListItem.setAttribute('data-complete',list.completed);
                ListItem.value=list.Description;
                const CheckBox = document.createElement('input');
                CheckBox.type = "checkbox";
                CheckBox.classList.add('CheckList');
                CheckBox.setAttribute('uncheck',false)
                CheckBox.setAttribute('onclick','')
                CheckBox.setAttribute('id',index)
                const DeleteButton = document.createElement('span');
                DeleteButton.classList.add('Remove');
                DeleteButton.setAttribute('id',index+"del")
                DeleteButton.innerHTML=`<i  id="" class="fa fa-trash" aria-hidden="true"></i>`;
                DeleteButton.setAttribute('onclick','')
                const dots = document.createElement('span');
                dots.setAttribute('id',index+"edit")
                dots.innerHTML=`<i id="" class="fas fa-ellipsis-v"></i>`;
                DeleteButton.style.visibility="hidden";
                MyListContainer.appendChild(CheckBox);
                MyListContainer.appendChild(ListItem);
                MyListContainer.appendChild(DeleteButton);
                MyListContainer.appendChild(dots);
                ListContainer.appendChild(MyListContainer)                
            })
        

    }
}

const RemoveItem = () => {
    document.querySelectorAll('.Remove').forEach((Remove)=>{
Remove.addEventListener('click',(event)=>{
    const getList=JSON.parse(localStorage.getItem('Todo'));
    const itemid=event.target.id;
    console.log(itemid);
    const RemainList=getList.filter((Myitems,index)=>{
     if(index != itemid){
      return Myitems
     }
    })
    localStorage.setItem('Todo',JSON.stringify(RemainList))
    ListContainer.innerHTML='';
    Display();
})
    }) 
 
}

const completeTodo = () => {
        document.querySelectorAll('.CheckList').forEach((checklists)=>{
            if(checklists != null){ 
               checklists.addEventListener('change',(event)=>{
                if(event.target.checked){
                    completeData.forEach((data)=>{
                        console.log(data)
                       })
                const ListItem=document.querySelectorAll('.list-item');
                ListItem.forEach((checklist,index)=>{
                    if(event.target.id == index){
                    checklist.style.textDecoration = "line-through"; 
                    document.getElementById(index+"del").style.visibility="visible";
                    document.getElementById(index+"edit").style.visibility="hidden";
                    event.target.setAttribute('data-complete',true); 
                    ClearAllCompleted(event);        
                    }        
                    })  
                  
                   }else{
                    const ListItem=document.querySelectorAll('.list-item');
                    ListItem.forEach((checklist,index)=>{
                        if(event.target.id == index){
                            checklist.style.textDecoration = "none";
                            document.getElementById(index+"del").style.visibility="hidden";
                            document.getElementById(index+"edit").style.visibility="visible";
                            console.log
                            event.target.setAttribute('data-complete',false); 
                            UnClearAllCompleted(event)
                            
                        }
                    
                    })
                   }
                })
            }
            })
    
  
}

const ClearAllCompleted = (event) =>{
       const List=JSON.parse(localStorage.getItem('Todo'));
        List.forEach((checklist,index)=>{
        if(event.target.id == index){
        checklist.completed=true;  
        return checklist;            
        }       
        })                    
        localStorage.setItem('Todo',JSON.stringify(List))
        }
        
           const UnClearAllCompleted = (event) =>{
            const List=JSON.parse(localStorage.getItem('Todo'));
             List.map((checklist,index)=>{
                     if(event.target.id == index){
                        checklist.completed=false;  
                        return checklist;            
             }       
            })  
            localStorage.setItem('Todo',JSON.stringify(List))
            }

    const ClearComplete = () => {
        ClearAllItems.addEventListener('click',(event)=>{
            const Lists =JSON.parse(localStorage.getItem('Todo'));            
            const ClearAll = Lists.filter((Take,index)=>{
                if(Take.completed !=true){
                    
                    return Take;
                   
                }
            })
            localStorage.setItem('Todo',JSON.stringify(ClearAll))
            ClearAllItems.style.textDecoration = "line-through"; 
            ListContainer.innerHTML='';
            Display();
        })
          
    }

AddItems(getItem);
ShowAllList();
GetCount();
completeTodo();
ClearComplete();
RemoveItem();
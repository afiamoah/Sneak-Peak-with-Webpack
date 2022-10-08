import ShowItems from "./ShowItems.js"

export default function EditItems(){
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
export const CompletedTrue = (event) =>{ 
    const getItem=JSON.parse(localStorage.getItem('Todo'));
    getItem.forEach((item,id) =>{
        if(event.target.id == id){
            item.Completed = true;
            return item
        }
      })
      localStorage.setItem('Todo',JSON.stringify(getItem))  
 
 }

 export const CompletedFalse = (event) =>{ 
    const getItem=JSON.parse(localStorage.getItem('Todo'));
    getItem.forEach((item,id) =>{
        if(event.target.id == id){
            item.Completed = false;
            return item
        }
      })
      localStorage.setItem('Todo',JSON.stringify(getItem))  
 
 }
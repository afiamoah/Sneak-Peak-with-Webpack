
let Index=1
let count=1;
let ItemsContainer=[]
export const GetCount = () => {
    const getCount = JSON.parse(localStorage.getItem('Todo'));
    if(getCount != null){
    count=count+getCount.length      
      return count;
    }else{
    count=Index;       
    }
}


 export const SortItems = () =>{
        const MyItems = JSON.parse(localStorage.getItem('Todo'));
        ItemsContainer=MyItems
       for(let x=0;x<ItemsContainer.length;x++){
        ItemsContainer[x].id=x+1
       }  
        localStorage.setItem('Todo',JSON.stringify(ItemsContainer))    
    
      }
  
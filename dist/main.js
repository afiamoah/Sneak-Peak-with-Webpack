/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["lib"] = factory();
	else
		root["lib"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const DisplayItems=document.querySelector('.DisplayItems')\r\nconst GetItems=localStorage.getItem('Todo')\r\nconst DeleteItem=document.querySelectorAll('.RemoveItems')\r\n// const DeleteItems=document.querySelector('.')\r\nconst Items=document.querySelector('.NewItem')\r\nlet ItemsContainer=[]\r\nlet holdItems={}\r\n\r\nconst Validate = () => {\r\nif(Items.value !==''){\r\n   return true;\r\n}else{\r\n   return false;\r\n}\r\n}\r\n\r\nconst ShowAllItems = () =>{\r\n   DisplayItems.innerHTML='';\r\n   if(GetItems !== null){\r\n    const AllItems=JSON.parse(localStorage.getItem('Todo'))\r\n    ItemsContainer=AllItems;\r\n    AllItems.forEach((item,index) => {\r\n       DisplayItems.innerHTML+= `\r\n       <div class=\"TodoList\">\r\n       <div class=\"form\">\r\n    <input type=\"checkbox\" placeholder=\"...\" class=\"cancelItem\" id=\"${index}\"> \r\n    <input type=\"text\" class=\"list-items\" value=\"${item.Description}\" id=\"${index}\">\r\n   </div>\r\n   <span class=\"RemoveItems\" button id=\"${index}\"><i  id=\"del+${index}\" class=\"fa fa-trash\" class=\"del\" name=\"del\" aria-hidden=\"true\"></i><i id=\"edit+${index}\" class=\"fas fa-ellipsis-v\"></i></span>\r\n   </div>\r\n           `  \r\n    });\r\n   }else{\r\n       []\r\n   }\r\n}\r\n\r\nconst ShowItems = () => {\r\n   window.location.reload();\r\n   DisplayItems.innerHTML='';\r\n   const AllItems=JSON.parse(localStorage.getItem('Todo'))\r\n   ItemsContainer=AllItems;\r\n   ItemsContainer.forEach((item,index) => {\r\n   DisplayItems.innerHTML+= `\r\n   <div class=\"TodoList\">\r\n   <div class=\"form\">\r\n<input type=\"checkbox\" placeholder=\"...\" class=\"cancelItem\" id=\"${index}\"> \r\n   <input type=\"text\" class=\"list-items\" value=\"${item.Description}\" id=\"${index}\">\r\n</div>\r\n   <span class=\"RemoveItems\" button id=\"${index}\"><i  id=\"del+${index}\" class=\"fa fa-trash\" aria-hidden=\"true\"></i><i id=\"edit+${index}\" class=\"fas fa-ellipsis-v\"></i></span>\r\n</div>` \r\n    });   \r\n}\r\n\r\n  \r\n\r\n\r\nconst SaveItems= ()=>{\r\nholdItems = {\r\nid:1,\r\nDescription:Items.value,\r\nCompleted:false\r\n}\r\nItemsContainer.push(holdItems)\r\nlocalStorage.setItem('Todo',JSON.stringify(ItemsContainer))\r\n}\r\n\r\nconst DisplayAllItems = () =>{\r\n   Items.addEventListener('keypress',(event)=>{\r\n   if(event.key == 'Enter'){\r\n       if(Validate()){\r\n           SaveItems();\r\n           ShowItems();\r\n   }\r\n   }\r\n   })\r\n}\r\n\r\n\r\nconst RemoveItem= () =>{ \r\n   document.querySelectorAll('.RemoveItems').forEach((itemtoRemove)=>{\r\n       itemtoRemove.addEventListener('click',(event)=>{\r\n       const SelectedItem=event.target.id;\r\n       const MyItems=ItemsContainer.filter((List,index)=>{\r\n           if(SelectedItem != index){\r\n           return List\r\n           }\r\n       })\r\n       localStorage.setItem('Todo',JSON.stringify(MyItems))\r\n       ShowItems();\r\n       })\r\n   })  \r\n}\r\n\r\nconst CompletedTrue = (event) =>{ \r\n   const getItem=JSON.parse(localStorage.getItem('Todo'));\r\n   getItem.forEach((item,id) =>{\r\n       if(event.target.id == id){\r\n           item.Completed = true;\r\n           return item\r\n       }\r\n     })\r\n     localStorage.setItem('Todo',JSON.stringify(getItem))  \r\n\r\n}\r\n\r\nconst CompletedFalse = (event) =>{ \r\n   const getItem=JSON.parse(localStorage.getItem('Todo'));\r\n   getItem.forEach((item,id) =>{\r\n       if(event.target.id == id){\r\n           item.Completed = false;\r\n           return item\r\n       }\r\n     })\r\n     localStorage.setItem('Todo',JSON.stringify(getItem))  \r\n\r\n}\r\n\r\nconst CancelTask= () =>{  \r\ndocument.querySelectorAll('.cancelItem').forEach((cancelledItem)=>{\r\ncancelledItem.addEventListener('change',(event)=>{\r\n   const SelectedItem=event.target.id;\r\n   if(event.target.checked){\r\n   document.querySelectorAll('.list-items').forEach((Item,index)=>{\r\n   if(event.target.id == index){\r\n   Item.style.textDecoration = \"line-through\"; \r\n   CompletedTrue(event)\r\n   }\r\n   })   \r\n   };\r\n   })\r\n   })\r\n   }\r\n\r\nconst UncheckTask= () =>{  \r\n   document.querySelectorAll('.cancelItem').forEach((cancelledItem)=>{\r\n   cancelledItem.addEventListener('change',(event)=>{\r\n       const SelectedItem=event.target.id;\r\n       if(!event.target.checked){\r\n           document.querySelectorAll('.list-items').forEach((Item,index)=>{\r\n           if(event.target.id == index){               \r\n           Item.style.textDecoration = \"none\"; \r\n           CompletedFalse(event)      \r\n   }\r\n   })   \r\n   };\r\n   })\r\n   })\r\n   }\r\n\r\nconst ClearAllCompletedTask = () =>{\r\ndocument.querySelector('.ClearAll').addEventListener('click',() =>{\r\n   const AllList=JSON.parse(localStorage.getItem('Todo'));\r\n   const MyItems=AllList.filter((List)=>{\r\n       if(List.Completed !=true){\r\n       return List\r\n       }\r\n   })\r\n   localStorage.setItem('Todo',JSON.stringify(MyItems))\r\n   ShowItems();\r\n   document.querySelector('.ClearAll').style.textDecoration= \"line-through\";\r\n   })\r\n\r\n   }\r\nconst ChangeColor = () =>{\r\n   document.querySelectorAll('.list-items').forEach((container)=>{   \r\n       container.addEventListener('focus',(event)=>{\r\n           document.querySelectorAll('.TodoList').forEach((Item,index)=>{   \r\n               if(event.target.id == index){          \r\n               Item.style.background=\"lightyellow\"\r\n               document.getElementById(`del+${index}`).style.visibility=\"visible\"\r\n               document.getElementById(`edit+${index}`).style.visibility=\"hidden\"\r\n\r\n               }\r\n       })\r\n\r\n   })\r\n})\r\n\r\ndocument.querySelectorAll('.list-items').forEach((container)=>{   \r\n   container.addEventListener('focusout',(event)=>{\r\n       document.querySelectorAll('.TodoList').forEach((Item,index)=>{   \r\n           if(event.target.id == index){          \r\n           Item.style.background=\"white\"\r\n           document.getElementById(`del+${index}`).style.visibility=\"hidden\"\r\n           document.getElementById(`edit+${index}`).style.visibility=\"visible\"\r\n           \r\n           }\r\n   })\r\n\r\n})\r\n})\r\n}\r\n\r\nconst EditItems= () =>{\r\n   document.querySelectorAll('.list-items').forEach((container)=>{  \r\n   container.addEventListener('keypress',(event)=>{\r\n       if(event.key == 'Enter'){\r\n        const MyItems = JSON.parse(localStorage.getItem('Todo'))\r\n         MyItems.forEach((List,index)=>{\r\n          if(event.target.id == index){\r\n           List.Description = event.target.value;\r\n           return List\r\n          }\r\n        })\r\n        localStorage.setItem('Todo',JSON.stringify(MyItems))\r\n        ShowItems();\r\n       }\r\n})\r\n})  \r\n}\r\n\r\nDisplayAllItems();\r\nShowAllItems();\r\nRemoveItem()\r\nCancelTask()\r\nUncheckTask()\r\nClearAllCompletedTask();\r\nChangeColor()\r\nEditItems();\r\n\r\n\n\n//# sourceURL=webpack://lib/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
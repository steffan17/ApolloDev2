/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 8:
/***/ ((module) => {

const db2_getTable = {


renderHeaderTableView: (data)=>
    {   
            const fragment = document.createDocumentFragment();
            data.forEach(label => 
                {
                const newElement = document.createElement('th'); 
                newElement.className='tableView tableViewTH'
                newElement.textContent = label;
                fragment.appendChild(newElement);
                });
            return fragment
    },

renderBodyTableView: (data, dataRow)=>
    {   
            const fragment = document.createDocumentFragment();
            const newElementTR = document.createElement('tr'); 
            db2_getTable.getTableHeadNames(data).map(headNamesTableItems=>
                {
                const newElementTD = document.createElement('td'); 
                newElementTD.className='tableView tableViewTD'
                newElementTD.textContent = dataRow[headNamesTableItems];
                newElementTR.appendChild(newElementTD);
                })

                const newElementTDEdit = document.createElement('td'); 
                newElementTDEdit.className='tableView tableViewTD tableViewTDEdit'
                newElementTDEdit.textContent = `Edit`;
                newElementTR.appendChild(newElementTDEdit);

                const newElementTDDelete = document.createElement('td'); 
                newElementTDDelete.className='tableView tableViewTD tableViewTDEdit'
                newElementTDDelete.textContent = `Delete`;
                newElementTR.appendChild(newElementTDDelete);

                fragment.appendChild(newElementTR)
                    
                    
              
            return fragment
    },

renderTableView: (tableName, data)=>{
    if ('content' in document.createElement('template')) 
    {
        const tableViewTemplate = document.querySelector('#tableViewTemplate')
        
        const myClone = tableViewTemplate.content.cloneNode(true);
        const thead_tr = myClone.querySelector(`thead > tr`)
        const tbody_tr = myClone.querySelector(`tbody`)
        const caption = myClone.querySelector(`caption`)

        caption.className = 'tableView tableViewCaption'
        caption.textContent = tableName


        thead_tr.appendChild(db2_getTable.renderHeaderTableView(db2_getTable.getTableHeadNames(data)))
        
        data.forEach(dataRow => 
            {
        tbody_tr.appendChild(db2_getTable.renderBodyTableView(data, dataRow))
            })
        
        return myClone
  
    }
    
    
    
},

getTableHeadNames: (data)=>{

    const tableHeadNames = []
    if(data.length)
        { (Object.keys(data[0])).map(data=>{
                tableHeadNames.push(data)
            }) 
        }
    return tableHeadNames

    
}

}

module.exports = db2_getTable;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
console.log(`It's working BD2 :-)`);

const app = document.querySelector(`#app`)
const tablesList = document.querySelector('#tablesList')

const content = document.querySelector(`#content`)
const db2_getTable=__webpack_require__(8)
       

const renderTablesList = (data)=>{
    if ('content' in document.createElement('template')) {
        const tableListItemTemplate = document.querySelector('#tableListItemTemplate')
        const myCloneTable = []
        data.map((data)=>{
            const myClone = tableListItemTemplate.content.cloneNode(true);
            const li = myClone.querySelectorAll(`h2`)
            li[0].textContent = data.name
            myCloneTable.push(myClone)
    
        })
        
        return myCloneTable
    }}
    
    const getTables = ()=>
    {
    fetch('/api/getTables').then(res => res.json()).then(data => 
        {
            renderTablesList(data).map((data)=>{
                tablesList.appendChild(data)
            })
            const tablesListItems = [...document.querySelectorAll(`.tableListItem > h2`)]
            console.log([...document.querySelectorAll(`.tableListItem > h2`)])
            tablesListItems.map((data)=>{
                data.addEventListener('click',()=>{
                    getTable(data.textContent)
                })
                
            }) 
        })
    }
    
    const getTable = (tableName)=>{

        fetch(`api/getTable?tableName=${tableName}`).then(res => res.json()).then(data =>
        {
            console.log(data)
            const tableView = document.querySelector(`#tableView`)
            content.replaceChild(db2_getTable.renderTableView(tableName, data), tableView)
            
            
        })
    }
    
    getTables();

    
})();

/******/ })()
;
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 5:
/***/ ((module) => {

const db2_getTable = {


renderHeaderTableView: (data)=>
    {   
       
            
            const tableViewTemplate = document.querySelector('#tableViewTemplate')
            
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
                const newElementDivTD = document.createElement('div'); 
                newElementTD.className='tableView tableViewTD'
                newElementDivTD.className='tableView tableViewDiv'
                newElementDivTD.textContent = dataRow[headNamesTableItems];
                newElementTD.appendChild(newElementDivTD);
                newElementTR.appendChild(newElementTD);
                })

                const newElementTDEdit = document.createElement('td');
                const newElementDIVEdit = document.createElement('div');
                newElementTDEdit.className='tableView tableViewTD tableViewTDButton tableViewTDEdit'
                newElementDIVEdit.className='tableView tableViewDIV tableViewDIVButton tableViewDIVEdit'
                newElementDIVEdit.textContent = `Edit`;
                newElementTDEdit.appendChild(newElementDIVEdit);
                newElementTR.appendChild(newElementTDEdit);

                const newElementTDDelete = document.createElement('td');
                const newElementDIVDelete = document.createElement('div');
                newElementTDDelete.className='tableView tableViewTD tableViewTDButton tableViewTDDelete'
                newElementDIVDelete.className='tableView tableViewDIV tableViewDIVButton tableViewDIVDelete'
                newElementDIVDelete.textContent = `Delete`;
                newElementTDDelete.appendChild(newElementDIVDelete);
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

/***/ }),

/***/ 6:
/***/ ((module) => {

const DB2_updateDeleteRow = {

    deleteRow: (tableName, clickedElement)=>{
        console.log(`new file function`)
    },
    updateRowShowtext: (tableName, clickedElement)=>
    {
        console.log(clickedElement.target.parentElement.parentElement.childElementCount)
        const editTextAreaDIV = document.createElement(`div`)
        const editTextAreaInput = document.createElement(`input`)
        editTextAreaInput.type = `text`
        editTextAreaInput.classList.add(`editTextInput`)
        editTextAreaDIV.appendChild(editTextAreaInput)

        clickedElement.target.parentElement.parentElement.classList.add("selectedRow")


        for(let i = 0; i < clickedElement.target.parentElement.parentElement.children.length-2;i++)
            {
                clickedElement.target.parentElement.parentElement.children[i].innerHTML = ''
                clickedElement.target.parentElement.parentElement.children[i].appendChild(editTextAreaDIV.cloneNode(true))
            }
    }

}

module.exports = DB2_updateDeleteRow;

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
const DB2_getTable=__webpack_require__(5);
const DB2_updateDeleteRow = __webpack_require__(6);
       

const renderTablesList = (data)=>{
    if ('content' in document.createElement('template')) {
        const tableListItemTemplate = document.querySelector('#tableListItemTemplate')
        const myCloneTable = []
        data.map((data)=>{
            const myClone = tableListItemTemplate.content.cloneNode(true);
            const li = myClone.querySelectorAll(`h3`)
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
            const tablesListItems = [...document.querySelectorAll(`.tableListItem > h3`)]
            console.log([...document.querySelectorAll(`.tableListItem > h3`)])
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
            content.replaceChild(DB2_getTable.renderTableView(tableName, data), tableView)
            const tableViewDeleteButtons= [...document.querySelectorAll(`.tableViewDIVButton`)]
            
            tableViewDeleteButtons.map(tableViewDeleteButton=>{
                tableViewDeleteButton.addEventListener('click',(clickedElement)=>{
                    const clickedButtonFunction = clickedElement.target.textContent
                    
                    
                    if(clickedElement.target.classList.contains(`tableViewDIVDelete`))
                    {
                        DB2_updateDeleteRow.deleteRow(tableName, clickedElement);
                    }
                    if(clickedElement.target.classList.contains(`tableViewDIVEdit`))
                    {
                        DB2_updateDeleteRow.updateRowShowtext(tableName, clickedElement)
                    }
                })
            }) 
            
        }) 
    }
    
    getTables();

    const sendButton = document.getElementById(`sendStmt`)
    sendButton.addEventListener('click',()=>{
        const stmtText = document.getElementById(`stmtText`).value
        //console.log(stmtText)
        const body =  JSON.stringify({msg: stmtText})
        const headers = { 'Content-Type': 'application/json' }

        fetch('api/makeSomeChanges', {
            method: 'POST',
            body,
            headers
          }).then(res=>{
            console.log(res.json())
          });
    })


    
})();

/******/ })()
;
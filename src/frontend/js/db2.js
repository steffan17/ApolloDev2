console.log(`It's working BD2 :-)`);

const app = document.querySelector(`#app`)
const tablesList = document.querySelector('#tablesList')

const content = document.querySelector(`#content`)
const DB2_getTable=require(`./frontSRC/DB2_getTable`);
const DB2_updateDeleteRow = require("./frontSRC/DB2_updateDeleteRow");
       

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


    
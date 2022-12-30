console.log(`It's working BD2 :-)`);

const app = document.querySelector(`#app`)
const tablesList = document.querySelector('#tablesList')

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

getTables();

const getTable = (tableName)=>{

    fetch(`api/getTable?tableName=${tableName}`).then(res => res.json()).then(data =>
    {
        console.log(data)
        renderTableView(randomTable2)
        // renderHeaderTableView(randomTable)
    })
}

//RENDERING TABLE VIEW

const randomTable = [`id`, `name`, `date`, `age`]
const randomTable2 = [`2`, `John`, `12.12.2022`, `17`, 'edit', 'remove']

const renderHeaderTableView = (data)=>
    {   
       
            const tableViewTemplate = document.querySelector('#tableViewTemplate')
            
            const fragment = document.createDocumentFragment();
            data.forEach(label => {
            const newElement = document.createElement('th'); 
            newElement.className='tableView tableViewTH'
            newElement.textContent = label;
            fragment.appendChild(newElement);
            
            });
            return fragment
    }
const renderBodyTableView = (data)=>
    {   
       
            const tableViewTemplate = document.querySelector('#tableViewTemplate')
            
            const fragment = document.createDocumentFragment();
            data.forEach(label => {
            const newElement = document.createElement('td'); 
            newElement.className='tableView tableViewTD'
            newElement.textContent = label;
            fragment.appendChild(newElement);
            
            });
            return fragment
    }

const renderTableView = (data)=>{
    if ('content' in document.createElement('template')) 
    {
        const tableViewTemplate = document.querySelector('#tableViewTemplate')
        
        const myClone = tableViewTemplate.content.cloneNode(true);
        const thead_tr = myClone.querySelector(`thead > tr`)
        const tbody_tr = myClone.querySelector(`tbody > tr`)
        
        thead_tr.appendChild(renderHeaderTableView(randomTable))
        tbody_tr.appendChild(renderBodyTableView(data))
        
        const tableView = document.querySelector(`#tableView`)
        const content = document.querySelector(`#content`)
        content.replaceChild(myClone, tableView)

  
    }
    
    
    
}
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
    })
}
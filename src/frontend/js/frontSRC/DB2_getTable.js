const db2_getTable = {


renderHeaderTableView: (tableName, data)=>
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
renderBodyTableView: (data)=>
    {   
       
            const tableViewTemplate = document.querySelector('#tableViewTemplate')
            
            const fragment = document.createDocumentFragment();
            data.forEach(label => 
                {
                const newElement = document.createElement('td'); 
                newElement.className='tableView tableViewTD'
                newElement.textContent = label;
                fragment.appendChild(newElement);
            
                });
            return fragment
    },

renderTableView: (data)=>{
    if ('content' in document.createElement('template')) 
    {
        const tableViewTemplate = document.querySelector('#tableViewTemplate')
        
        const myClone = tableViewTemplate.content.cloneNode(true);
        const thead_tr = myClone.querySelector(`thead > tr`)
        const tbody_tr = myClone.querySelector(`tbody > tr`)
        const caption = myClone.querySelector(`caption`)

        caption.className = 'tableView tableViewCaption'
        caption.textContent = tableName

        thead_tr.appendChild(db2_getTable.renderHeaderTableView(db2_getTable.getTableHeadNames(data)))
        tbody_tr.appendChild(db2_getTable.renderBodyTableView(data))
        
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
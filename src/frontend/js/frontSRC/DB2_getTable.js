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
                newElementTD.className='tableView tableViewTD'
                newElementTD.textContent = dataRow[headNamesTableItems];
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
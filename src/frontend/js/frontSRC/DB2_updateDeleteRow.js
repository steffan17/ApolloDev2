const DB2_updateDeleteRow = {

    deleteRow: (tableName, clickedElement)=>{
        console.log(`new file function`)
    },
    updateRowShowtext: (tableName, clickedElement)=>
    {
        console.log(clickedElement.target.parentElement.parentElement.childElementCount)

        clickedElement.target.parentElement.parentElement.classList.add("selectedRow")
        for(let i=0; i< clickedElement.target.parentElement.parentElement.children.length-2; i++ )
        {
            console.log(clickedElement.target.parentElement.parentElement.children[i])
            clickedElement.target.parentElement.parentElement.children[i].textContent=`<div>WOW</div>`
        }
    }

}

module.exports = DB2_updateDeleteRow;
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
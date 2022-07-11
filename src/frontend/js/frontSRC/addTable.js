const app = document.getElementById('app')
const renderNewTableNameForm = ()=>
{
    return `
    <div id='addTableForm' class='addTableForm'>
    <input type="text" name="newTableName" id="newTableName" class="newTableName" placeholder="Podaj nazwę tablei...">
    <div class="navigationButtons"><div class="cancelButton">Anuluj</div><div class="acceptButton">Dalej</div></div>
    </div>
    `

}

const addTable = {

    addTableStart: ()=>
    {
    app.insertAdjacentHTML('afterbegin',renderNewTableNameForm())
    }
}

module.exports = addTable
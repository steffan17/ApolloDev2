const app = document.getElementById('app')
const content = document.getElementById('content')
const renderNewTableNameForm = ()=>
{
    return `
    <div id='addTableForm' class='addTableForm'>
    <input type="text" name="newTableName" id="newTableName" class="newTableName" placeholder="Podaj nazwę tabeli...">
    <div class="navigationButtons"><div class="newTableCancelButton">Anuluj</div><div class="newTableNextButton">Dalej</div></div>
    </div>
    `

}

const addTable = {

    addTableStart: ()=>
    {
    
    content.innerHTML = renderNewTableNameForm()
    const newTableCancelButton = document.querySelector('.newTableCancelButton')
    .addEventListener('click',()=>{console.log('bye'); content.innerHTML = ''})
    const newTableNextButton = document.querySelector('.newTableNextButton')
    .addEventListener('click',()=>{console.log('nextButton was clicked')})

    }
}

module.exports = addTable
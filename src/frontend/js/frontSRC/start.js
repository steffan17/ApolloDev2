const addTable = require('./addTable')
const app = document.getElementById('app')

app.insertAdjacentHTML('afterbegin','<div id="testButton" class="testButton">TestButton<div>');

const renderTablesNames = (data)=>
{
    return `
    <div class='tablesMenu'><div class='tableList' >
    <button class="hamburger">
        <span class="hamburger__box">
        <span class="hamburger__inner"></span>
        </span>
    </button>
        <ul class='tableList__list'>
         ${data.map((table)=>
            {
                return `<li class='tableList__item'>${table.name} </li>`
            }).join(``)}
            <li class='tableList__addTable'>..Dodaj tabelę</li>
        </ul></div></div>`
}



const getTables = ()=>
{
    fetch('/api/getTables').then(res => res.json()).then(data => 
    {
        app.insertAdjacentHTML('afterbegin',renderTablesNames(data))
        const hamburger = document.querySelector('.hamburger');
        const nav = document.querySelector('.tableList');

        const handleClick = () => 
        {
        hamburger.classList.toggle('hamburger--active');
        nav.classList.toggle('tableList--active');
        }

        hamburger.addEventListener('click', handleClick);
        const tableNameButton = document.getElementsByClassName('tableList__item')
        const tableNameButtons = [...tableNameButton].map((e)=>{e.addEventListener('click', ()=>
            {
            console.log(e.outerText)
            
            const nameList = [...tableNameButton].map((e)=>{e.classList.remove('--selected')})

            e.classList.add('--selected')
            handleClick()
            })})
        
        const addTableButton = document.querySelector('.tableList__addTable')
        addTableButton.addEventListener('click',()=>{
            console.log('add table')
            addTable.addTableStart()
            handleClick()
        })
       
    })
}
const renderAddTableForm = ()=>
{
    return `<div id='addTableForm' class='addTableForm'>
    <div class="cancelButton">Wróć</div><div class="acceptButton">Zapisz</div>
    <h2>Dodaj tabelę</h2> 
    <input type="text" name="newTableName" id="newTableName" class="newTableName">
    <input type="text" name="fieldName" id="fieldName" class="fieldName">
    <input list="fieldTypes" name="fieldType" id="fieldType">
  <datalist id="fieldTypes">
    <option value="Liczba">
    <option value="Tekst">
    <option value="Data">
    <option value="Tak/Nie">
  </datalist>
</div>`
}

const renderNewTableNameForm = ()=>
{
    return `
    <div id='addTableForm' class='addTableForm'>
    <input type="text" name="newTableName" id="newTableName" class="newTableName" placeholder="Podaj nazwę tablei...">
    <div class="navigationButtons"><div class="cancelButton">Anuluj</div><div class="acceptButton">Dalej</div></div>
    </div>
    `

}

const addTableNewName = ()=>
{
    app.insertAdjacentHTML('afterbegin',renderNewTableNameForm())
}

getTables();


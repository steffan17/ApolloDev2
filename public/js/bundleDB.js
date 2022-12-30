/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(2)
console.log(`it's working..:-)`)




/***/ }),
/* 2 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

const addTable = __webpack_require__(3)
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



/***/ }),
/* 3 */
/***/ ((module) => {

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

/***/ })
/******/ 	]);
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__(1)
})();

/******/ })()
;
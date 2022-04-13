console.log(`it's working..:-)`)


const app = document.getElementById('app')
const testButton = document.createElement('div')
testButton.innerHTML = `<div id=testButton>TestButton<div>`
app.insertAdjacentElement('afterbegin',testButton)

testButton.addEventListener('click',()=>console.log(`button pressed...`))
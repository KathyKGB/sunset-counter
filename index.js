// control of html element in js
let saveEl = document.getElementById("save-el")
let countEl = document.getElementById("count-el") // DOM, how you use js to modify a website
let count = 0

console.log(saveEl) // <p id-'save-el'>

function increment(){
    count += 1
    countEl.textContent = count // .innerText is the "0" that is in the count-el id in the html file, and that html text is being changed here in javascript
}

function save(){
    let countStr = count + " - "
    saveEl.textContent += countStr // textContent is all text in an element, innerText loses a space along the way
    countEl.textContent = 0
    count = 0
}
// mdn = Mozilla Developer Networks, resource
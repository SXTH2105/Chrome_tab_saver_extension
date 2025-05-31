let myTabs = []
let oldTab= []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const TabsFromLocalStorage = JSON.parse( localStorage.getItem(myTabs) )

if (TabsFromLocalStorage) {
    myTabs = TabsFromLocalStorage
    render(myTabs)
}

function render(myTabs){
    let listItem = ""
    for (let i = 0; i < tabs.length; i++ ){
        listItem += `
        <li>
            <a  target='_blank' href='${tabs[i]}'>
            ${tabs[i]}
            </a> 
    `
    ulEl.innerHTML = listItem
    }

}


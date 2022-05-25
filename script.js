const countDisplay = document.getElementById("count-display")
const counterBtn = document.getElementById("count-btn")
const resetBtn = document.getElementById("reset-btn")
const saveBtn = document.getElementById("save-btn")
const ulEl = document.getElementById("ul-el")
const inputBox = document.getElementById("input-box")
const okBtn = document.getElementById("ok-btn")
const cancelBtn = document.getElementById("cancel-btn")
const viewBtn = document.getElementById("view-btn")
const titleFromLocalStorage = JSON.parse(localStorage.getItem("title"))
const deleteBtn = document.getElementById("delete-btn")
const setNumberBtn = document.getElementById("set-number")
const closeBtn = document.getElementById("close-btn")
let countedItemsList = []


if(titleFromLocalStorage){
    countedItemsList = titleFromLocalStorage
    render(countedItemsList)
}

let number = 0

counterBtn.addEventListener("click", function() {
    number++
    countDisplay.textContent = number
})
resetBtn.addEventListener("click", function() {
    number = 0
    countDisplay.textContent = number
    inputBox.style.display = "none"
    okBtn.style.display = "none"
    cancelBtn.style.display = "none"
})


saveBtn.addEventListener("click", function() {
    inputBox.style.display = "block"
    okBtn.style.display = "block"
    cancelBtn.style.display = "block"
})

okBtn.addEventListener("click", function() {
    let title = inputBox.value
    if(title == "") {
        alert("enter title")
    }else{
        countedItemsList.push("<li>" + title + " - " + countDisplay.textContent + "</li>" + "<br>")
        render(countedItemsList)
        localStorage.setItem("title", JSON.stringify(countedItemsList) )
        inputBox.style.display = "none"
        okBtn.style.display = "none"
        cancelBtn.style.display = "none"
        number = 0
        countDisplay.textContent = number
        inputBox.value = ""
    }

})
cancelBtn.addEventListener("click", function() {
    inputBox.style.display = "none"
    okBtn.style.display = "none"
    cancelBtn.style.display = "none"
    number = 0
    countDisplay.textContent = number
    inputBox.value = ""
})

viewBtn.addEventListener("click", function() {
    document.getElementById("popup").classList.add("active")
    document.getElementById("overlay").classList.add("active-overlay")
    localStorage.getItem("title")
    render(countedItemsList)
})



function render(arr){
    let listItems = ""
    for(let i = 0; i < arr.length; i++){
        listItems += `<li>
                        ${arr[i]}
                    </li>
                    `
    }
    ulEl.innerHTML = listItems
}

deleteBtn.addEventListener("click", function() {
    localStorage.clear()
    countedItemsList = []
    render(countedItemsList)
})


setNumberBtn.addEventListener("click", function() {
    let setNumber = prompt("Enter counter starting number: ")
    number = setNumber
    countDisplay.textContent = number
    if(isNaN(setNumber)){
        alert("Enter a valid number")
        number = 0
        countDisplay.textContent = number
    }
})


function closePopup(){
    document.getElementById("popup").classList.remove("active")
    document.getElementById("overlay").classList.remove("active-overlay")
}




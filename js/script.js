// BUSINESS LOGIC

function beepBoop(number) {

    let arrayBoop = []

    for (let i = 0; i <= number; i++ ) {
        
        
        
        let num = i.toString() 
        
        if (num.includes("3") === true) {
            arrayBoop.push("Won't you be my neighbor?") 
        }  else if (num.includes("2") === true) { 
            arrayBoop.push("Boop!") 
        } else if (num.includes("1") === true) {
            arrayBoop.push("Beep!")
        } else {
            arrayBoop.push(parseInt(num)) 
        }
        
    }
        return(arrayBoop)
}

// UI LOGIC

// GET ALL DOM NODES
const form = document.getElementById("input-form")
const output = document.getElementById("output")

function handleNum(e){
    // STOP PAGE FROM REFRESHING
    e.preventDefault();
    // GET USER INPUT
    const userInput = document.getElementById("input").value
    // initialize empty array
    let displayArr = beepBoop(userInput)
    
    // FOR EVERY ELEMENT IN DISPLAYARR APPEND TO OUTPUT

    displayArr.forEach(function(item) {

        const listElement = document.createElement("li")
        listElement.innerHTML = item
        output.appendChild(listElement) 
        
    })
    
}


form.addEventListener("submit", handleNum)



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


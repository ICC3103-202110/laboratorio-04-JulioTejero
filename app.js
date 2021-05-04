var readlineSync = require('readline-sync');

function view(counter){
    return String(`Count:  ${counter}  \n(+)  (-)  \n(q) for quit \n`)
}

function updated(msg, counter){
    
    if (msg === "+"){
        counter = counter + 1
        return counter 
    }
    else if (msg === "-"){
        counter = counter - 1
        return counter
    }
    else{
        console.log("\nInput not allowed\n")
        return counter
    }
}

function app(counter){
    console.clear()
    const breaker = 0
    while (breaker === 0){
        const currentView = view(counter)
        console.log(currentView)
        var msg = readlineSync.question('What would you do?  ');
        console.clear()
        if (msg === "q"){
            break
        }
        counter = updated(msg, counter)
    }
}

app(0)
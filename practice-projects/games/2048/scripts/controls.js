class Controls{
    constructor(type){
        this.direction
    }
}

document.addEventListener("keypress",(event)=>{
    let key = event.key;
    switch(event.key){
        case "w":
        case "W":
            console.log("you pressed w");
            break;
        case "a":
        case "A":
            console.log("you pressed a");
            break;
        case "s":
        case "S":
            console.log("you pressed s");
            break;
        case "d":
        case "D":
            console.log("you pressed d");
            break;
    }
})


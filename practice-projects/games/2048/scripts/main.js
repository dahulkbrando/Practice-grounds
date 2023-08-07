const canvas=document.getElementById("myCanvas");
const sideLength = 400;
canvas.width = sideLength;
canvas.height= sideLength;

// Kill switch for program press "e"
let exit = false;

const ctx = canvas.getContext("2d");
const board = new Board(canvas.width/2,canvas.height/2,sideLength)

// Listen for keystrokes that move the tiles on the board
document.addEventListener("keypress",(event)=>{
    let key = event.key;
    switch(event.key){
        case "w":
        case "W":
            console.log("up")
            board.shiftTiles("up");
            break;
        case "a":
        case "A":
            console.log("left")
            board.shiftTiles("left");
            break;
        case "s":
        case "S":
            console.log("down")
            board.shiftTiles("down");
            break;
        case "d":
        case "D":
            console.log("right")
            board.shiftTiles("right");
            break;
        case "c":
        case "C":
            console.log('clearing');
            board.clearBoard(ctx);
            return;

    }
    animate();
})
board.update();
animate();

function animate(){
    // board.update();
    board.draw(ctx);
}

// Code below is used to test functionality

// let test = [];
//     for(let i=0;i<4;i++){
//         test.push(new Array(4).fill(null));
//     }
// console.log(test);
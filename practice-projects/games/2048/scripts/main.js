const canvas=document.getElementById("myCanvas");
canvas.width=400;
canvas.height=400;

const ctx = canvas.getContext("2d");
const board = new Board(canvas.width/2,canvas.height/2,canvas.width,canvas.height)

board.draw(ctx);







// Code below is used to test functionality

// let test = [];
//     for(let i=0;i<4;i++){
//         test.push(new Array(4).fill(null));
//     }
// console.log(test);
let canvas = document.getElementById('myCanvas');
let context = canvas.getContext('2d');

window.onload = function(){
    // Establish game variables
    let time = Date.now();
    let count = 0;
    let start = false;

    // Create the game object
    const ball = {
        x: 300,
        y: 350,
        speed: 25,
        draw: drawBall
    }

    //game loop
    window.requestAnimationFrame(draw(ball));

}

// Functions below here
function draw(ball){
    context.clearRect(0,0,600,400);

    ball.draw(ball);

    context.clearRect
}

function drawBall(ball){
    context.beginPath();
    context.arc(ball.x, ball.y, 50, 0, 2*Math.PI);
    context.fillStyle('red');
    context.fill();
}

function ShowCount(){
    context.font = "25px Arial";
    context.fillStyle = "white";
    context.fillText("count: " + count, 20, 30);
}
const gameBoard = document.getElementById('gameBoard');
const context = gameBoard.getContext('2d');
const width = gameBoard.width;
const height =  gameBoard.height;
const scoreText = document.getElementById('scoreVal');
const unit = 25;
let foodX, foodY;
let xVel = 25;
let yvel = 0;
let score= 0;
let active = true;
let started = false;

let snake = [
   { x:unit*3, y:0},
   { x:unit*2, y:0},
   { x:unit, y:0},
   { x:0, y:0}
];

window.addEventListener('keydown',keyPress);
startGame();

function startGame(){
    context.fillStyle = '#212121';
    context.fillRect(0,0,width,height)

    createFood();
    displayFood();
    drawSnake();
    
    
}

function clearBoard(){
    context.fillStyle = '#212121';
    context.fillRect(0,0,width,height);
}

function createFood(){
    foodX = Math.floor(Math.random()*width/unit)*unit;
    foodY = Math.floor(Math.random()*height/unit)*unit;
}

function displayFood(){
    context.fillStyle = 'orange';
    context.fillRect(foodX,foodY,unit,unit);
}

function drawSnake(){
    context.fillStyle = 'lightblue';
    context.strokeStyle = '#212121';
    snake.forEach((snakePart)=>{
        context.fillRect(snakePart.x,snakePart.y,unit,unit)
        context.strokeRect(snakePart.x,snakePart.y,unit,unit)
    })
}

function moveSnake(){
    const head = {
        x: snake[0].x+xVel,
        y: snake[0].y+yvel
    }

    snake.unshift(head);
    if(snake[0].x==foodX && snake[0].y==foodY){
        score += 1;
        scoreText.textContent = score;
        createFood();
    }
    else{
    snake.pop();
    }
    
}

function nextTick(){
    if(active){
    setTimeout(()=>{
        clearBoard();
        displayFood();
        moveSnake();
        drawSnake();
        checkGameOver();
        nextTick();
    },250)
}else{
    clearBoard();
    context.font = 'bold 50px serif';
    context.fillStyle = 'white';
    context.textAlign = 'center';
    context.fillText('Game Over!!', width/2,height/2);
}
}

function keyPress(event){
    if (!started){
        started = true;
        nextTick();
    }
    const Left = 37;
    const Up = 38;
    const Right = 39;
    const Down = 40;

    switch(true){
        case(event.keyCode == Left && xVel != unit):
        xVel = -unit;
        yvel = 0;
        break;

        case(event.keyCode == Right && xVel != -unit):
        xVel = unit;
        yvel = 0;
        break;

        case(event.keyCode == Up && yvel != unit ):
        xVel = 0;
        yvel = -unit;
        break;

        case(event.keyCode == Down && yvel != -unit):
        xVel = 0;
        yvel = unit;
        break;

    }
}

function checkGameOver(){
    switch (true) {
        case (snake[0].x<0):
        case (snake[0].x>=width):
        case (snake[0].y<0):
        case (snake[0].y>=height):
            active=false;
            break;

    }
}
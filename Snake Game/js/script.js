let inputDirection = {x:0 , y:0};
let foodSound = new Audio("music/food.mp3");
let gameOverSound = new Audio ("music/gameover.mp3");
let moveSound = new Audio ("music/move.mp3");
let musicSound = new Audio("music/music.mp3");
let speed = 2
let score = 0
let lastPaintTime = 0
let snakeArray = [{
    x: 13,
    y: 15
}]
food = {x:6, y:7}

// Game Functions
const main = (ctime)=>{
    window.requestAnimationFrame(main)
    if ((ctime - lastPaintTime)/1000 < 1/speed){
        return
    }
    lastPaintTime = ctime
    gameEngine()
}

const isCollide = (snakeArray) => {
    //if you bump into yourself 
    for (let i = 1; i < snakeArray.length; i++){
        if (snakeArray[i].x === snakeArray[0].x && snakeArray[i].y === snakeArray[0].y){   
            return true;
        }
    }
    // if you bump into wall
    if (snakeArray[0].x >=18 || snakeArray[0].x <= 0 || snakeArray[0].y >=18 || snakeArray[0].y <= 0){
        return true;
    }
}

const gameEngine = () => {
    // Part 1: updating of snake Array
    if (isCollide(snakeArray)){
        gameOverSound.play()
        musicSound.pause()
        inputDirection = {x:0 , y:0}
        alert("Game Over - Press Any Key To Play Again")
        snakeArray = [{x: 13, y: 15}]
        musicSound.play()
        score = 0
        speed = 2
        document.getElementById("score").innerHTML = "Score: " + score;

    }

    // If you have eaten the food and need to increment the score 
    if(snakeArray[0].y === food.y && snakeArray[0].x === food.x){
        snakeArray.unshift({x: snakeArray[0].x + inputDirection.x, y: snakeArray[0].y + inputDirection.y}) 
        let a = 2 
        let b = 16
        food = {x: Math.round(a + (b-a)*Math.random()), y: Math.round(a + (b-a)*Math.random())}
        foodSound.play()
        speed += 0.5
        score += 1
        if (score > highScoreValue){
            highScoreValue = score
            localStorage.setItem("highScore", JSON.stringify(highScoreValue))
            highScoreBox.innerHTML = "High Score: " + highScoreValue
        }
        document.getElementById("score").innerHTML = "Score: " + score;

    };

    // Moving the snake 
    
        
    
    for (let i = snakeArray.length - 2; i >= 0 ; i--){
        snakeArray[i+1] = {...snakeArray[i]} 

    }
    snakeArray[0].x += inputDirection.x
    snakeArray[0].y += inputDirection.y
    // Part 2: Display the Snake   
    board.innerHTML = "";
    snakeArray.forEach((e, index)=>{
        snakeElement = document.createElement("div");
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
            if(index === 0){
            snakeElement.classList.add("head");
        }
        else{
            snakeElement.classList.add("snake");
        }
        board.appendChild(snakeElement)
    })

    //Part 3: Display The Food
    foodElement = document.createElement("div")
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add("food")
    board.appendChild(foodElement)
}








// Main Logic Starts
let highScore = localStorage.getItem("highScore")
if (highScore === null ){
    highScoreValue = 0
    localStorage.setItem("highScore", JSON.stringify(highScoreValue))
}
else {
    highScoreValue = JSON.parse(highScore)
    highScoreBox.innerHTML = "High Score: " + highScore
}
window.requestAnimationFrame(main)
window.addEventListener("keydown", e => {
    inputDirection = {x:0 , y:1} //Start The Game
    moveSound.play()
    musicSound.play()
    switch (e.code) {
        case "ArrowUp":
            inputDirection.x = 0;
            inputDirection.y = -1;
        break;
        case "ArrowDown":
            inputDirection.x = 0;
            inputDirection.y = 1;
        break;
        case "ArrowLeft":
            inputDirection.x = -1;
            inputDirection.y = 0;
        break;
        case "ArrowRight":
            inputDirection.x = 1;
            inputDirection.y = 0;
        break;
        default:
            break;
    }
})
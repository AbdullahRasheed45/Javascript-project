let inputDirection = {x:0 , y:0};
let foodSound = new Audio("music/food.mp3")
let gameOverSound = new Audio("music/gameover.mp3")
let moveSound = new Audio("music/move.mp3")
let musicSound = new Audio("music/music.mp3")
let speed = 2; 
let score = 0
let lastPaintTime = 0
let snakeArray = [{x:12, y:16}]
let food = {x: 5 , y: 8}

//main function 
const main = (ctime) =>{
    window.requestAnimationFrame(main)
    if ((ctime - lastPaintTime)/1000 < 1/speed){
        return
    }
    lastPaintTime = ctime
    gameEngine()
}

const isCollide = (snakeArray) => {
    //collision function here
    for (let i = 1; i < snakeArray.length; i++){
    if (snakeArray[i].y === snakeArray[0].y && snakeArray[i].x === snakeArray[0].x){
        return true
    }
    if (snakeArray[0].x <= 0 || snakeArray[0].x >=18 || snakeArray[0].y >= 18 || snakeArray[0].y <=0){
        return true
    }
}
}

//Game Engine Function 
const gameEngine = () => {

    //If the collision happens
    if (isCollide(snakeArray)){
        gameOverSound.play()
        musicSound.pause()
        alert("Game Over - Press any key to start again")
        inputDirection = {x:0 ,y: 0}
        score = 0
        speed = 2
        snakeArray = [{x:12, y:16}]
        musicSound.play()
        document.getElementById("score").innerHTML = "Score: " + score
    }
    // if you have eaten the food and need to increment the score

    if (snakeArray[0].x === food.x && snakeArray[0].y === food.y){
        snakeArray.unshift({x: snakeArray[0].x + inputDirection.x , y: snakeArray[0].y + inputDirection.y})
        foodSound.play()
        a= 2
        b= 16
        food = {x: Math.round(a + (b-a)*Math.random()), y: Math.round(a + (b-a)*Math.random())}
        score += 1
        speed += 0.5
        document.getElementById("score").innerHTML = "Score: " + score;

    }
    //Moving of the snake
    for ( i = snakeArray.length -2 ; i >= 0 ; i--){
        snakeArray[i+1] = {...snakeArray[i]}
    }
    snakeArray[0].x += inputDirection.x
    snakeArray[0].y += inputDirection.y



    //Display of the snake
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

    //Display of the food
    foodElement = document.createElement("div")
    foodElement.style.gridRowStart = food.y
    foodElement.style.gridColumnStart = food.x
    foodElement.classList.add("food")
    board.appendChild(foodElement)
}   





//main logic
window.requestAnimationFrame(main)
window.addEventListener("keydown", (e)=>{
    inputDirection = {x: 0 , y: 1}
    musicSound.play()
    moveSound.play()
    switch (e.key){
        case "ArrowUp":
            inputDirection.x = 0
            inputDirection.y = -1
        break;
        case "ArrowDown":
            inputDirection.x = 0
            inputDirection.y = 1
        break;
        case "ArrowLeft":
            inputDirection.x = -1
            inputDirection.y = 0
        break;
        case "ArrowRight":
            inputDirection.x = 1
            inputDirection.y = 0
        break;
        default: 
        break;
    }
})
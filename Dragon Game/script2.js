score = 0 
cross = true;

music = new Audio ("music.mp3")
gameOverAudio = new Audio ("gameover.mp3")

document.onkeydown = function (e) {
    console.log(e.key)
    if (e.key == "ArrowUp"){
        dino = document.querySelector(".dino")
        dino.classList.add("animateDino")
        setTimeout(() => {
            dino.classList.remove("animateDino")
        }, 700);
    }
    if (e.key == "ArrowRight"){
        dino = document.querySelector(".dino")
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
        dino.style.left  = dinoX + 112 + "px"
    }
    if (e.key == "ArrowLeft"){
        dino = document.querySelector(".dino")
        dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
        dino.style.left  = dinoX - 112 + "px"

    }
}
setInterval(() => {
    dino = document.querySelector(".dino")
    obstacle = document.querySelector(".obstacle")
    gameOver = document.querySelector(".gameOver")

    dX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
    dY = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"))

    oX = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"))
    oY = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"))

    subX = Math.abs(dX - oX)
    subY = Math.abs(dY - oY)

    if (subX < 50 && subY < 20){
        gameOver.innerHTML = "Game Over - Restart To Play Again"
        obstacle.classList.remove("obstacleAnimation")
        gameOverAudio.play()
        setTimeout(() => {
            gameOverAudio.pause()
        }, 1000);
        music.pause()
    }else if (subX < 50 && cross){
        score += 1  
        scoreCont.innerHTML = "Your Score: " + score
        cross = false
        setTimeout(()=>{
            cross = true
        }, 500)
        
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue("animation-duration"));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + "s";
            console.log(aniDur)
            console.log(newDur)
        }, 500);
    }

}, 100);
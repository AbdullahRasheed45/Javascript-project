// score = 0 
// cross = true;

// audioGameOver = new Audio("gameover.mp3")
// music = new Audio("music.mp3")

// setTimeout(() => {
//     music.play()
// }, 1000);

// document.onkeydown = function(e){
//     console.log(e.key)
//     if (e.key == "ArrowUp"){
//         dino = document.querySelector(".dino")
//         dino.classList.add("animateDino")
//         setTimeout(()=>{
//             dino.classList.remove("animateDino")
//         }, 700)
//     }if (e.key == "ArrowRight"){
//         dino = document.querySelector(".dino")
//         dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
//         dino.style.left = dinoX + 112 + "px"
//     }if (e.key == "ArrowLeft"){
//         dino = document.querySelector(".dino")
//         dinoX = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
//         dino.style.left = dinoX - 112 + "px"
// }

// setInterval(() => {
//     dino = document.querySelector(".dino")
//     gameOver = document.querySelector(".gameOver")
//     obstacle = document.querySelector(".obstacle")

//     dx = parseInt(window.getComputedStyle(dino, null).getPropertyValue("left"))
//     dy = parseInt(window.getComputedStyle(dino, null).getPropertyValue("top"))

//     ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("left"))
//     oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue("top"))

//     offSetX = Math.abs(dx-ox)
//     offSetY = Math.abs(dy-oy)

//     if (offSetX < 50 && offSetY < 20){
        
//         gameOver.innerHTML = "Game Over - Reload To Start Again"
//         obstacle.classList.remove("obstacleAnimation")
//         audioGameOver.play()
//         setTimeout(() => {
//             audioGameOver.pause()
//         }, 1000);
//         music.pause()

//     }else if (offSetX < 50 && cross) {
//         score += 1
//         updateScore()
//         cross = false
//         setTimeout(() => {
//             cross = true
//         }, 1000);
//         setTimeout(() => {
//             aniDur= parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue("animation-duration"));
//             newDuraiton = aniDur - 0.1;
//             obstacle.style.annimationDuration = newDuraiton + "s";
//         }, 500);
        
//     }
//     ;
// }, 100);

// const updateScore = () =>{
//     scoreCont.innerHTML = "Your Score: " + score
// }


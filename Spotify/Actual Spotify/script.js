// Initilizing the variables 

let songIndex = 0
let audioElement = new Audio ("songs/1.mp3")
let masterPlay = document.getElementById("masterPlay")
let myProgressBar = document.getElementById("myProgressBar")
let gif = document.getElementById("gif")
let songItems = Array.from(document.getElementsByClassName("songItem"))
let masterSongName = document.getElementById("masterSongName")
let songItemPlay = Array.from(document.getElementsByClassName("songItemPlay"))

let songs = [
    {songName: "Warriyo - Mortals ", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven - My Heart", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/7.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/8.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/9.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/10.mp3", coverPath: "covers/10.jpg"},
] 

// Itteration for source of cover path and song name
songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName
    
});


//Handle play pause click
masterPlay.addEventListener("click", ()=>{
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play()
        gif.style.opacity = 1 
        masterPlay.classList.remove("fa-play-circle")
        masterPlay.classList.add("fa-pause-circle")
    } 
    else {
        audioElement.pause()
        gif.style.opacity = 0
        masterPlay.classList.remove("fa-pause-circle")
        masterPlay.classList.add("fa-play-circle") 
    }
})

// Event Listener
audioElement.addEventListener("timeupdate", ()=> {

    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    myProgressBar.value = progress
})

myProgressBar.addEventListener("change", ()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100
})

const makeAllPlays= ()=>{
    songItemPlay.forEach((element) => {
        element.classList.add("fa-play-circle")
    })
}
const makeAllPause= ()=>{
    songItemPlay.forEach((element) => {
        element.classList.add("fa-pause-circle")
    })
}

const playTheSong = () => {
    songItemPlay.forEach((element)=>{
    element.addEventListener("click", (e)=>{
    makeAllPlays();
    songIndex = parseInt(e.target.id)
    e.target.classList.remove("fa-play-circle")
    e.target.classList.add("fa-pause-circle")
    audioElement.src = `songs/${songIndex}.mp3`
    masterSongName.innerText = songs[songIndex-1].songName
    audioElement.currentTime = 0
    audioElement.play()
    gif.style.opacity = 1 
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")
    element.addEventListener("click", (e) =>{
        makeAllPause();
        songIndex = parseInt(e.target.id)
        e.target.classList.remove("fa-pause-circle")
        e.target.classList.add("fa-play-circle")
        audioElement.currentTime = progress
        audioElement.pause()
        gif.style.opacity = 0
        masterPlay.classList.remove("fa-pause-circle")
        masterPlay.classList.add("fa-play-circle")
    })
})
})}

playTheSong()




document.getElementById("next").addEventListener("click" , () =>{
    if (songIndex >= 10){
        songIndex = 1
    }else {
    songIndex += 1}
    audioElement.src = `songs/${songIndex}.mp3`
    masterSongName.innerText = songs[songIndex-1].songName
    audioElement.currentTime = 0
    audioElement.play()
    gif.style.opacity = 1 
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")

})

document.getElementById("previous").addEventListener("click" , () =>{
    if (songIndex <= 1){
        songIndex = 10
    }else {
    songIndex -= 1}
    audioElement.src = `songs/${songIndex}.mp3`
    masterSongName.innerText = songs[songIndex-1].songName
    audioElement.currentTime = 0
    audioElement.play()
    gif.style.opacity = 1 
    masterPlay.classList.remove("fa-play-circle")
    masterPlay.classList.add("fa-pause-circle")

})
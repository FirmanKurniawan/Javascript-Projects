console.log("Welcome to spotify");

//Initialize the variable
let songIndex = 0;
let audioElement = new Audio('music/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let myProgressBar = document.getElementById('myProgressBar');
let songItem = Array.from(document.getElementsByClassName('songItem'));


let songs = [
    {songName: "Let Me Love You", filePath: "music/1.mp3", coverPath: "cover/1.jpg"},
    {songName: "Mera Mann", filePath: "music/2.mp3", coverPath: "cover/2.jpg"},
    {songName: "Sukoon Mila", filePath: "music/3.mp3", coverPath: "cover/3.jpg"},
    {songName: "Ye Tune Kya Kiya", filePath: "music/4.mp3", coverPath: "cover/4.jpg"},
    {songName: "Ishq Sufiyana", filePath: "music/5.mp3", coverPath: "cover/5.jpg"},
    {songName: "To Jo Mila", filePath: "music/6.mp3", coverPath: "cover/6.jpg"},
    {songName: "Mainu Tera dil Chahida rakh da", filePath: "music/7.mp3", coverPath: "cover/7.jpg"},

]

songItem.forEach((element, i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
})
//audioElement.play();

//Handle play/pause click
masterPlay.addEventListener('click', () =>{
    if(audioElement.paused || addEventListener.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', () =>{
    //Update Seebar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () =>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

const checksong = () =>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
            element.addEventListener('click', (e) => {
                if(audioElement.paused || addEventListener.currentTime<=0){
                    audioElement.play();
                    e.target.classList.remove('fa-play-circle');
                    e.target.classList.add('fa-pause-circle');
                    masterPlay.classList.remove('fa-play-circle');
                    masterPlay.classList.add('fa-pause-circle');
                    gif.style.opacity = 1;
                }
                else{
                    audioElement.pause();
                    e.target.classList.remove('fa-pause-circle');
                    e.target.classList.add('fa-play-circle');
                    masterPlay.classList.remove('fa-pause-circle');
                    masterPlay.classList.add('fa-play-circle');
                    gif.style.opacity = 0;
                }
            })
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle')
        audioElement.src = `music/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        checksong();
        //audioElement.play();
        gif.style.opacity = 1;
         masterPlay.classList.remove('fa-play-circle');
         masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById("next").addEventListener('click', () =>{
    if(songIndex>=6)
    {
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `music/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById("Previous").addEventListener('click', ()=>{
    if(songIndex<=0)
    {
        songIndex = 6;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `music/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})


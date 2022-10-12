const musicContainer = document.querySelector('.music_container');
const playBtn = document.querySelector('#play');
const prevBtn = document.querySelector('#prev');
const nextBtn = document.querySelector('#next');
const audio = document.querySelector('#audio');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress_container');
const title = document.querySelector('#title');
const singer = document.querySelector('#singer');
const cover = document.querySelector('#cover');

// Song Titles
const songs = ['Gafur', 'Lily-Alan-Walker', 'Nightcore-Remix', 'Skan-Time', 'Tsunami'];
const singerInfo = ['Gafur', 'Alan Walker, Emelie Hollow', 'Nightcore-Remix', 'Skan', 'Escape'];
const songName = ['луна', 'Lily', 'Nightcore-Remix', 'Time', 'Цунами']

// Keep Track Of Songs
let songIndex = 4;
console.log(songIndex - 1);

// Initially Load Song Info DOM
loadSong(songs[songIndex]);
console.log(songs[songIndex])

// Update Song Details DOM
function loadSong(song) {
    console.log(song);
    title.innerText = songName[songIndex];
    singer.innerText = singerInfo[songIndex];
    audio.src = `./music/${song}.mp3`;
    cover.src = `./images/${song}.jpg`;
}

// Play Song
function playSong() {
    musicContainer.classList.add('play')
    playBtn.querySelector('i.fa-solid').classList.remove('fa-play');
    playBtn.querySelector('i.fa-solid').classList.add('fa-pause');

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play')
    playBtn.querySelector('i.fa-solid').classList.add('fa-play');
    playBtn.querySelector('i.fa-solid').classList.remove('fa-pause');

    audio.pause();
}

function prevSong() {
    songIndex--

    if (songIndex < 0) {
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);

    playSong()
}

function nextSong() {
    songIndex++

    if (songIndex > songs.length - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong()
}

function updateProgressBar(e) {
    // console.log(e.srcElement.currentTime + " | " + e.srcElement.duration);
    // console.log(e);
    // const str = 0;
    const { duration, currentTime } = e.srcElement;
    // console.log(`${audio.currentTime}  `);
    const progressPercent = (currentTime / duration) * 100;
    progress.style.width = `${progressPercent}%`;
    document.getElementById('current_time').innerText = `${Math.floor(currentTime / 60)} : ${Math.floor(currentTime % 60)}`
    document.getElementById('duration').innerText = `${Math.floor(duration / 60)} : ${Math.floor(duration % 60)}`
}

function setProgress(e) {
    const Width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration

    audio.currentTime = (clickX / Width) * duration;
}

// Event Listen
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play');

    if (isPlaying) {
        pauseSong()
    } else {
        playSong()
    }
});


// Previous Song
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);


// Update Progress Bar
audio.addEventListener('timeupdate', updateProgressBar);

progressContainer.addEventListener('click', setProgress);

audio.addEventListener('ended', nextSong);
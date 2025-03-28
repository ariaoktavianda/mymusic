'use strict';

/**all music information**/

const musicData = [
  {
    backgroundImage: 'assets/images/illit.jpeg',
    posterUrl: 'assets/images/illit.jpeg',
    title: 'Lucky Girl Syndrome',
    album: 'Super Real Me',
    year: '2024',
    artist: 'ILLIT',
    musicPath: 'assets/music/music-1.mp3',
  },
  {
    backgroundImage: './assets/images/boysnoize.jpg',
    posterUrl: './assets/images/boysnoize.jpg',
    title: 'Alarm',
    album: 'Singel',
    year: 2014,
    artist: 'Boys Noize',
    musicPath: './assets/music/alarm.mp3',
  }
];

/** add eventListnere on all elements that are passed **/
const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**playlist**/
const playlist = document.querySelector('[data-music-list]');

for (let i = 0, len = musicData.length; i < len; i++) {
  playlist.innerHTML += `
  <li>
    <button class="music-item ${i === 0 ? 'playing' : ''}" data-playlist-toggler data-playlist-item="${i}">
      <img src="${musicData[i].posterUrl}" width="800" height="800" alt="${musicData[i].title} Album Poster"
        class="img-cover">

      <div class="item-icon">
        <span class="material-symbols-rounded">equalizer</span>
      </div>
    </button>
  </li>
  `;
}

/**playlist modal**/
const playlistSideModal = document.querySelector('[data-playlist]');
const playlistTogglers = document.querySelectorAll('[data-playlist-toggler]');
const overlay = document.querySelector('[data-overlay]');

const togglePlaylist = function () {
  playlistSideModal.classList.toggle('active');
  overlay.classList.toggle('active');
  document.body.classList.toggle('modalActive');
};

addEventOnElements(playlistTogglers, 'click', togglePlaylist);

/**playlist item**/
const playlistItems = document.querySelectorAll('[data-playlist-item]');

let currentMusic = 0;
let lastPlayedMusic = 0;

const changePlaylistItem = function () {
  playlistItems[lastPlayedMusic].classList.remove('playing');
  playlistItems[currentMusic].classList.add('playing');
};

addEventOnElements(playlistItems, 'click', function () {
  lastPlayedMusic = currentMusic;
  currentMusic = Number(this.dataset.playlistItem);
  changePlaylistItem();
});

/**player**/
const playerBanner = document.querySelector('[data-player-banner]');
const playerTitle = document.querySelector('[data-title]');
const playerAlbum = document.querySelector('[data-album]');
const playerYear = document.querySelector('[data-year]');
const playerArtist = document.querySelector('[data-artist]');

const audioSource = new Audio(musicData[currentMusic].musicPath);

const changePlayerInfo = function () {
  playerBanner.src = musicData[currentMusic].posterUrl;
  playerBanner.setAttribute('alt', `${musicData[currentMusic].title} Album Poster`);
  document.body.style.backgroundImage = `url(${musicData[currentMusic].backgroundImage})`;
  playerTitle.textContent = musicData[currentMusic].title;
  playerAlbum.textContent = musicData[currentMusic].album;
  playerYear.textContent = musicData[currentMusic].year;
  playerArtist.textContent = musicData[currentMusic].artist;

  audioSource.src = musicData[currentMusic].musicPath;

  audioSource.addEventListener('loadeddata', updateDuration);
  playMusic();
};

addEventOnElements(playlistItems, 'click', changePlayerInfo);

/**duration**/
const playerDuration = document.querySelector('[data-duration]');
const playerSeekRange = document.querySelector('[data-seek]');

/** pass seconds and get timcode formate */
const getTimecode = function (duration) {
  const minutes = Math.floor(duration / 60);
  const seconds = Math.ceil(duration - minutes * 60);
  const timecode = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  return timecode;
};

const updateDuration = function () {
  playerSeekRange.max = Math.ceil(audioSource.duration);
  playerDuration.textContent = getTimecode(Number(playerSeekRange.max));
};

audioSource.addEventListener('loadeddata', updateDuration);

/**play music**/
const playBtn = document.querySelector('[data-play-btn]');

let playInterval;

const playMusic = function () {
  if (audioSource.paused) {
    audioSource.play();
    playBtn.classList.add('active');
    playInterval = setInterval(updateRunningTime, 500);
  } else {
    audioSource.pause();
    playBtn.classList.remove('active');
    clearInterval(playInterval);
  }
};
playBtn.addEventListener('click', playMusic);

/**update running**/
const playerRunningTime = document.querySelector('[data-running-time');

const updateRunningTime = function () {
  playerSeekRange.value = audioSource.currentTime;
  playerRunningTime.textContent = getTimecode(audioSource.currentTime);

  updateRangeFill();
  isMusicEnd();
};

/**range**/
const ranges = document.querySelectorAll('[data-range]');
const rangeFill = document.querySelector('[data-range-fill]');

const updateRangeFill = function () {
  let element = this || ranges[0];

  const rangeValue = (element.value / element.max) * 100;
  element.nextElementSibling.style.width = `${rangeValue}%`;
};

addEventOnElements(ranges, 'input', updateRangeFill);

/**seekmusic**/
const seek = function () {
  audioSource.currentTime = playerSeekRange.value;
  playerRunningTime.textContent = getTimecode(playerSeekRange.value);
};

playerSeekRange.addEventListener('input', seek);

/**music end**/
const isMusicEnd = function () {
  if (audioSource.ended) {
    playBtn.classList.remove('active');
    audioSource.currentTime = 0;
    playerSeekRange.value = audioSource.currentTime;
    playerRunningTime.textContent = getTimecode(audioSource.currentTime);
    updateRangeFill();
  }
};

/**skip next**/
const playerSkipNextBtn = document.querySelector('[data-skip-next]');

const skipNext = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic >= musicData.length - 1 ? (currentMusic = 0) : currentMusic++;
  }

  changePlayerInfo();
  changePlaylistItem();
};

playerSkipNextBtn.addEventListener('click', skipNext);

/**skip previous**/
const playerSkipPrevBtn = document.querySelector('[data-skip-prev]');

const skipPrev = function () {
  lastPlayedMusic = currentMusic;

  if (isShuffled) {
    shuffleMusic();
  } else {
    currentMusic <= 0 ? (currentMusic = musicData.length - 1) : currentMusic--;
  }

  changePlayerInfo();
  changePlaylistItem();
};

playerSkipPrevBtn.addEventListener('click', skipPrev);

/**shuffle**/
const getRandomMusic = () => Math.floor(Math.random() * musicData.length);

const shuffleMusic = () => (currentMusic = getRandomMusic());

const playerShuffleBtn = document.querySelector('[data-shuffle]');
let isShuffled = false;

const shuffle = function () {
  playerShuffleBtn.classList.toggle('active');

  isShuffled = isShuffled ? false : true;
};

playerShuffleBtn.addEventListener('click', shuffle);

/**repeat**/
const playerRepeatBtn = document.querySelector('[data-repeat]');

const repeat = function () {
  if (!audioSource.loop) {
    audioSource.loop = true;
    this.classList.add('active');
  } else {
    audioSource.loop = false;
    this.classList.remove('active');
  }
};

playerRepeatBtn.addEventListener('click', repeat);

/**volume**/
const playerVolumeRange = document.querySelector('[data-volume]');
const playerVolumeBtn = document.querySelector('[data-volume-btn]');

const changeVolume = function () {
  audioSource.volume = playerVolumeRange.value;
  audioSource.muted = false;

  if (audioSource.volume <= 0.1) {
    playerVolumeBtn.children[0].textContent = 'volume_mute';
  } else if (audioSource.volume <= 0.5) {
    playerVolumeBtn.children[0].textContent = 'volume_down';
  } else {
    playerVolumeBtn.children[0].textContent = 'volume_up';
  }
};

playerVolumeRange.addEventListener('input', changeVolume);

/**mute**/
const muteVolume = function () {
  if (!audioSource.muted) {
    audioSource.muted = true;
    playerVolumeBtn.children[0].textContent = 'volume_off';
  } else {
    changeVolume();
  }
};

playerVolumeBtn.addEventListener('click', muteVolume);

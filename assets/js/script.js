'use strict';

/**all music information**/

const musicData = [
  {
    backgroundImage: './assets/images/hold.jpg',
    posterUrl: './assets/images/hold.jpg',
    title: 'Hold On Tight',
    album: 'Tetris',
    year: 2023,
    artist: 'Aespa',
    musicPath: './assets/music/aespa Hold On Tight MV _ Tetris Motion Picture Soundtrack_256k.mp3',
  },
  {
    backgroundImage: './assets/images/hotmess.jpeg',
    posterUrl: './assets/images/hotmess.jpeg',
    title: 'Hot Mess',
    album: 'The First Take',
    year: 2024,
    artist: 'Aespa',
    musicPath: './assets/music/aespa - Hot Mess - THE FIRST TAKE_256k.mp3',
  },
  {
    backgroundImage: './assets/images/armageddon.jpg',
    posterUrl: './assets/images/armageddon.jpg',
    title: 'Armageddon',
    album: 'Armageddon',
    year: 2024,
    artist: 'Aespa',
    musicPath: './assets/music/aespa 에스파 Armageddon MV_256k.mp3',
  },
  {
    backgroundImage: './assets/images/batterthings.jpg',
    posterUrl: './assets/images/batterthings.jpg',
    title: 'Better Things',
    album: 'Drama',
    year: 2023,
    artist: 'Aespa',
    musicPath: './assets/music/aespa 에스파 Better Things MV_256k.mp3',
  },
  {
    backgroundImage: './assets/images/blackmamba.jpeg',
    posterUrl: './assets/images/blackmamba.jpeg',
    title: 'Black Mamba',
    album: 'Girls',
    year: 2022,
    artist: 'Aespa',
    musicPath: './assets/music/aespa 에스파 Black Mamba MV_256k.mp3',
  },
  {
    backgroundImage: './assets/images/drama.jpg',
    posterUrl: './assets/images/drama.jpg',
    title: 'Drama',
    album: 'Drama',
    year: 2023,
    artist: 'Aespa',
    musicPath: './assets/music/aespa 에스파 Drama MV_256k.mp3',
  },
  {
    backgroundImage: './assets/images/girls.jpg',
    posterUrl: './assets/images/girls.jpg',
    title: 'Girls',
    album: 'Girls',
    year: 2022,
    artist: 'Aespa',
    musicPath: './assets/music/aespa 에스파 Girls MV_256k.mp3',
  },
  {
    backgroundImage: './assets/images/live.jpg',
    posterUrl: './assets/images/live.jpg',
    title: 'Live My Life',
    album: 'Armageddon',
    year: 2024,
    artist: 'Aespa',
    musicPath: './assets/music/aespa 에스파 Live My Life MV_256k.mp3',
  },
  {
    backgroundImage: './assets/images/next.jpeg',
    posterUrl: './assets/images/next.jpeg',
    title: 'Next Level',
    album: 'Next Level',
    year: 2021,
    artist: 'Aespa',
    musicPath: './assets/music/aespa 에스파 Next Level MV_256k.mp3',
  },
  {
    backgroundImage: './assets/images/savage.jpg',
    posterUrl: './assets/images/savage.jpg',
    title: 'Savage',
    album: 'Savage',
    year: 2021,
    artist: 'Aespa',
    musicPath: './assets/music/aespa 에스파 Savage MV_256k.mp3',
  },
  {
    backgroundImage: './assets/images/spicy.jpeg',
    posterUrl: './assets/images/spicy.jpeg',
    title: 'Spicy',
    album: 'My World',
    year: 2023,
    artist: 'Aespa',
    musicPath: './assets/music/aespa 에스파 Spicy MV_256k.mp3',
  },
  {
    backgroundImage: './assets/images/supernova.jpg',
    posterUrl: './assets/images/supernova.jpg',
    title: 'Supernova',
    album: 'Armageddon',
    year: 2024,
    artist: 'Aespa',
    musicPath: './assets/music/aespa 에스파 Supernova MV_256k.mp3',
  },
  {
    backgroundImage: './assets/images/whiplash.jpg',
    posterUrl: './assets/images/whiplash.jpg',
    title: 'Whiplash',
    album: 'Mini Album',
    year: 2024,
    artist: 'Aespa',
    musicPath: './assets/music/aespa 에스파 Whiplash MV_256k.mp3',
  },
  {
    backgroundImage: './assets/images/better.jpeg',
    posterUrl: './assets/images/better.jpeg',
    title: 'BATTER UP',
    album: 'BABYMONS7ER',
    year: 2024,
    artist: 'BABYMONSTER',
    musicPath: './assets/music/BABYMONSTER - BATTER UP M-V_256k.mp3',
  },
  {
    backgroundImage: './assets/images/billionaire.jpeg',
    posterUrl: './assets/images/billionaire.jpeg',
    title: 'BILLIONAIRE EXCLUSIVE',
    album: 'Billionaire',
    year: 2025,
    artist: 'BABYMONSTER',
    musicPath: './assets/music/BABYMONSTER - BILLIONAIRE EXCLUSIVE PERFORMANCE VIDEO_256k.mp3',
  },
  {
    backgroundImage: './assets/images/clik.jpeg',
    posterUrl: './assets/images/clik.jpeg',
    title: 'CLIK CLAK',
    album: 'Drip',
    year: 2024,
    artist: 'BABYMONSTER',
    musicPath: './assets/music/BABYMONSTER - CLIK CLAK M-V_256k.mp3',
  },
  {
    backgroundImage: './assets/images/drip.jpeg',
    posterUrl: './assets/images/drip.jpeg',
    title: 'Drip',
    album: 'Drip',
    year: 2024,
    artist: 'BABYMONSTER',
    musicPath: './assets/music/BABYMONSTER - DRIP M-V_256k.mp3',
  },
  {
    backgroundImage: './assets/images/forever.jpeg',
    posterUrl: './assets/images/forever.jpeg',
    title: 'FOREVER',
    album: 'Drip',
    year: 2024,
    artist: 'BABYMONSTER',
    musicPath: './assets/music/BABYMONSTER - FOREVER M-V_256k.mp3',
  },
  {
    backgroundImage: './assets/images/like.jpeg',
    posterUrl: './assets/images/like.jpeg',
    title: 'LIKE THAT EXCLUSIVE',
    album: 'Drip',
    year: 2024,
    artist: 'BABYMONSTER',
    musicPath: './assets/music/BABYMONSTER - LIKE THAT EXCLUSIVE PERFORMANCE VIDEO_256k.mp3',
  },
  {
    backgroundImage: './assets/images/really.jpeg',
    posterUrl: './assets/images/really.jpeg',
    title: 'Really Like You',
    album: 'Drip',
    year: 2024,
    artist: 'BABYMONSTER',
    musicPath: './assets/music/BABYMONSTER - Really Like You M-V_256k.mp3',
  },
  {
    backgroundImage: './assets/images/sheesh.jpeg',
    posterUrl: './assets/images/sheesh.jpeg',
    title: 'SHEESH',
    album: 'BABYMONS7ER',
    year: 2024,
    artist: 'BABYMONSTER',
    musicPath: './assets/music/BABYMONSTER - SHEESH M-V_256k.mp3',
  },
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
    backgroundImage: 'assets/images/illit1.jpg',
    posterUrl: 'assets/images/illit1.jpg',
    title: 'Magnetic',
    album: 'Super Real Me',
    year: '2024',
    artist: 'ILLIT',
    musicPath: './assets/music/ILLIT (아일릿) Magnetic Official MV_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/jennie.jpeg',
    posterUrl: 'assets/images/jennie.jpeg',
    title: 'Like',
    album: 'Ruby',
    year: '2025',
    artist: 'Jennie',
    musicPath: './assets/music/JENNIE - like JENNIE (Official Video)_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/zen.png',
    posterUrl: 'assets/images/zen.png',
    title: 'ZEN',
    album: 'Ruby',
    year: '2025',
    artist: 'Jennie',
    musicPath: './assets/music/JENNIE - ZEN (Official Video)_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/love.jpeg',
    posterUrl: 'assets/images/love.jpeg',
    title: 'Love Hangover',
    album: 'Ruby',
    year: '2025',
    artist: 'Jennie & Dominic Fik',
    musicPath: './assets/music/JENNIE & Dominic Fike - Love Hangover (Official Video)_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/extral.jpg',
    posterUrl: 'assets/images/extral.jpg',
    title: 'ExtraL',
    album: 'Ruby',
    year: '2025',
    artist: 'Jennie',
    musicPath: './assets/music/JENNIE Doechii - ExtraL (Official Video)_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/crazy.jpg',
    posterUrl: 'assets/images/crazy.jpg',
    title: 'CRAZY',
    album: 'Mini Album',
    year: '2024',
    artist: 'LE SSERAFIM',
    musicPath: './assets/music/LE SSERAFIM (르세라핌) CRAZY OFFICIAL MV_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/hot.webp',
    posterUrl: 'assets/images/hot.webp',
    title: 'HOT',
    album: 'HOT',
    year: '2025',
    artist: 'LE SSERAFIM',
    musicPath: './assets/music/LE SSERAFIM(르세라핌) HOT (4K) _ STUDIO CHOOM ORIGINAL_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/bomb.png',
    posterUrl: 'assets/images/bomb.png',
    title: 'B.O.M.B',
    album: 'The First Step: Treasure Effect',
    year: '2021',
    artist: 'TREASURE',
    musicPath: './assets/music/TREASURE - B.O.M.B (kaboom ver.) DANCE PERFORMANCE VIDEO_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/bona.jpg',
    posterUrl: 'assets/images/bona.jpg',
    title: 'BONA BONA',
    album: 'Reboot',
    year: '2023',
    artist: 'TREASURE',
    musicPath: './assets/music/TREASURE  BONA BONA MV 256k.mp3',
  },
  {
    backgroundImage: 'assets/images/hello.webp',
    posterUrl: 'assets/images/hello.webp',
    title: 'HELLO',
    album: 'TREASURE JAPAN TOUR 2022-23 ~HELLO~ SPECIAL in KYOCERA DOME OSAKA',
    year: '2023',
    artist: 'TREASURE',
    musicPath: './assets/music/TREASURE - HELLO M-V_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/kingkong.jpg',
    posterUrl: 'assets/images/kingkong.jpg',
    title: 'KING KONG',
    album: 'TREASURE FAN MEETING~WONDERLAND~',
    year: '2024',
    artist: 'TREASURE',
    musicPath: './assets/music/TREASURE - KING KONG M-V_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/last.jpg',
    posterUrl: 'assets/images/last.jpg',
    title: 'LAST NIGHT',
    album: 'SPECIAL MINI ALBUM [PLEASURE]~',
    year: '2025',
    artist: 'TREASURE',
    musicPath: './assets/music/TREASURE - LAST NIGHT M-V_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/move.jpg',
    posterUrl: 'assets/images/move.jpg',
    title: 'MOVE',
    album: 'Reboot',
    year: '2023',
    artist: 'TREASURE',
    musicPath: './assets/music/TREASURE - MOVE (T5) M-V_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/loveyou.jpg',
    posterUrl: 'assets/images/loveyou.jpg',
    title: 'I LOVE YOU',
    album: 'The First Step: Treasure Effect',
    year: '2021',
    artist: 'TREASURE',
    musicPath: './assets/music/TREASURE - 사랑해 (I LOVE YOU) M-V_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/jikjin.png',
    posterUrl: 'assets/images/jikjin.png',
    title: 'JIKJIN',
    album: 'The Second Step: Chapter One',
    year: '2022',
    artist: 'TREASURE',
    musicPath: './assets/music/TREASURE  직진 JIKJIN MV 256k.mp3',
  },
  {
    backgroundImage: 'assets/images/saruru.png',
    posterUrl: 'assets/images/saruru.png',
    title: 'SARURU',
    album: 'SPECIAL MINI ALBUM [PLEASURE]~',
    year: '2025',
    artist: 'TREASURE',
    musicPath: './assets/music/TREASURE SARURU Easy Lyrics_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/saruru.png',
    posterUrl: 'assets/images/saruru.png',
    title: 'YELLOW',
    album: 'SPECIAL MINI ALBUM [PLEASURE]~',
    year: '2025',
    artist: 'TREASURE',
    musicPath: './assets/music/TREASURE YELLOW Easy Lyrics_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/7.png',
    posterUrl: 'assets/images/7.png',
    title: 'Black Swan',
    album: 'Map of the Soul: 7',
    year: '2020',
    artist: 'BTS',
    musicPath: './assets/music/BTS (방탄소년단) Black Swan Official MV_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/dance.jpeg',
    posterUrl: 'assets/images/dance.jpeg',
    title: 'Permission to Dance',
    album: 'Permission to Dance (R&B Remix)',
    year: '2021',
    artist: 'BTS',
    musicPath: './assets/music/BTS (방탄소년단) Permission to Dance Official MV_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/save.jpg',
    posterUrl: 'assets/images/save.jpg',
    title: 'Save ME',
    album: 'The Most Beautiful Moment in Life: Young Forever',
    year: '2016',
    artist: 'BTS',
    musicPath: './assets/music/BTS (방탄소년단) Save ME Official MV_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/mona.webp',
    posterUrl: 'assets/images/mona.webp',
    title: 'MONA LISA',
    album: 'MONA LISA',
    year: '2025',
    artist: 'J-HOPE',
    musicPath: './assets/music/j-hope MONA LISA Official MV_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/jhope.jpg',
    posterUrl: 'assets/images/jhope.jpg',
    title: 'On The Street',
    album: 'On The Street',
    year: '2023',
    artist: 'J-HOPE with J Cole',
    musicPath: './assets/music/j-hope on the street (with J Cole) Official MV_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/sweet.jpg',
    posterUrl: 'assets/images/sweet.jpg',
    title: 'Sweet Dreams',
    album: 'Sweet Dreams',
    year: '2025',
    artist: 'J-HOPE feat. Miguel',
    musicPath: './assets/music/j-hope Sweet Dreams (feat. Miguel) Official MV_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/seven.webp',
    posterUrl: 'assets/images/seven.webp',
    title: 'Seven',
    album: 'Seven',
    year: '2023',
    artist: 'Jung Kook feat. Latto',
    musicPath: './assets/music/Jung Kook - Seven (feat. Latto) _ Lirik Terjemahan Indonesia_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'Almond Chocolate',
    album: '',
    year: '',
    artist: 'ILLIT',
    musicPath: './assets/music/Almond Chocolate.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'Tick-Tack',
    album: '',
    year: '',
    artist: 'ILLIT',
    musicPath: './assets/music/Tick-Tack.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'Cupid',
    album: '',
    year: '',
    artist: 'Fifty Fifty',
    musicPath: './assets/music/cupid.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'Sos',
    album: '',
    year: '',
    artist: 'Fifty Fifty',
    musicPath: './assets/music/sos.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'Starry Nigh',
    album: '',
    year: '',
    artist: 'Fifty Fifty',
    musicPath: './assets/music/Starry Night.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'APT',
    album: '',
    year: '',
    artist: 'Rose & Bruno Mars',
    musicPath: './assets/music/APT.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'BAAM',
    album: '',
    year: '',
    artist: 'Momoland',
    musicPath: './assets/music/BAAM.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'Bboom Bboom',
    album: '',
    year: '',
    artist: 'Momoland',
    musicPath: './assets/music/Bboom Bboom.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'Humbs Up',
    album: '',
    year: '',
    artist: 'Momoland',
    musicPath: './assets/music/Humbs Up.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'Pinky Love',
    album: '',
    year: '',
    artist: 'Momoland',
    musicPath: './assets/music/Pinky Love.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'Fine',
    album: '',
    year: '',
    artist: 'Taeyeon',
    musicPath: './assets/music/Fine.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'Letter To Myself',
    album: '',
    year: '',
    artist: 'Taeyeon',
    musicPath: './assets/music/Letter To Myself.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'Heaven',
    album: '',
    year: '',
    artist: 'Taeyeon',
    musicPath: './assets/music/Heaven.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'Flower',
    album: '',
    year: '',
    artist: 'Jisoo',
    musicPath: './assets/music/Flower.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'Handlebars',
    album: '',
    year: '',
    artist: 'Jennie & Dua Lipa',
    musicPath: './assets/music/Handlebars.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'I ll Be There',
    album: '',
    year: '',
    artist: 'Jin',
    musicPath: './assets/music/I ll Be There.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'Love wins all',
    album: '',
    year: '',
    artist: 'IU',
    musicPath: './assets/music/Love wins all.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'Mantra',
    album: '',
    year: '',
    artist: 'Jennie',
    musicPath: './assets/music/Mantra.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'number one girl',
    album: '',
    year: '',
    artist: 'Rose',
    musicPath: './assets/music/number one girl.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'Super Shy',
    album: '',
    year: '',
    artist: 'NewJeans',
    musicPath: './assets/music/Super Shy.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'Agust D',
    album: '',
    year: '',
    artist: 'Agust D',
    musicPath: './assets/music/AGUST D - Agust D [Easy Lyrics]_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'Daechwita',
    album: '',
    year: '',
    artist: 'Agust D',
    musicPath: './assets/music/Agust D (SUGA) - Daechwita (대취타) Easy Lyrics_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'AMYGDALA',
    album: '',
    year: '',
    artist: 'Agust D',
    musicPath: './assets/music/Agust D AMYGDALA Easy Lyrics_256k.mp3',
  },
  {
    backgroundImage: 'assets/images/noposter.jpg',
    posterUrl: 'assets/images/noposter.jpg',
    title: 'Heart on the Window',
    album: '',
    year: '',
    artist: 'Jin Feat Wendy',
    musicPath: './assets/music/Jin(진) feat WENDY Heart on the Window (Color Coded Lyrics)_256k.mp3',
  },
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
    skipNext();
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

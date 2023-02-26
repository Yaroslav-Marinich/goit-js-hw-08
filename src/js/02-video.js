import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

window.onload = event => {
  if (localStorage.getItem('videoplayer-current-time') !== null) {
    player.setCurrentTime(localStorage.getItem('videoplayer-current-time'));
  }
};

player.on(
  'timeupdate',
  throttle(function (data) {
    let saveTime = data.seconds;
    localStorage.setItem('videoplayer-current-time', saveTime);
    console.log(saveTime);
  }, 1000)
);

player.getVideoTitle().then(function (title) {
  console.log('title:', title);
});

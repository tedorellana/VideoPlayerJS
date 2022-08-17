import MediaPlayer from "./mediaPlayer.js"

const video = document.querySelector('video');
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');

const player = new MediaPlayer({ el: video });

playButton.onclick = () => player.play();
pauseButton.onclick = () => player.pause();
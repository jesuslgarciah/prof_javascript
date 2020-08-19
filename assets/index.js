import MediaPlayer from './MediaPlayer.js'

const video = document.querySelector("video")
const button = document.getElementById("playButton")
const mute = document.getElementById("muteButton")

const player = new MediaPlayer( { el: video } )

button.onclick = () => player.tooglePlay()
mute.onclick = () => player.toogleMute()

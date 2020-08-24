import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js'

const video = document.querySelector("video")
const button = document.getElementById("playButton")
const mute = document.getElementById("muteButton")

const player = new MediaPlayer( { el: video, plugins:[new AutoPlay()] } )

button.onclick = () => player.tooglePlay()
mute.onclick = () => player.toogleMute()
import MediaPlayer from './MediaPlayer_Class.js'
import AutoPlay from './plugins/AutoPlay.js'
import AutoPause from './plugins/AutoPause.js'

const video = document.querySelector("video")
const button = document.getElementById("playButton")
const mute = document.getElementById("muteButton")

const player = new MediaPlayer( { el: video, plugins:[new AutoPlay(), new AutoPause()] } )

button.onclick = () => player.tooglePlay()
mute.onclick = () => player.toogleMute()

if ('serviceWorker' in navigator){    
    navigator.serviceWorker.register("/sw.js").catch(error => {
        console.log(error.message)
    })
}
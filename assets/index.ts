import MediaPlayer from './MediaPlayer'
import AutoPlay from './plugins/AutoPlay'
import AutoPause from './plugins/AutoPause'
import Ads from './plugins/Ads'

const video = document.querySelector("video")
const playButton: HTMLElement = document.querySelector("#playButton")
const mute: HTMLElement = document.querySelector("#muteButton")

const player = new MediaPlayer( { el: video, plugins:[new AutoPlay(), new AutoPause(), new Ads() ] } )

playButton.onclick = () => player.tooglePlay()
mute.onclick = () => player.toogleMute()

if ('serviceWorker' in navigator){    
    navigator.serviceWorker.register("/sw.js").catch(error => {
        console.log(error.message)
    })
}
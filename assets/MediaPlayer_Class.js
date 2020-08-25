class MediaPlayer {

    constructor(config){
        this.media = config.el
        this.plugins = config.plugins || []

        this._initPlugins()
    }

    _initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this)
        });
    }

    play() {
        this.media.play()
    }

    pause() {
        this.media.pause()
    }

    tooglePlay() {
        if(this.media.paused){
            this.play()
        }else{
            this.pause()
        }
    }

    mute(){
        this.media.muted = true
    }

    unmute(){
        this.media.muted = false
    }

    toogleMute(){
        if(this.media.muted){
            this.unmute()
        }else{
            this.mute()
        }
    }
}

export default MediaPlayer
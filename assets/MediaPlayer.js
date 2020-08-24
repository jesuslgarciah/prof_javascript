//es similar a un constructor en POO
function MediaPlayer(config) {
    this.media = config.el
    this.plugins = config.plugins || []

    this._initPlugins()
}

MediaPlayer.prototype._initPlugins = function (){
    this.plugins.forEach(plugin => {
        plugin.run(this)
    });
}

//es como el metodo play de la clase MediaPlayer
MediaPlayer.prototype.play = function(){
    this.media.play()
}

//es como el metodo pause de la clase MediaPlayer
MediaPlayer.prototype.pause = function(){
    this.media.pause()
}

//es como el metodo tooglePlay de la clase MediaPlayer
MediaPlayer.prototype.tooglePlay = function(){
    if(this.media.paused){
        this.play()
    }else{
        this.pause()
    }
}

//es como el metodo mute de la clase MediaPlayer
MediaPlayer.prototype.mute = function(){
    this.media.muted = true
}

//es como el metodo unmute de la clase MediaPlayer
MediaPlayer.prototype.unmute = function(){
    this.media.muted = false
}

//es como el metodo tooglePlay de la clase MediaPlayer
MediaPlayer.prototype.toogleMute = function(){
    if(this.media.muted){
        this.unmute()
    }else{
        this.mute()
    }
}

export default MediaPlayer
//es similar a un constructor en POO
class MediaPlayer {
    media: HTMLMediaElement
    plugins: Array<any>
    container: HTMLElement

    constructor(config) {
        this.media = config.el;
        this.plugins = config.plugins || [];
        this.initPlayer()
        this.initPlugins()
    }
    initPlayer(){
        this.container = document.createElement('div')
        this.container.style.position =  'relative'
        this.media.parentNode.insertBefore(this.container, this.media)
        this.container.appendChild(this.media)
    }
    private initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
    }
    //es como el metodo play de la clase MediaPlayer
    play() {
        this.media.play();
    }
    //es como el metodo pause de la clase MediaPlayer
    pause() {
        this.media.pause();
    }
    //es como el metodo tooglePlay de la clase MediaPlayer
    tooglePlay() {
        if (this.media.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    }
    //es como el metodo mute de la clase MediaPlayer
    mute() {
        this.media.muted = true;
    }
    //es como el metodo unmute de la clase MediaPlayer
    unmute() {
        this.media.muted = false;
    }
    //es como el metodo tooglePlay de la clase MediaPlayer
    toogleMute() {
        if (this.media.muted) {
            this.unmute();
        }
        else {
            this.mute();
        }
    }
}








export default MediaPlayer
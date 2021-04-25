window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return;
    audio.currentTime = 0; // rewind the audio to the start
    audio.play();

    key.classList.add('playing');
    
})

const removeTransition = (e) =>{
    if(e.propertyName === "transform") return;

    console.log(this);
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener("transitionend",removeTransition));
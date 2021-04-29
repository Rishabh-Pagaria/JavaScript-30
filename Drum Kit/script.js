window.addEventListener('keydown', function(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //stops the function from running all together
    audio.currentTime = 0; // rewind the audio to the start
    audio.play();
    
    key.classList.add('playing');
    
})

const removeTransition = (e) =>{
    // console.log(e) on console you'll see all the transitionends within the elapsed time
    // skip the transition if it's a transform
    if(e.propertyName !== "transform") return; 
    
    e.target.classList.remove("playing");
    // the classList basically returns the class names of an element 
    // console.log(e.target) so basically the target event returns the element that has triggered the event.
    // In our case the key has triggered the event as soon as we press the key button

}

const keys = Array.from(document.querySelectorAll('.key'));
keys.forEach(key => key.addEventListener("transitionend",removeTransition));

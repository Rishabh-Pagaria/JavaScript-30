const player = document.querySelector('.player');
const video = document.querySelector('.viewer');

const progress = document.querySelector('.progress');
const progressBar = document.querySelector('.progress__filled');

const toggle = document.querySelector('.toggle');
const skipButtons = document.querySelectorAll('[data-skip]');
const ranges = document.querySelectorAll('.player__slider');

//building out all functions
const togglePlay = ()=>{
    /* 
    const method = video.paused ? 'play' : 'pause';
    video[method]();
    */
    if(video.paused){
        video.play();
    }else{
        video.pause();
    }
}

const updateButton = (e)=>{
    const icon = e.target.paused ? "►" : "II";
    // console.log(icon);
    toggle.textContent = icon;
}
const skip = (e)=>{
    console.log(e.target.dataset.skip);
    video.currentTime += parseFloat(e.target.dataset.skip);
}
const handleRangeUpdate = (e)=>{
    video[e.target.name] = e.target.value;
}
const handleProgress = (e)=>{
    const percent = (video.currentTime/video.duration)*100;
    progressBar.style.flexBasis = `${percent}%`;
}
const scrubVideo = (e)=>{
    const scubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scubTime;
    console.log(e);
}


//Handling out all the event listeners
video.addEventListener('click', togglePlay);
toggle.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
video.addEventListener('timeupdate', handleProgress);
skipButtons.forEach(btn=> btn.addEventListener('click', skip));
ranges.forEach(range=> range.addEventListener('change', handleRangeUpdate));
ranges.forEach(range=> range.addEventListener('mousemove', handleRangeUpdate))
progress.addEventListener('click', scrubVideo);
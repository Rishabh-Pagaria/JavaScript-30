const canvas = document.getElementById('draw');
// getContext is the canvas object where we can draw
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = '#BADASS';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';


let isDrwaing = false;
let lastX = 0;
let lastY = 0;
let hue = 0
let direction = true;
// ctx.globalCompositeOperation = "multiply";

const draw = (e)=>{
  if(!isDrwaing){
    return; // this will stops the function from running when they are not moused down
  }
  // changing color off the stroke on moused down
  ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
  
  ctx.beginPath();
  // start from
  ctx.moveTo(lastX, lastY);
  // got to
  ctx.lineTo(e.offsetX, e.offsetY);
  ctx.stroke();
  // updating the values so that it doesn't always start from the begining 
  [lastX, lastY] = [e.offsetX, e.offsetY];
  hue += 1
  if(hue >= 300){
    hue = 0;
  }
  if(ctx.lineWidth >= 50 || ctx.lineWidth <= 1){
    direction = !direction;
  }
  if(direction){
    ctx.lineWidth += 1;
  }else{
    ctx.lineWidth -= 1;
  }

}

canvas.addEventListener('mousedown', (e) /* or ()*/ => {
  isDrwaing = true;
  [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', draw /* or ()*/=> isDrwaing = false);
canvas.addEventListener('mouseout', draw /* or ()*/=> isDrwaing = false);
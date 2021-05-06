// querySelectorAll takes all the input in form of Node List 
const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

const handleUpdate = (e)=>{
    const thi = e.target;
    // the dataset method showcase all the data attribute binding we have made in html
    // console.log(thi.dataset)
    const suffix = thi.dataset.sizing || '';
    // set property requires 2 arguments property(string), value
    document.documentElement.style.setProperty(`--${thi.name}`, thi.value+suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));

// the mousemove event usually fires up at an element when a pointing device (mouse) moves example sliders
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
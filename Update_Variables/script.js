const inputs = document.querySelectorAll('.controls input');
console.log(inputs);

const handleUpdate = (e)=>{
    const thi = e.target;
    const suffix = thi.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${thi.name}`, thi.value+suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
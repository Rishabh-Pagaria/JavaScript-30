const checkboxes = document.querySelectorAll('input[type="checkbox"]');
console.log(checkboxes);
let lastChecked;

const handleCheck = (e)=>{

    // check if the shiftKey is pressed
    //and check if the another box is checked
    let inBetween = false;
    if(e.shiftKey && e.target.checked){
        // loop over to every single checkbox
        checkboxes.forEach(checkbox => {
            console.log(checkbox);
            if(checkbox === e.target || checkbox === lastChecked){
                inBetween = !inBetween;
                console.log("I'm in Between");
            }
            if(inBetween){
                checkbox.checked = true;
            }
        })

    }


    lastChecked = e.target;

}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));
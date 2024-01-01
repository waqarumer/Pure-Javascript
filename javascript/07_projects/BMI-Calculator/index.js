const form = document.querySelector('form');

form.addEventListener('submit',function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')
    
    //console.log(height);
    //console.log(weight);

    if (height === '' || height < 0 || isNaN(height)) {
        results.innerHTML = `please enter a valid height ${ height}`;
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        
        results.innerHTML = `please give a valid weight ${weight}`
    } else {
        const bmi = weight / ((height*height)/10000).toFixed(2)

        if (bmi < 18.6) {
            results.innerHTML = `<span>${bmi} you are under weight`
        } 
        if (bmi >18.6 ){
            results.innerHTML = `<span>${bmi} you are in Normal Range`
        } 
        if (bmi > 24.9){
            results.innerHTML = `<span>${bmi} you are Over weight`
        }

        //show result
       // results.innerHTML = `<span>${bmi}</span>`
    }

})
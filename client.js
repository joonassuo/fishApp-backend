console.log('bitch');

const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const username = formData.get('username');
    const fishtype = formData.get('fishtype');
    const weight = formData.get('weight');
    
    const fish = {
        username,
        fishtype,
        weight
    }    

    console.log(JSON.stringify(fish));
    
});
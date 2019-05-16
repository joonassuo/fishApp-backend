const form = document.querySelector('form');
const logCatchButton = document.querySelector('.logCatchButton');

form.style.display = 'none';

logCatchButton.addEventListener('click', () => {
    if(form.style.display === 'none') {
        form.style.display = '';
    } else {
        form.style.display = 'none';
    }
})

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
    form.style.display = 'none';
    form.reset();
});
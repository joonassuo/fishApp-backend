const form = document.querySelector('form');
const logCatchButton = document.querySelector('.logCatchButton');
const API_URL = "http://localhost:5000/fish";

form.style.display = 'none';


// toggle form display
logCatchButton.addEventListener('click', () => {
    if(form.style.display === 'none') {
        form.style.display = '';
    } else {
        form.style.display = 'none';
    }
})


// submit-button event handler
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

    // POST to API_URL
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(fish),
        headers: {
            'content-type' : 'application/json'
        }
    }).then(response => response.json())
    .then(createdFish => {
        console.log(createdFish);
    })
});
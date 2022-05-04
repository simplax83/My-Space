const selectEl = document.getElementById('select');
const registrationImage = document.getElementById('planet-img');
const textToChange = document.getElementById('text-to-change');
const labels = document.querySelectorAll('label');
const options = document.querySelectorAll('option');
const button = document.querySelector('.form-submit-button');

selectEl.addEventListener('change', function() {
    switch(true) {
        case this.value === 'mercury' : registrationImage.src = "./img/Planet.svg";
        break;
        case this.value === 'uranus' : registrationImage.src = "./img/Uran.svg";
        break;
        case this.value === 'venus' : registrationImage.src = "./img/venus.png";
        case this.value === 'venus' : registrationImage.style.height='500px';
        break;
        case this.value === 'earth' : registrationImage.src = "./img/earth.png";
        case this.value === 'earth' : registrationImage.style.width='300px';
        case this.value === 'earth' : registrationImage.style.height='300px';
        break;
        case this.value === 'mars' : registrationImage.src = "./img/mars.png";
        case this.value === 'mars' : registrationImage.style.width='335px';
        case this.value === 'mars' : registrationImage.style.height='335px';
        break;
        case this.value === 'neptune' : registrationImage.src = "./img/neptune.png";
        case this.value === 'neptune' : registrationImage.style.width='335px';
        case this.value === 'neptune' : registrationImage.style.height='335px';
        break;
    }
    
})

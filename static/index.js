const firstDoseMenuItem = document.getElementById('first');
const secondDoseMenuItem = document.getElementById('second');
const maleDoseMenuItem = document.getElementById('male');
const femaleDoseMenuItem = document.getElementById('female');
const deathsMenuItem = document.getElementById('deaths');
const confirmedMenuItem = document.getElementById('confirmed');
const curedMenuItem = document.getElementById('cured');
const positiveMenuItem = document.getElementById('positive');
const vaccineMenuItem = document.getElementById('vaccine');

const imageContainer = document.getElementById('image-container');

const imagePlaceholder = document.getElementById('image-placeholder');

imageContainer.style.display = 'none';

firstDoseMenuItem.addEventListener('click', function() {

    if(imageContainer.style.display=='none'){
        imageContainer.style.display='flex';
        imageContainer.innerHTML = '<img src="' + image1Url + '" alt="First Dose Image">';
        imagePlaceholder.style.width = '700px';
    }
    if(imageContainer.style.display=='flex'){
        imageContainer.innerHTML = '<img src="' + image1Url + '" alt="Second Dose Image">';
        imagePlaceholder.style.width = '700px';
    }
    
});

secondDoseMenuItem.addEventListener('click', function() {

    if(imageContainer.style.display=='none'){
        imageContainer.style.display='flex';
        imageContainer.innerHTML = '<img src="' + image2Url + '" alt="Second Dose Image">';
    }
    if(imageContainer.style.display=='flex'){
        imageContainer.innerHTML = '<img src="' + image2Url + '" alt="Second Dose Image">';
    }
});

maleDoseMenuItem.addEventListener('click', function() {

    if(imageContainer.style.display=='none'){
        imageContainer.style.display='flex';
        imageContainer.innerHTML = '<img src="' + image3Url + '" alt="Second Dose Image">';
    }
    if(imageContainer.style.display=='flex'){
        imageContainer.innerHTML = '<img src="' + image3Url + '" alt="Second Dose Image">';
    }
});

femaleDoseMenuItem.addEventListener('click', function() {

    if(imageContainer.style.display=='none'){
        imageContainer.style.display='flex';
        imageContainer.innerHTML = '<img src="' + image4Url + '" alt="Second Dose Image">';
    }
    if(imageContainer.style.display=='flex'){
        imageContainer.innerHTML = '<img src="' + image4Url + '" alt="Second Dose Image">';
    }
});

deathsMenuItem.addEventListener('click', function() {

    if(imageContainer.style.display=='none'){
        imageContainer.style.display='flex';
        imageContainer.innerHTML = '<img src="' + image5Url + '" alt="Second Dose Image">';
    }
    if(imageContainer.style.display=='flex'){
        imageContainer.innerHTML = '<img src="' + image5Url + '" alt="Second Dose Image">';
    }
});

confirmedMenuItem.addEventListener('click', function() {

    if(imageContainer.style.display=='none'){
        imageContainer.style.display='flex';
        imageContainer.innerHTML = '<img src="' + image6Url + '" alt="Second Dose Image">';
    }
    if(imageContainer.style.display=='flex'){
        imageContainer.innerHTML = '<img src="' + image6Url + '" alt="Second Dose Image">';
    }
});

curedMenuItem.addEventListener('click', function() {

    if(imageContainer.style.display=='none'){
        imageContainer.style.display='flex';
        imageContainer.innerHTML = '<img src="' + image7Url + '" alt="Second Dose Image">';
    }
    if(imageContainer.style.display=='flex'){
        imageContainer.innerHTML = '<img src="' + image7Url + '" alt="Second Dose Image">';
    }
});

positiveMenuItem.addEventListener('click', function() {

    if(imageContainer.style.display=='none'){
        imageContainer.style.display='flex';
        imageContainer.innerHTML = '<img src="' + image8Url + '" alt="Second Dose Image">';
    }
    if(imageContainer.style.display=='flex'){
        imageContainer.innerHTML = '<img src="' + image8Url + '" alt="Second Dose Image">';
    }
});

vaccineMenuItem.addEventListener('click', function() {

    if(imageContainer.style.display=='none'){
        imageContainer.style.display='flex';
        imageContainer.innerHTML = '<img src="' + image9Url + '" alt="Second Dose Image">';
    }
    if(imageContainer.style.display=='flex'){
        imageContainer.innerHTML = '<img src="' + image9Url + '" alt="Second Dose Image">';
    }
});
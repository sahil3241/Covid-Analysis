const firstDoseMenuItem = document.getElementById('first');
const secondDoseMenuItem = document.getElementById('second');


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
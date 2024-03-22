const firstDoseMenuItem = document.getElementById('first');
const secondDoseMenuItem = document.getElementById('second');


const imageContainer = document.getElementById('image-container');

firstDoseMenuItem.addEventListener('click', function() {
    // Update the image source to the first dose image
    imageContainer.innerHTML = '<img src="' + image1Url + '" alt="First Dose Image">';
});

secondDoseMenuItem.addEventListener('click', function() {
    // Update the image source to the second dose image
    imageContainer.innerHTML = '<img src="' + image2Url + '" alt="Second Dose Image">';
});
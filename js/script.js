function zoomImage(img) {
    var zoomedImg = document.getElementById('zoomedImg');
    zoomedImg.src = img.src;

    var overlay = document.querySelector('.overlay');
    var zoomContainer = document.querySelector('.zoom-container');

    overlay.style.display = 'block';
    zoomContainer.style.display = 'block';
}

function closeImage() {
    var overlay = document.querySelector('.overlay');
    var zoomContainer = document.querySelector('.zoom-container');

    overlay.style.display = 'none';
    zoomContainer.style.display = 'none';
}

const emailForm = document.getElementById('emailForm');
const emailInput = document.getElementById('email');
const resultDiv = document.getElementById('result');

emailForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const emailValue = emailInput.value.trim();
    if (validateEmail(emailValue)) {
        resultDiv.textContent = 'Email is valid';
        resultDiv.style.color = 'green';
    } else {
        resultDiv.textContent = 'Please enter a valid email';
        resultDiv.style.color = 'red';
    }
});

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
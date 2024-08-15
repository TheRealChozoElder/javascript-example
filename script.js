const windowSizeElement = document.getElementById('window-size');
const responsiveImage = document.getElementById('responsive-image');

function updateWindowSize() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    windowSizeElement.textContent = 'Window size: '+ width + 'px x ' + height + 'px';

    if (width > 768) {
        responsiveImage.style.width = '40%';
    } else {
        responsiveImage.style.width = '100%';
    }
}

window.addEventListener('resize', updateWindowSize);

updateWindowSize();
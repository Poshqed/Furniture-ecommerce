cancelBtn = document.querySelector('.js-cancel-btn');
ul = document.querySelector('.js-ul');
collapseBtn = document.querySelector('.js-collapse-btn');
slider = document.querySelector('.js-image-slider');


collapseBtn.addEventListener('click', addUl)
cancelBtn.addEventListener('click', removeUl);

function addUl() {
    collapseBtn.style.display = 'none';
    cancelBtn.style.display = 'block'
    ul.style.display = 'block';
}

function removeUl() {
    ul.style.display = 'none';
    cancelBtn.style.display = 'none';
    collapseBtn.style.display = 'block'
}

(function () {
    var i = 0;
    var imageArray = ['slider 1.jpeg', 'slider 2.jpeg', 'slider 3.jpeg', 'slider 4.avif', 'slider 5.jpeg', 'slider 6.jpeg', 'showcase img.jpeg'];
    function changeImage() {
        slider.src = imageArray[i];
        i = (i + 1) % imageArray.length;
    }
    setInterval(changeImage, 2000)
})();      
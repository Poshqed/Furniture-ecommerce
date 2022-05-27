cancelBtn = document.querySelector('.js-cancel-btn');
ul = document.querySelector('.js-ul');
collapseBtn = document.querySelector('.js-collapse-btn')


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
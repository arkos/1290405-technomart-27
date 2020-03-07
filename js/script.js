var mapButton = document.querySelector('.mini-map');
var mapPopup = document.querySelector('.modal-map');
var mapClose = document.querySelector('.modal-map .modal-close');

var writeUsButton = document.querySelector('.write-us');
var writeUsPopup = document.querySelector('.modal-contact');
var writeUsClose = document.querySelector('.modal-contact .modal-close');

mapButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
})

mapClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove('modal-show');
})

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains('modal-show')) {
            evt.preventDefault();
            mapPopup.classList.remove('modal-show');
        }
    }
})

// Modal dialog 'Write Us'

writeUsButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    writeUsPopup.classList.add("modal-show");
})

writeUsClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    writeUsPopup.classList.remove('modal-show');
})

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        if (writeUsPopup.classList.contains('modal-show')) {
            evt.preventDefault();
            writeUsPopup.classList.remove('modal-show');
        }
    }
})
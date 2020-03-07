var mapButton = document.querySelector('.mini-map');
var mapPopup = document.querySelector('.modal-map');
var mapClose = document.querySelector('.modal-map .modal-close');

var writeUsButton = document.querySelector('.write-us');
var writeUsPopup = document.querySelector('.modal-contact');
var writeUsClose = document.querySelector('.modal-contact .modal-close');

var buyButtons = document.querySelectorAll('.buy');
var buyPopup = document.querySelector('.modal-product-added');
var buyClose = document.querySelector('.modal-product-added .modal-close');

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

// Modal dialog 'Product Added To Cart'

for (var i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener('click', onBuyButton);
}

buyClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  buyPopup.classList.remove('modal-show');
})

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
      if (buyPopup.classList.contains('modal-show')) {
          evt.preventDefault();
          buyPopup.classList.remove('modal-show');
      }
  }
})

function onBuyButton(evt) {
  evt.preventDefault();
  buyPopup.classList.add("modal-show");
}

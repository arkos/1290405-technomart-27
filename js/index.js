var mapButton = document.querySelector('.mini-map');
var mapPopup = document.querySelector('.modal-map');
var mapClose = document.querySelector('.modal-map .modal-close');

var writeUsButton = document.querySelector('.write-us');
var writeUsPopup = document.querySelector('.modal-contact');
var writeUsClose = document.querySelector('.modal-contact .modal-close');
var fullName = writeUsPopup.querySelector('[name=fullname]');
var email = writeUsPopup.querySelector('[name=email]');
var comments = writeUsPopup.querySelector('[name=comments]');
var writeUsForm = writeUsPopup.querySelector('form');

var hasStorage = true;
var storage = null;

try {
  storage = localStorage.getItem("fullName");
}
catch (e) {
  hasStorage = false;
}

var buyButtons = document.querySelectorAll('.buy');
var buyPopup = document.querySelector('.modal-product-added');
var buyClose = document.querySelector('.modal-product-added .modal-close');

mapButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");
});

mapClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        if (mapPopup.classList.contains('modal-show')) {
            evt.preventDefault();
            mapPopup.classList.remove('modal-show');
        }
    }
});

// Modal dialog 'Write Us'

writeUsButton.addEventListener('click', function(evt) {
    evt.preventDefault();
    writeUsPopup.classList.add("modal-show");

    if (storage) {
      fullName.value = storage;
      email.value = storage;
      comments.focus();
    }
    else {
      fullName.focus();
    }
});

writeUsClose.addEventListener('click', function(evt) {
    evt.preventDefault();
    writeUsPopup.classList.remove('modal-show');
    writeUsPopup.classList.remove('modal-error');
});

writeUsForm.addEventListener('submit', function(evt) {
  if (!fullName.value || !email.value || !comments.value) {
    evt.preventDefault();
    writeUsPopup.classList.remove('modal-error');
    writeUsPopup.offsetWidth = writeUsPopup.offsetWidth;
    writeUsPopup.classList.add('modal-error');
  }
  else {
    if (hasStorage) {
      localStorage.setItem("fullName", fullName.value);
    }
  }
});

window.addEventListener('keydown', function(evt) {
    if (evt.keyCode === 27) {
        if (writeUsPopup.classList.contains('modal-show')) {
            evt.preventDefault();
            writeUsPopup.classList.remove('modal-show');
            writeUsPopup.classList.remove('modal-error');
        }
    }
});

// Modal dialog 'Product Added To Cart'

for (var i = 0; i < buyButtons.length; i++) {
  buyButtons[i].addEventListener('click', onBuyButton);
}

buyClose.addEventListener('click', function(evt) {
  evt.preventDefault();
  buyPopup.classList.remove('modal-show');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
      if (buyPopup.classList.contains('modal-show')) {
          evt.preventDefault();
          buyPopup.classList.remove('modal-show');
      }
  }
});

function onBuyButton(evt) {
  evt.preventDefault();
  buyPopup.classList.add("modal-show");
}

var buyButtons = document.querySelectorAll('.buy');
var buyPopup = document.querySelector('.modal-product-added');
var buyClose = document.querySelector('.modal-product-added .modal-close');

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
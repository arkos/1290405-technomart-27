var mapButton=document.querySelector(".mini-map"),mapPopup=document.querySelector(".modal-map"),mapClose=document.querySelector(".modal-map .modal-close"),writeUsButton=document.querySelector(".write-us"),writeUsPopup=document.querySelector(".modal-contact"),writeUsClose=document.querySelector(".modal-contact .modal-close"),fullName=writeUsPopup.querySelector("[name=fullname]"),email=writeUsPopup.querySelector("[name=email]"),comments=writeUsPopup.querySelector("[name=comments]"),writeUsForm=writeUsPopup.querySelector("form"),hasStorage=!0,storage=null;try{storage=localStorage.getItem("fullName")}catch(e){hasStorage=!1}var buyButtons=document.querySelectorAll(".buy"),buyPopup=document.querySelector(".modal-product-added"),buyClose=document.querySelector(".modal-product-added .modal-close");mapButton.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.add("modal-show")}),mapClose.addEventListener("click",function(e){e.preventDefault(),mapPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&mapPopup.classList.contains("modal-show")&&(e.preventDefault(),mapPopup.classList.remove("modal-show"))}),writeUsButton.addEventListener("click",function(e){e.preventDefault(),writeUsPopup.classList.add("modal-show"),storage?(fullName.value=storage,email.value=storage,comments.focus()):fullName.focus()}),writeUsClose.addEventListener("click",function(e){e.preventDefault(),writeUsPopup.classList.remove("modal-show"),writeUsPopup.classList.remove("modal-error")}),writeUsForm.addEventListener("submit",function(e){fullName.value&&email.value&&comments.value?hasStorage&&localStorage.setItem("fullName",fullName.value):(e.preventDefault(),writeUsPopup.classList.remove("modal-error"),writeUsPopup.offsetWidth=writeUsPopup.offsetWidth,writeUsPopup.classList.add("modal-error"))}),window.addEventListener("keydown",function(e){27===e.keyCode&&writeUsPopup.classList.contains("modal-show")&&(e.preventDefault(),writeUsPopup.classList.remove("modal-show"),writeUsPopup.classList.remove("modal-error"))});for(var i=0;i<buyButtons.length;i++)buyButtons[i].addEventListener("click",onBuyButton);function onBuyButton(e){e.preventDefault(),buyPopup.classList.add("modal-show")}buyClose.addEventListener("click",function(e){e.preventDefault(),buyPopup.classList.remove("modal-show")}),window.addEventListener("keydown",function(e){27===e.keyCode&&buyPopup.classList.contains("modal-show")&&(e.preventDefault(),buyPopup.classList.remove("modal-show"))});
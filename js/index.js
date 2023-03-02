var consultWrapper = document.querySelector('.consultation');
var consultPopup = document.querySelector('.consultation-form');
var confirmPopup = document.querySelector('.confirmation');
var openPopupBtn = document.querySelector('.open-btn');
var submitPopupBtn = document.querySelector('.submit-btn');

function openConsultationForm() {
    consultWrapper.style.visibility = 'visible';
    consultPopup.style.visibility = 'visible';
}
function closePopup(wrapper, popup) {
    var elWrapper = '.' + wrapper;
    var elPopup = '.' + popup;
    document.querySelector(elWrapper).style.visibility = 'hidden';
    document.querySelector(elPopup).style.visibility = 'hidden';

}
function openConfirmation() {
    consultPopup.style.visibility = 'hidden';
    confirmPopup.style.visibility = 'visible';
}

openPopupBtn.addEventListener('click', openConsultationForm);
submitPopupBtn.addEventListener('click', openConfirmation);

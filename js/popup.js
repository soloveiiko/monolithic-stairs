var consultBody = document.querySelector('.consultation-popup'),
    consultPopup = document.querySelector('.consultation'),
    confirmPopup = document.querySelector('.confirmation'),
    openPopupBtn = document.querySelector('.open-btn'),
    submitPopupBtn = document.querySelector('.submit-btn');

function classToggle(e, classEl) {
    e.classList.toggle(classEl);
}

function openConsultationForm() {
    classToggle(consultBody, 'show-body'); // true.
    var consultClass = consultPopup.className;
    if (consultClass = 'hide-consultation') {
        consultPopup.classList.remove('hide-consultation');
    }
}
function openConfirmation() {
    classToggle(confirmPopup, 'show-confirmation'); // true.
    consultPopup.classList.add('hide-consultation');
}
function closePopup() {
    classToggle(consultBody, 'show-body'); //false.

    if (confirmPopup.classList.toggle('show-confirmation')) {
        classToggle(confirmPopup, 'show-confirmation'); // false.
    }
}
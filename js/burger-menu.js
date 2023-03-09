var burgerBtn = document.querySelector('.burger-button'),
    dropdownMenu = document.querySelector('.header__dropdown-container');

function openDropdown() {
    dropdownMenu.classList.toggle('show-dropdown');
}
burgerBtn.addEventListener('click', openDropdown);
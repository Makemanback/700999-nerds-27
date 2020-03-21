// кнопка открытия модального окна
let button = document.querySelector(".contacts_button");
// контейнер модального окна
let modal = document.querySelector(".container_popup");
// закрытие модального окна
let closeModal = document.querySelector(".popup_close");
// слайды
let slider = document.querySelector(".slider_wrapper");

slider
// прячем модальное окно
modal.classList.add("not_visible");

// открываем при нажатии кнопки
button.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.remove("not_visible");
});

// прячем при нажатии на кнопку закрытия
closeModal.addEventListener("click", function(evt) {
  evt.preventDefault();
  modal.classList.add("not_visible");
});


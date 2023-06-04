'use strict';

const qsModal = document.querySelector('.modal');
const qsOverlay = document.querySelector('.overlay');
const qsCloseModal = document.querySelector('.close-modal');
const qsButtonsOpenModal = document.querySelectorAll('.show-modal');

const openModal = function () {
  qsModal.classList.remove('hidden');
  qsOverlay.classList.remove('hidden');
};

const closeModal = function () {
  qsModal.classList.add('hidden');
  qsOverlay.classList.add('hidden');
};

qsCloseModal.addEventListener('click', closeModal);
qsOverlay.addEventListener('click', closeModal);
qsButtonsOpenModal.forEach(element => {
  element.addEventListener('click', openModal);
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !qsModal.classList.contains('hidden')) {
    closeModal();
  }
});

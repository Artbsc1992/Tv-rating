import '../assets/icons/logo.png';
import '../assets/icons/fav.png';
import './style.css';
import showPopUp from './modules/reservations.js';

const reservationBtns = document.querySelectorAll('[data-reservation]');

reservationBtns.forEach((reservationBtn) => {
  reservationBtn.addEventListener('click', (e) => showPopUp(e.target.dataset.id));
});
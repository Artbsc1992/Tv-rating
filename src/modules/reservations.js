import { fetchReservations, fetchShow } from './reservations-api.js';

const reservationsPopUp = document.createElement('div');
reservationsPopUp.classList.add('reservations');

const closePopUp = () => {
  document.body.removeChild(reservationsPopUp);
  reservationsPopUp.innerHTML = '';
};

const renderReservations = async (showId, container) => {
  const reservations = await fetchReservations(showId);

}

const showPopUp = async (showId) => {
  try {
    document.body.append(reservationsPopUp);
    const show = await fetchShow(showId);
    reservationsPopUp.innerHTML = `
      <div class="reservation-inner">
        <span id="close-reservation-popup" ><img src="./img/close.png" alt="Close Reservation Popup"/></span>
        <section class="reservation-heading">
          <img src="${show.image.original}" alt="${show.name}" />
          <ul>
            <li><h2>${show.name}</h2></li> 
            <li>${show.summary}</li>
            <li>Language: ${show.language}</li>
            <li>Avg. Rating: ${show.rating.average}</li>
            <li>Show type:  ${show.type}</li>
            <li>Genres: ${show.genres.map((genre) => `<span class="genre-label"> ${genre}</span>`)}</li>
          </ul>
        </section>
        <section id="show-reservations">
          <ul class="reservations-list">
          </ul>
        </section>
      </div>
    `;
    const reservationsListContainer = reservationsPopUp.getElementById('show-reservations');
    renderReservations(showId, reservationsListContainer);

  } catch (error) {
    reservationsPopUp.innerHTML = `
      <div class="reservation-inner">
        <span id="close-reservation-popup" ><img src="./img/close.png" alt="Close Reservation Popup"/></span>
        <p>Something went wrong. Please try again later. </p>
        <small>${error && error}</small>
      </div>
    `;
  }

  reservationsPopUp.querySelector('#close-reservation-popup').addEventListener('click', closePopUp);
};

export default showPopUp;
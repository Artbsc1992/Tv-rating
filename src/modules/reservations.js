import { fetchShow, fetchReservations } from './reservations-api.js';

const reservationsPopUp = document.createElement('div');
reservationsPopUp.classList.add('reservations');

const closePopUp = () => {
  document.body.classList.remove('notScrollable');
  document.body.removeChild(reservationsPopUp);
  reservationsPopUp.innerHTML = '';
};

const renderReservations = async (showId, container) => {
  container = container.querySelector('ul');
  container.innerHTML = '';
  try {
    const reservations = await fetchReservations(showId);
    reservations.forEach((reservation) => {
      const item = document.createElement('li');
      item.innerHTML = `
        ${reservation.date_start} to ${reservation.date_end} by ${reservation.username}
      `;
      container.append(item);
    });
  } catch (error) {
    const item = document.createElement('li');
    item.innerHTML = `
      <span class="reservations-error">${error}</span>
    `;
    container.append(item);
  }
};

const showPopUp = async (showId) => {
  try {
    document.body.classList.add('notScrollable');
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
            <li>Official Site <a href="${show.officialSite}">🌐</a></li>
            </ul>
        </section>
        <section id="show-reservations">
          <h3>Show's Reservations</h3>
          <ul class="reservations-list">
          </ul>
        </section>
        <section id="reservation-form">
          <h3>Add a Reservation</h3>
          <form name="reservationForm">
            <input type="text" name="username" id="username" placeholder="Your name" />
            <input type="text" name="date_start" id="date_start" placeholder="Start date" />
            <input type="text" name="date_end" id="date_end" placeholder="End date" />
            <input type="hidden" name="item_id" id="item_id" value="${show.id}" />
            <button type="submit">Reserve</button>
          </form>
        </section>
      </div>
    `;
    const reservationsListContainer = reservationsPopUp.querySelector('#show-reservations');
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
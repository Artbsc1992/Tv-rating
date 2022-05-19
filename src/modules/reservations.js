import { fetchShow, fetchReservations, postReservation } from './reservations-api.js';

const reservationsPopUp = document.createElement('div');
reservationsPopUp.classList.add('reservations');

const closePopUp = () => {
  document.body.classList.remove('notScrollable');
  document.body.removeChild(reservationsPopUp);
  reservationsPopUp.innerHTML = '';
};

export const resCounter = (reservationsList) => reservationsList.length;

const renderReservations = async (showId, container) => {
  const counterContainer = container.querySelector('#reservations-counter');
  container = container.querySelector('ul');
  container.innerHTML = '';
  try {
    const reservations = await fetchReservations(showId);
    counterContainer.innerHTML = resCounter(reservations);
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

const addReservation = async (username, dateStart, dateEnd, itemId) => {
  const formStatus = document.getElementById('form-status');
  try {
    await postReservation({
      username, date_start: dateStart, date_end: dateEnd, item_id: itemId,
    });
    formStatus.classList.add('success');
    formStatus.innerHTML = 'Reservation Added';
    formStatus.hidden = false;
    setTimeout(() => {
      formStatus.hidden = true;
    }, 2000);
  } catch (error) {
    formStatus.classList.add('error');
    formStatus.innerHTML = error;
    formStatus.hidden = false;
    setTimeout(() => {
      formStatus.hidden = true;
    }, 2000);
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
          <h3>Show's Reservations <span id="reservations-counter" class="badge">0</span></h3>
          <ul class="reservations-list">
          </ul>
        </section>
        <section id="reservation-form">
          <h3>Add a Reservation</h3>
          <form id="add-reservation">
            <span id="form-status"></span>
            <input type="text" name="username" id="username" placeholder="Your name" />
            <input type="date" name="date_start" id="date_start" placeholder="Start date"  />
            <input type="date" name="date_end" id="date_end" placeholder="End date"  />
            <button type="submit">Reserve</button>
          </form>
        </section>
      </div>
    `;
    const reservationsListContainer = reservationsPopUp.querySelector('#show-reservations');
    const reservationForm = reservationsPopUp.querySelector('#add-reservation');
    reservationForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const { username, date_start: dateStart, date_end: dateEnd } = reservationForm.elements;
      await addReservation(username.value, dateStart.value, dateEnd.value, showId);
      await renderReservations(showId, reservationsListContainer);
      reservationForm.reset();
    });
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
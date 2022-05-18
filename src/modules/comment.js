import { fetchShow, fetchcomments } from './reservations-api.js';

const comment = document.createElement('div');
comment.classList.add('reservations');

const closePopUp = () => {
  document.body.removeChild(comment);
  comment.innerHTML = '';
};

const renderComments = async (showId, container) => {
  container = container.querySelector('ul');
  container.innerHTML = '';
  try {
    const reservations = await fetchcomments(showId);
    reservations.forEach((comments) => {
      const item = document.createElement('li');
      item.innerHTML = `
        ${comments.date_start} to ${comments.date_end} by ${comments.username}
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

const showPop = async (showId) => {
  try {
    document.body.append(comment);
    const show = await fetchShow(showId);
    comment.innerHTML = ` <div class="reservation-inner">
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
      <h3>comments</h3>
      <ul class="reservations-list">
      </ul>
      </section>
      <div class="comment-sec">
      <h2>Add a comment</h2>
      <form action="">
      <input type="text" placeholder="Your name">
      <textarea name="" id="" cols="10" rows="10" placeholder="your insights" ></textarea>
      </form>
      </div>
      </div>
    `;
    const commentscontainer = comment.querySelector('#show-reservations');
    renderComments(showId, commentscontainer);
  } catch (error) {
    comment.innerHTML = `
      <div class="reservation-inner">
        <span id="close-reservation-popup" ><img src="./img/close.png" alt="Close Reservation Popup"/></span>
        <p>Something went wrong. Please try again later. </p>
        <small>${error && error}</small>
      </div>
    `;
  }

  comment.querySelector('#close-reservation-popup').addEventListener('click', closePopUp);
};

export default showPop;

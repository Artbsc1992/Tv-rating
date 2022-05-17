import { fetchShow } from "./reservations-api";
const reservationsPopUp = document.createElement('div');
reservationsPopUp.classList.add('reservations');

const showPopUp = async (showId) => {
  try {
    const show = await fetchShow(showId);
    reservationsPopUp.innerHTML = `
      <div class="reservation-inner">
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
      </div>
    `
  } catch (error) {
    reservationsPopUp.innerHTML = `
      <div class="reservation-inner"> 
        <p>Something went wrong. Please try again later. </p>
        <small>${error && error}</small>
      </div>
    `
  }

  document.body.append(reservationsPopUp);
}

export default showPopUp;
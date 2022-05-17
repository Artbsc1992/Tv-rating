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
            <li>Network:  ${show.network.name} (${show.network.country.code})</li>
            <li>Genres: ${show.genres.map((genre) => `<span class="genre-label"> ${genre}</span>`)}</li>
          </ul>
        </section>
      </div>
    `
  } catch (error) {
    reservationsPopUp.innerHTML = `
      Error HTML goes here
    `
  }
  document.body.append(reservationsPopUp);

}

export default showPopUp;
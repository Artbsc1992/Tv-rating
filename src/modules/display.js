import fetchShows from './fetchAPI.js';
import showPopUp from "./reservations";
const ul = document.createElement('ul');
ul.classList = 'showList';
const div = document.querySelector('.shows');
div.append(ul);
const render = async () => {
  ul.innerHTML = '';
  const shows = await fetchShows();
  shows.forEach((show) => {
    const li = document.createElement('li');
    li.innerHTML = `
            <img src="${show.img}" alt="logo">
            <p>${show.name} ${show.id}</p>
            <button type='button'>Comments</button>
            <button data-reservation="true" data-id="${show.id}">Reservations</button>
        `;

    const reservationBtn = li.querySelector('[data-reservation]');

    ul.append(li);
    reservationBtn.addEventListener('click', (e) => showPopUp(e.target.dataset.id));

  });
};

export default render;
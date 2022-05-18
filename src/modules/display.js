import fetchShows from './fetchAPI.js';

import showPopUp from './reservations';

import showPop from './comment';

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
            <button data-comment="true" data-id="${show.id}">Comments</button>
            <button data-reservation="true" data-id="${show.id}">Reservations</button>
        `;
    const reservationBtn = li.querySelector('[data-reservation]');

    ul.append(li);
    reservationBtn.addEventListener('click', (e) => showPopUp(e.target.dataset.id));

    const commentBtn = li.querySelector('[data-comment]');

    ul.append(li);
    commentBtn.addEventListener('click', (e) => showPop(e.target.dataset.id));

  });
};

export default render;
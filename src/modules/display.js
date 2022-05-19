import fetchShows from './fetchAPI.js';

import showPopUp from './reservations.js';

import showPop from './comment.js';

import counterShows from './counter-shows.js';

import { getLikes, putLikes } from './likesApi.js';

const ul = document.createElement('ul');
ul.classList = 'showList';
const div = document.querySelector('.shows');
div.append(ul);
const counter = document.querySelector('a');

const filterLikes = (showId, likesList) => {
  const result = likesList.find((item) => +item.item_id === showId);
  if (!result) {
    return 0;
  }
  return result.likes;
};

const render = async () => {
  ul.innerHTML = '';
  const shows = await fetchShows();
  
  counter.textContent = `Shows (${counterShows(shows)})`;

  const fetchedLikes = await getLikes();
  shows.forEach((show) => {
    const li = document.createElement('li');
    let likes = filterLikes(show.id, fetchedLikes);
    li.innerHTML = `
            <img src="${show.img}" alt="movie">
            <p class='show-name'>${show.name} ${show.id}</p>
            <button type='button' data-id='${show.id}' class='like'>Likes ${likes}</button>
            <span class='heart'></span>
            <button data-comment="true" data-id="${show.id}">Comments</button>
            <button data-reservation="true" data-id="${show.id}">Reservations</button>
        `;
    const reservationBtn = li.querySelector('[data-reservation]');

    ul.append(li);
    reservationBtn.addEventListener('click', (e) => showPopUp(e.target.dataset.id));

    const commentBtn = li.querySelector('[data-comment]');

    ul.append(li);
    commentBtn.addEventListener('click', (e) => showPop(e.target.dataset.id));

    const heartContainer = li.querySelector('.heart');
    const likeBtn = li.querySelector('.like');
    likeBtn.addEventListener('click', async () => {
      heartContainer.classList.add('active');
      await putLikes(show.id);
      likeBtn.innerHTML = `Likes ${likes += 1}`;
    });
  });
};

export default render;
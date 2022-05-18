import fetchShows from './fetchAPI.js';

import showPopUp from './reservations.js';

import showPop from './comment.js';

import { getLikes, putLikes } from './likesApi.js';

const ul = document.createElement('ul');
ul.classList = 'showList';
const div = document.querySelector('.shows');
div.append(ul);

const filterLikes = (showId, likesList) => {
  const result = likesList.find((item) =>{return +item.item_id === showId})
  if(!result){
    return `Likes 0`;
  } else {
    return `Likes ${result.likes}`;
  }
}
const render = async () => {
  ul.innerHTML = '';
  const shows = await fetchShows();
  const fetchedLikes = await getLikes();
  shows.forEach((show) => {
    const li = document.createElement('li');
    const likes = filterLikes(show.id, fetchedLikes)
    li.innerHTML = `
            <img src="${show.img}" alt="movie">
            <p class='show-name'>${show.name} ${show.id}</p>
            <button data-id='${show.id}' class='like'>${likes}</button>
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
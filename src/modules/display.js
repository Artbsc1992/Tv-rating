import fetchShows from './fetchAPI.js';

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
    ul.append(li);
  });
};

export default render;
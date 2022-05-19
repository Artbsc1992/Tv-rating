import { fetchShow, fetchcomments, postComment } from './reservations-api.js';

const comment = document.createElement('div');
comment.classList.add('reservations');

const closePopUp = () => {
  document.body.removeChild(comment);
  comment.innerHTML = '';
};

export const commentCounter = (commentsList) => commentsList.length;

const renderComments = async (showId, container) => {
  const counterContainer = container.querySelector('#reservations-counter');
  container = container.querySelector('ul');
  container.innerHTML = '';
  try {
    const comm = await fetchcomments(showId);
    counterContainer.innerHTML = commentCounter(comm);
    comm.forEach((comments) => {
      const item = document.createElement('li');
      item.innerHTML = `
      <fieldset class='field' > 
      <legend class='len' >${comments.username}</legend>
      ${comments.comment} 
      </fieldset>
      
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

const addcomments = async (username, comment, itemId) => {
  const formStatus = document.getElementById('form-status');
  try {
    await postComment({
      username, comment, item_id: itemId,
    });
    formStatus.classList.add('success');
    formStatus.innerHTML = 'Comment Added';
    setTimeout(() => {
      formStatus.remove();
    }, 2000);
  } catch (error) {
    formStatus.classList.add('error');
    formStatus.innerHTML = error;
    setTimeout(() => {
      formStatus.remove();
    }, 2000);
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
      <h3> ( <span id="reservations-counter">0</span> ) Comments</h3>
      <ul class="reservations-list">
      </ul>
      </section>
      <div class="comment-sec">
      <h2>Add a comment</h2>
      <form action="" id="add" >
      <span id="form-status"></span>
      <input type="text" name="username" placeholder="Your name" required >
      <textarea name="comment" id="" cols="10" rows="10" placeholder="your insights" required ></textarea>
      <button type="submit"> Post </button>
      </form>
      </div>
      </div>
    `;
    const commentscontainer = comment.querySelector('#show-reservations');

    const commentForm = comment.querySelector('#add');
    commentForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const { username, comment } = commentForm.elements;
      await addcomments(username.value, comment.value, showId);
      await renderComments(showId, commentscontainer);
      commentForm.reset();
    });
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

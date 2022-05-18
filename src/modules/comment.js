import fetchShow from "./reservations-api.js";

const comment = document.createElement("div");
comment.classList.add("comment");

const closePopUp = () => {
  document.body.removeChild(comment);
  comment.innerHTML = "";
};

const showPop = async (showId) => {
  try {
    document.body.append(comment);
    const show = await fetchShow(showId);
    comment.innerHTML = ` <div class="img-sec">
    <img class="movie-img" src="${show.image.original}" alt="${show.name}">
    <span id="close-reservation-popup"><img src="./img/close.png" alt="Close Reservation Popup"/></span>
</div>
<div class="detail-sec" >
<h2> ${show.name} </h2>
<div class="movie-details">
    <ul>
    <li>${show.summary}</li>
    <li>Language: ${show.language}</li>
    <li>Avg. Rating: ${show.rating.average}</li>
    <li>Show type:  ${show.type}</li>
    <li>Genres: ${show.genres.map(
      (genre) => `<span class="genre-label"> ${genre}</span>`
    )}</li>
    </ul>
</div>
</div>
<div class="comment-sec">
    <h2>Add a comment</h2>
    <form action="">
        <input type="text" placeholder="Your name">
        <textarea name="" id="" cols="10" rows="10" placeholder="your insights" ></textarea>
    </form>
</div>
    `;
  } catch (error) {
    comment.innerHTML = `
      <div class="reservation-inner">
        <span id="close-reservation-popup" ><img src="./img/close.png" alt="Close Reservation Popup"/></span>
        <p>Something went wrong. Please try again later. </p>
        <small>${error && error}</small>
      </div>
    `;
  }

  comment
    .querySelector("#close-reservation-popup")
    .addEventListener("click", closePopUp);
};

export default showPop;

const fetchShow = async (showId) => {
  const res = await fetch(`https://api.tvmaze.com/shows/${showId}`);
  if (!res.ok) {
    throw new Error('Something went wrong fetching the given show.');
  }
  const show = await res.json();
  return show;
};

const fetchReservations = async (showId) => {
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/RAGwAMc1vyzTWmF6xGjO/reservations?item_id=${showId}`)
  if (!res.ok) {
    throw new Error('Something went wrong fetching the show\'s reservations');
  }
  const reservations = await res.json();
  return reservations;
}

export { fetchShow, fetchReservations };
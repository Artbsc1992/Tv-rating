const fetchShow = async (showId) => {
  const res = await fetch(`https://api.tvmaze.com/shows/${showId}`);
  if (!res.ok) {
    throw new Error('Something went wrong fetching the given show.');
  }
  const show = await res.json();
  return show;
};

const fetchcomments = async (showId) => {
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RAGwAMc1vyzTWmF6xGjO/comments?item_id=${showId}`);
  if (res.status === 400) {
    throw new Error('This show doesnt have comments yet.');
  }

  if (!res.ok) {
    throw new Error('Something went wrong fetching the shows comments');
  }

  const comments = await res.json();
  return comments;
};
const fetchReservations = async (showId) => {
  const res = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RAGwAMc1vyzTWmF6xGjO/reservations?item_id=${showId}`,);
  if (res.status === 400) {
    throw new Error('This show doesnt have reservations yet.');
  }

  if (!res.ok) {
    throw new Error('Something went wrong fetching the shows reservations');
  }

  const reservations = await res.json();
  return reservations;
};

const postReservation = async (reservation) => {
  reservation.date_start = new Date(reservation.date_start);
  reservation.date_end = new Date(reservation.date_end);

  const res = await fetch(
    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RAGwAMc1vyzTWmF6xGjO/reservations',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(reservation),
    },
  );

  if (!res.ok) {throw new Error('Something went wrong while adding a new reservation.');}

  return true;
};

const postComment = async (commentss) => {
  const res = await fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/RAGwAMc1vyzTWmF6xGjO/comments',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(commentss),
    },
  );

  if (!res.ok) {
    throw new Error('Something went wrong while adding a new reservation.');
  }

  return true;
};

export {
  fetchShow, fetchcomments, fetchReservations, postReservation, postComment,
};

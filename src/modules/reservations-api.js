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
    throw new Error('This show doesn\'t have comments yet.');
  }

  if (!res.ok) {
    throw new Error('Something went wrong fetching the show\'s comments');
  }

  const comments = await res.json();
  return comments;
};

export { fetchShow, fetchcomments };